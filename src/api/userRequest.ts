// ユーザー登録、ログイン処理

import axios from "axios"
import { User } from "../types/User"

const URL = "localhost:3000"

// ログインのリクエスト
export const postLoginUser = async (
  inputUserName: string,
  inputPassword: string
) => {
  try {
    const formData = new FormData()
    formData.append("username", inputUserName)
    formData.append("password", inputPassword)
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    }
    const result = await axios.post<User>(
      `${URL}/users/signin`,
      formData,
      config
    )
    return result.data
  } catch (err: any) {
    throw new Error(err)
  }
}

// 新規登録リクエスト
export const postRegisterUser = async (
  inputUserName: string,
  inputPassword: string
) => {
  try {
    const result = await axios.post<User>(`${URL}/users/register`, {
      user_name: inputUserName,
      password: inputPassword,
    })
    return result.data
  } catch (err: any) {
    throw new Error(err)
  }
}
