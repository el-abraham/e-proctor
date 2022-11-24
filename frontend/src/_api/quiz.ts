import axios from "axios"
import Quiz, { QuizDTO, QuizFactory } from "../_models/quiz"
import QuizSession, { QuizSessionDTO, QuizSessionFactory } from "../_models/quiz-session"
import { api, IResponse } from "./config"

type QuizInstanceRes = {
  id: number,
  quiz_name: string,
  image?: string | undefined,
  description?: string | undefined,
  timestart: number,
  timeend: number,
  total_questions: number,
  proctor: {
    firstname: string,
    lastname?: string | undefined,
    picture?: string | undefined
  }
}

const getQuizInstance = async (token: string) => {
  try {
    const { data } = await api.get("/quiz/instance", {
      headers: {
        "x-access-tokens": token
      }
    })

    const response: IResponse<QuizInstanceRes[]> = data

    return response.data

  } catch (error) {

    console.log(error)
  }
}


const createQuiz = async (token: string, dataQuiz: Quiz) => {
  try {
    const { data } = await api.post("/quiz", dataQuiz.convertToDTO(), {
      headers: {
        "x-access-tokens": token
      }
    })

    const response: IResponse<QuizDTO> = data

    const quiz = QuizFactory(response.data)

    return quiz

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
    }

  }
}


const getQuiz = async (token: string) => {
  try {
    const { data } = await api.get("/quiz", {
      headers: {
        "x-access-tokens": token
      }
    })
    const response: IResponse<QuizDTO[]> = data
    const listQuiz = response.data.map(value => QuizFactory(value))

    return listQuiz;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
    }
  }
}

const createSession = async (token: string, dataSession: QuizSession) => {
  try {
    const { data } = await api.post("/quiz/session", dataSession.convertToDTO(), {
      headers: {
        "x-access-tokens": token
      }
    })

    const response: IResponse<QuizSessionDTO> = data;
    const session = QuizSessionFactory(response.data);
    return session;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
    }
  }
}


const getSession = async (token: string, quiz: Quiz) => {
  try {
    const { data } = await api.get(`/quiz/session?quiz=${quiz.id}`, {
      headers: {
        "x-access-tokens": token
      }
    })
    const response: IResponse<QuizSessionDTO[]> = data;
    const sessions = response.data.map(value => QuizSessionFactory(value));
    return sessions;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
    }
  }
}

export { getQuizInstance, createQuiz, getQuiz, createSession, getSession }
export type { QuizInstanceRes }
