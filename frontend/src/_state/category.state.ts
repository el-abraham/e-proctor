import { atom } from "recoil";
import QuestionCategory from "../_models/question-category";




const listCategoryState = atom<QuestionCategory[] | undefined>({
  key: "ListCategoryState",
  default: undefined
})

export { listCategoryState }