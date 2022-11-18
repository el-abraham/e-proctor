import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { userLogin, userRefresh } from "../_api/authentication"
import { userState } from "../_state/user.state"


const useUserActions = () => {
  const setUserLogged = useSetRecoilState(userState);
  const navigate = useNavigate();
  const key = "_usr_log";

  const login = (username: string, password: string) => {
    return userLogin({
      username, password
    }).then(res => {
      localStorage.setItem(key, res!.token)
      setUserLogged(res!.user)
      navigate("/")
    })
  }

  const checkToken = () => {
    const token = localStorage.getItem(key);
    if (token) return true;
    return false;
  }

  const refresh = async () => {
    const token = localStorage.getItem(key);
    const res = await userRefresh(token!)
    if (res?.user) {
      setUserLogged(res!.user)
      return true;
    } return false;
  }


  return { login, checkToken, refresh }
}

export default useUserActions