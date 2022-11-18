import axios from "axios"
import UserLogged from "../_models/user-logged.model"
import { api, IResponse } from "./config"

type LoginProps = {
  username: string,
  password: string
}

type LoginRes = {
  token: string,
  user: UserLogged
}

const userLogin = async ({ username, password }: LoginProps) => {
  try {
    const { data } = await api.post("/login", {
      username, password
    });

    const response: IResponse<LoginRes> = data

    // if (response.data.token) {
    //   storeToken(response.data.token)
    // }
    return response.data;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data)
    } else {
      console.error(error)
    }
  }
}

const storeToken = (token: string) => {
  localStorage.setItem("_usr_log", token)
}

const userRefresh = async (token: string) => {
  try {
    const { data } = await api.post("/user-refresh", {}, {
      headers: {
        "x-access-tokens": token
      }
    })

    const response: IResponse<LoginRes> = data

    return response.data

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response)
    }
  }
}





export { userLogin, userRefresh }