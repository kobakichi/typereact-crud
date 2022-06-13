import axios, { AxiosResponse } from "axios"
import mock from "./mock/$mock"

export const axiosMock = (() => {
  const client = axios.create({
    baseURL: "",
    timeout: 15000,
  })
  return {
    client,
    get: <T = any, R = AxiosResponse<T>>(
      url: string,
      header?: any
    ): Promise<R> => {
      return client.get(url, header)
    },
    post: <T = any, R = AxiosResponse<T>>(
      url: string,
      data: any
    ): Promise<R> => {
      return client.post(url, data)
    },
  }
})()

const useMock = true
if (useMock) {
  mock(axiosMock.client).enableLog().setDelayTime(500)
}
