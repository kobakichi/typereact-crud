import React from "react"
import styles from "./Login.module.css"
import { Input, Button, Loader } from "semantic-ui-react"
import { ChangeEvent, memo, useContext, useState, VFC } from "react"
import { UserContext } from "../../../providers/UserProviders"
import { postLoginUser } from "../../../api/userRequest"
import { useNavigate } from "react-router-dom"

export const Login: VFC = memo(() => {
  const navigate = useNavigate()

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMessgage, setErrorMessage] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const { setUserData } = useContext(UserContext)

  const onChangeUserNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }

  const onChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onChangeConfirmPasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  const onClickLogin = () => {
    if (!userName || !password) {
      setErrorMessage("メールアドレスとパスワードを入力してください。")
      return
    }
    setIsLoading(true)
    postLoginUser(userName, password)
      .then((result) => {
        if (result) {
          setUserData(result)
          localStorage.setItem("token", result.token)
          navigate("/Home")
        }
      })
      .catch(() => setErrorMessage("入力内容が違います。"))
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>LOG IN</h1>
        <Input
          className={styles.form}
          type='text'
          focus
          fluid
          placeholder='UserName'
          onChange={onChangeUserNameInput}
          value={userName}
        />
        <Input
          className={styles.form}
          type='password'
          focus
          fluid
          placeholder='Password'
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
              onClick={onClickLogin}
              className={styles.loginbutton}
              size='small'
            >
              Log in
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
