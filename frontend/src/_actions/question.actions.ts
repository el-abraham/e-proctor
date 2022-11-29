import { useRecoilValue, useSetRecoilState } from "recoil";
import { createCategory, createQuestion, getCategory, getQuestions, GetQuestionsTypes } from "../_api/question";
import Question from "../_models/question.model";
import QuestionCategory from "../_models/question-category.model";
import { listCategoryState } from "../_state/category.state";
import { listQuestionState } from "../_state/question.state";
import useUserActions from "./user.actions";



const useQuestionActions = () => {
  const userActions = useUserActions();
  const setListCategory = useSetRecoilState(listCategoryState)
  const setListQuestion = useSetRecoilState(listQuestionState);


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

  const questions = async () => {
    const res = await getQuestions(userActions.getToken()!)
    setListQuestion(res ?? [])
  }


  return { categories, addCategory, addQuestion, questions }

}


export default useQuestionActions;
