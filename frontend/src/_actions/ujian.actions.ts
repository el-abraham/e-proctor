import { useRecoilState } from "recoil";
import { getQuizInstance } from "../_api/quiz";
import { ujianListState } from "../_state/ujian.state";
import useUserActions from "./user.actions";



const useUjianActions = () => {
  const userActions = useUserActions();
  const [ujianList, setUjianList] = useRecoilState(ujianListState);



  const list = async () => {
    const token = userActions.getToken();
    const res = await getQuizInstance(token!);
    setUjianList(res ?? [])
    return res;
  }


  return { list };
}

export default useUjianActions;