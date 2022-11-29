import { useRecoilState, useRecoilValue } from "recoil";
import { getQuizInstance, getUjianByCode, subscribeUjian } from "../_api/quiz";
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

  const searchUjian = async (code: string, signal: AbortSignal) => {
    const res = await getUjianByCode(userActions.getToken()!, code, signal);
    return res;
  }

  const subscribe = async (code: string) => {
    const res = await subscribeUjian(userActions.getToken()!, code);
    console.log(res);
  }

  const getInstance = async (sessionId: number) => {
    const res = await getQuizInstance(userActions.getToken()!, { sessionId })
    if (res) {
      return res
    }
    console.log(res)
    return undefined;
  }


  return { list, searchUjian, subscribe, getInstance };
}

export default useUjianActions;