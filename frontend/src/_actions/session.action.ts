import { useRecoilState, useSetRecoilState } from "recoil";
import { getQuizInstance } from "../_api/quiz";
import { getCurrentSessionStart, getQuestion, getQuizInstanceInfo, postAnswer } from "../_api/session";
import QuestionAnswer from "../_models/question-answer.model";
import QuestionInstanceAnswer from "../_models/question-instance-answer.model";
import { curentSoalState, sessionInstanceState } from "../_state/session.state";
import useUserActions from "./user.actions";



const useSessionActions = () => {
  const userActions = useUserActions();
  const [curentSoal, setCurentSoal] = useRecoilState(curentSoalState);
  const [sessionInstance, setSessionInstance] = useRecoilState(sessionInstanceState);


  const question = async (question: QuestionInstanceAnswer) => {
    setCurentSoal(question)
    // const res = await getQuestion(userActions.getToken()!, instance, no);
    // if (res) {
    //   setCurentSoal(res);
    // }
  }

  const info = async (instance: number) => {
    const res = await getQuizInstanceInfo(userActions.getToken()!, instance)
    if (res) {
      setSessionInstance(res)
    }
  }

  const getInstance = async (instance: number) => {
    const res = await getQuizInstanceInfo(userActions.getToken()!, instance)
    if (res) {
      return res
    }
  }

  const setAnswer = async (answer: QuestionAnswer) => {
    const updateAnswer = { ...curentSoal!, answer: answer }
    const res = await postAnswer(userActions.getToken()!, updateAnswer)
    setCurentSoal(updateAnswer)
    updateAnswerInstance(updateAnswer)
  }

  const updateAnswerInstance = (instance: QuestionInstanceAnswer) => {
    if (sessionInstance?.questions != undefined && curentSoal != undefined) {
      const update = sessionInstance.questions.map((value) => {
        if (value.id == curentSoal.id) {
          return instance
        }
        return value
      })
      setSessionInstance({ ...sessionInstance, questions: update })
    }
  }

  const changeQuestion = (no: number) => {
    if (sessionInstance != undefined) {
      setCurentSoal(sessionInstance.questions![no - 1])
    }
  }


  const currentStart = async () => {
    const res = await getCurrentSessionStart(userActions.getToken()!)
    return res;
  }


  const initial = async () => {

  }

  return { initial, question, info, changeQuestion, setAnswer, getInstance, currentStart }
}


export default useSessionActions;