import { api } from "./config"

const testConnectionToServer = async () => {

  try {
    // const response = await api.get("/connection")
    const response = await api.post("/connection", {
      "test": 123
    })
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }

}


export { testConnectionToServer }