import { atom } from "recoil";
import Quiz from "../_models/quiz.model";


const listQuizState = atom<Quiz[] | undefined>({
  key: "ListQuizState",
  default: undefined
})


const detailQuizState = atom<Quiz | undefined>({
  key: "DetailQuiz",
  default: undefined
})

export { listQuizState, detailQuizState }