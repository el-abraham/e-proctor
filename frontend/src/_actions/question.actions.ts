import { useRecoilValue, useSetRecoilState } from "recoil";
import { createCategory, createQuestion, getCategory } from "../_api/question";
import Question from "../_models/question";
import QuestionCategory from "../_models/question-category";
import { listCategoryState } from "../_state/category.state";
import useUserActions from "./user.actions";



const useQuestionActions = () => {
  const userActions = useUserActions();
  const setListCategory = useSetRecoilState(listCategoryState)


  const categories = async () => {
    const token = userActions.getToken();
    const res = await getCategory(token!);
    setListCategory(res ?? [])
  }


  const addCategory = async (data: QuestionCategory) => {
    const res = await createCategory(userActions.getToken()!, data);
    console.log(res);
  }

  const addQuestion = async (data: Question) => {
    const res = await createQuestion(userActions.getToken()!, data);
    console.log(res)
  }


  return { categories, addCategory, addQuestion }

}


export default useQuestionActions;
