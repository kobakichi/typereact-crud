import styles from "./SignUp.module.css"
import { useNavigate } from "react-router-dom"
import { Input, Button } from "semantic-ui-react"
import React from "react"

export const SignUp = () => {
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
        />
        <Input
          className={styles.form}
          type='password'
          focus
          fluid
          placeholder='password'
        />
        <Input
          className={styles.form}
          type='password'
          focus
          fluid
          placeholder='Confirm Password'
        />
        <Button className={styles.sighupbutton}>Sign up</Button>
      </div>
    </div>
  )
}
