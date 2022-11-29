import axios from "axios"
import Quiz, { QuizDTO, QuizFactory } from "../_models/quiz.model"
import QuizSession, { QuizSessionDTO, QuizSessionFactory } from "../_models/quiz-session.model"
import { api, IResponse } from "./config"
import { QuizInstanceDTO, QuizInstanceFactory } from "../_models/quiz-instance.model"
import Question from "../_models/question.model"

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

type GetQuizInstanceOptions = {
  sessionId?: number
}

const getQuizInstance = async (token: string, options?: GetQuizInstanceOptions) => {
  try {
    const { data } = await api.get(`/quiz/instance${options?.sessionId ? '?session_id=' + options.sessionId : ""}`, {
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

const getUjianByCode = async (token: string, code: string, signal: AbortSignal) => {
  try {
    const { data } = await api.get(`/quiz/search?code=${code}`, {
      headers: {
        "x-access-tokens": token
      },
      signal: signal
    })
    const response: IResponse<QuizSessionDTO> = data;
    const quizSession = QuizSessionFactory(response.data);
    return quizSession;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code != "ERR_CANCELED") {
        console.log(error.response)
      }
    }
  }

}

const subscribeUjian = async (token: string, code: string) => {
  try {
    const { data } = await api.post("/quiz/subscribe", {
      code
    }, {
      headers: {
        "x-access-tokens": token
      }
    })
    const response: IResponse<QuizInstanceDTO> = data;
    const quiz = QuizInstanceFactory(response.data);

    return quiz;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
    }
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
    console.log(error)
  }
}

const instanceQuestion = async (token: string, quiz: Quiz, questions: Question[]) => {
  try {
    const { data } = await api.post(`quiz/question`, {
      quiz: quiz.id,
      questions: questions.map(value => value.id)
    }, {
      headers: {
        "x-access-tokens": token
      }
    })
    const response: IResponse<QuizDTO> = data;
    const postQuiz = QuizFactory(response.data)
    return postQuiz
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
    }
    console.log(error)
  }
}

export { getQuizInstance, createQuiz, getQuiz, createSession, getSession, getUjianByCode, subscribeUjian, instanceQuestion }
export type { QuizInstanceRes }
