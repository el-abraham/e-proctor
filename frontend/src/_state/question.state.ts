import { atom } from "recoil";
import Question from "../_models/question";


const listQuestionState = atom<Question[]>({
  key: "ListQuestionState",
  default: undefined
})

export { listQuestionState }