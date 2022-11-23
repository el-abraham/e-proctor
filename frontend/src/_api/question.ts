import axios from "axios";
import Question, { QuestionDTO, QuestionFactory } from "../_models/question";
import QuestionCategory, { QuestionCategoryDTO, QuestionCategoryFactory } from "../_models/question-category"
import { api, IResponse } from "./config"


const getCategory = async (token: string) => {
  try {
    const { data } = await api.get("/question/category", {
      headers: {
        "x-access-tokens": token
      }
    })
    const response: IResponse<QuestionCategoryDTO[]> = data;
    const category = response.data.map(value =>
      QuestionCategoryFactory(value)
    )
    return category;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
    }
  }
}


const createCategory = async (token: string, dataCategory: QuestionCategory) => {
  try {
    const { data } = await api.post("/question/category", dataCategory.convertToDTO(), {
      headers: {
        "x-access-tokens": token
      }
    })
    const response: IResponse<QuestionCategoryDTO> = data;
    const category = QuestionCategoryFactory(response.data);
    return category;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
    }
  }
}

const createQuestion = async (token: string, dataQuestion: Question) => {
  try {
    const { data } = await api.post("/question", dataQuestion.convertToDTO(), {
      headers: {
        "x-access-tokens": token
      }
    })

    const response: IResponse<QuestionDTO> = data;
    const question = QuestionFactory(response.data);
    return question;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
    }
    console.log(error)
  }
}

export { getCategory, createCategory, createQuestion }