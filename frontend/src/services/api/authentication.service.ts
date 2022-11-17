import { api } from "./config"


type LoginProps = {
  username: string,
  password: string
}

const userLogin = async ({ username, password }: LoginProps) => {
  try {
    const { data } = await api.post("/login", {
      username, password
    })
    
    // fetch('http://localhost:5000/login', {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username, password
    //   }),
    //   // headers: { 'Authorization': 'Basic ' + btoa(`${username}:${password}`) }, // the values of username and password variables are coming from a simple login form
    //   method: 'POST',
    //   mode: 'cors', // here we specify that the method is CORS meaning that the browser is allowed to make CORS requests
    //   credentials: "include"

    // })
    //   .then(res => res)
    //   .then(data => console.log(data))

    console.log(data)
    localStorage.setItem('token', JSON.stringify(data))
    // return data

  } catch (error) {

  }
}

export { userLogin }