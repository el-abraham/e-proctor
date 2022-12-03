import axios from "axios"
import QuestionInstanceAnswer, { QuestionInstanceAnswerDTO, QuestionInstanceAnswerFactory } from "../_models/question-instance-answer.model"
import { QuizInstanceDTO, QuizInstanceFactory } from "../_models/quiz-instance.model"
import { api, IResponse } from "./config"



const getQuestion = async (token: string, instance: number, no: number) => {
  try {
    const { data } = await api.get(`/session/question?instance=${instance}&no=${no}`, {
      headers: {
        "x-access-tokens": token
      }
    })

    const response: IResponse<QuestionInstanceAnswerDTO> = data;
    const questionInstance = QuestionInstanceAnswerFactory(response.data)

    return questionInstance;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
      return
    }
    console.log(error)
    return
  }

}

const postAnswer = async (token: string, questionAnswer: QuestionInstanceAnswer) => {
  try {
    const { data } = await api.post(`/session/answer`, {
      "answer_instance": questionAnswer.id,
      "answer": questionAnswer.answer!.id
    }, {
      "headers": {
        "x-access-tokens": token
      }
    })

    const response: IResponse<QuestionInstanceAnswerDTO> = data
    const questionAnswerInstance = QuestionInstanceAnswerFactory(response.data)
    return questionAnswerInstance

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
      return
    }
    console.log(error)
    return
  }
}

const getQuizInstanceInfo = async (token: string, instance: number) => {
  try {
    const { data } = await api.get(`/session/instance/info?instance=${instance}`, {
      headers: {
        "x-access-tokens": token
      }
    })

    const response: IResponse<QuizInstanceDTO> = data;
    const quizInstance = QuizInstanceFactory(response.data);
    return quizInstance

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
      return
    }
    console.log(error)
    return
  }
}

const getCurrentSessionStart = async (token: string) => {
  try {
    const { data } = await api.get("/session/current/instance", {
      headers: {
        "x-access-tokens": token
      }
    });

    const response: IResponse<QuizInstanceDTO> = data;
    const instance = QuizInstanceFactory(response.data)
    return instance

  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status == 404) {
        return undefined
      }
      console.log(error.response)
      return undefined
    }
    console.log(error)
    return undefined
  }
}

export { getQuestion, getQuizInstanceInfo, postAnswer, getCurrentSessionStart }