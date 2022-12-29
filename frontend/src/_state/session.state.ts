import { atom } from "recoil";
import QuestionInstanceAnswer from "../_models/question-instance-answer.model";
import QuizInstance from "../_models/quiz-instance.model";



const curentSoalState = atom<QuestionInstanceAnswer | undefined>({
  key: "CurentSoalState",
  default: undefined
})

const curentNoState = atom<number>({
  key: 'CurentNoState',
  default: 1
})


const sessionInstanceState = atom<QuizInstance | undefined>({
  key: "SessionInstanceState",
  default: undefined
})


export { curentSoalState, curentNoState, sessionInstanceState }