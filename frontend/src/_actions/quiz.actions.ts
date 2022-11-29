import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { createQuiz, createSession, getQuiz, getSession, instanceQuestion } from "../_api/quiz";
import Quiz from "../_models/quiz.model";
import QuizSession from "../_models/quiz-session.model";
import { detailQuizState, listQuizState } from "../_state/quiz.state";
import useUserActions from "./user.actions";
import QuestionCategory from "../_models/question-category.model";
import { getQuestions, GetQuestionsTypes } from "../_api/question";
import Question from "../_models/question.model";



const useQuizActions = () => {
  const [detailQuiz, setDetailQuiz] = useRecoilState(detailQuizState);
  const userActions = useUserActions();
  const navigate = useNavigate();
  const setListQuiz = useSetRecoilState(listQuizState);

  const addQuiz = async (data: Quiz) => {
    const res = await createQuiz(userActions.getToken()!, data)
    if (res) {
      quiz();
      navigate("/ujian")
    }
  }

  const quiz = async () => {
    const res = await getQuiz(userActions.getToken()!);
    if (res) {
      setListQuiz(res)
    }
  }

  const addSession = async (data: QuizSession) => {
    const res = await createSession(userActions.getToken()!, data)
    if (res) {
      location.reload();
    }
  }

  const sessions = async (quiz: Quiz) => {
    const res = await getSession(userActions.getToken()!, quiz)
    if (res) {
      const newDetailQuiz = new Quiz({
        id: detailQuiz?.id,
        duration: detailQuiz?.duration!,
        title: detailQuiz?.title!,
        coverImage: detailQuiz?.coverImage,
        description: detailQuiz?.description,
        questions: detailQuiz?.questions,
        session: res
      });
      setDetailQuiz(newDetailQuiz);
    }
  }

  const questions = async (options?: GetQuestionsTypes) => {
    const res = await getQuestions(userActions.getToken()!, options)
    return res;
  }

  const addQuestions = async (curentQuiz: Quiz, questions: Question[]) => {
    const res = await instanceQuestion(userActions.getToken()!, curentQuiz, questions)

    if (res) {
      setDetailQuiz(res)
      quiz()
      return true
    }
    return false
  }


  return { addQuiz, quiz, addSession, sessions, questions, addQuestions }
}


export default useQuizActions;