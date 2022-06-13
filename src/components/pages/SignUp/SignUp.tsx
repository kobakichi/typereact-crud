import styles from "./SignUp.module.css"
import { useNavigate } from "react-router-dom"
import { Input, Button, Loader } from "semantic-ui-react"
import { ChangeEvent, memo, useContext, useState, VFC } from "react"
import React from "react"
import { UserContext } from "../../../providers/UserProviders"
import { postLoginUser, postRegisterUser } from "../../../api/userRequest"

export const SignUp: VFC = memo(() => {
  const navigate = useNavigate()
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMessgage, setErrorMessage] = useState("")

  // グローバルなstate
  const { setUserData } = useContext(UserContext)

  // ローディングフラグ
  const [isLoading, setIsLoading] = useState(false)

  const onChangeUserNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }

  const onChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onChangeConfirmPasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  // アカウウントを作成する関数
  const onClickCreateAccount = async () => {
    if (!username || !password || !confirmPassword) {
      setErrorMessage("未入力の項目があります。")
      return
    } else if (password !== confirmPassword) {
      setErrorMessage("入力に誤りがあります。")
      return
    }
    setIsLoading(true)
    try {
      const signinResult = await postRegisterUser(username, password)
      if (signinResult) {
        const signupResult = await postLoginUser(
          signinResult.user_name,
          password
        )
        if (signupResult) {
          setUserData(signupResult)
          localStorage.setItem("token", signupResult.token)
          navigate("/")
        }
      }
    } catch {
      setErrorMessage("サインインできませんでした。")
    } finally {
      setIsLoading(false)
    }
  }

  const transitionToSignin = () => {
    navigate("/signin")
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <Input
          className={styles.form}
          type='text'
          focus
          fluid
          placeholder='UserName'
          onChange={onChangeUserNameInput}
        />
        <Input
          className={styles.form}
          type='password'
          focus
          fluid
          placeholder='password'
          onChange={onChangePasswordInput}
          value={password}
        />
        <Input
          className={styles.form}
          type='password'
          focus
          fluid
          placeholder='Confirm Password'
          onChange={onChangeConfirmPasswordInput}
          value={confirmPassword}
        />
        <div>
          {isLoading ? (
            <Loader active inline='centered' />
          ) : (
            <Button
              className={styles.sighupbutton}
              onClick={onClickCreateAccount}
            >
              Sign up
            </Button>
          )}
        </div>
        {errorMessgage ? (
          <p className={styles.errorMessgage}>{errorMessgage}</p>
        ) : null}
      </div>
    </div>
  )
})
