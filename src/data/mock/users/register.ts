import { MockMethods, MockResponse } from "axios-mock-server"
import { User } from "../../../types/User"

const register: MockMethods = {
  post: async (): Promise<MockResponse> => {
    const data: User = {
      user_id: 1,
      user_name: "kobakichi",
      password: "kazu55",
      token: "aaaaaaaaaa",
    }
    return [200, data]
  },
}

export default register
