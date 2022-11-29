import { atom } from "recoil";
import QuestionCategory from "../_models/question-category.model";




const listCategoryState = atom<QuestionCategory[] | undefined>({
  key: "ListCategoryState",
  default: undefined
})

export { listCategoryState }