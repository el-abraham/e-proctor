import Quiz, { QuizFactory } from "../../models/quiz"
import { api, IResponse } from "./config"






const createQuiz = async (quiz: Quiz) => {
  try {
    const response = await api.post("/quiz", {
      "name": quiz.title,
      "duration": quiz.duration,
      "description": quiz.description,
      "user": ""
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}


const getQuiz = async () => {
  try {
    const { data } = await api.get("/quiz", {
      params: {
        "id": 64
      }
    })
    const response: IResponse<Quiz[]> = data
    const quiz = response.data.map((value: any) => QuizFactory(value))
    return quiz;
  } catch (error) {
    console.log(error)
  }
}


export { createQuiz, getQuiz }