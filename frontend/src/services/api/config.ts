import axios from "axios"

const api = axios.create({
  baseURL: "http://192.168.0.12:5000",
  withCredentials: true,
})

interface IResponse<T> {
  data: T
}

export { api }
export type { IResponse }
