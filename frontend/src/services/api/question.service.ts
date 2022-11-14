import Questions, { QuestionFactory } from "../../models/questions";
import { api, IResponse } from "./config";

const url = "";
const createQuestion = async (question: Questions) => {
  try {
    const response = await api.post(`/${{ url }}`, {
      name: question.name,
      question_text: question.question_text,
      description: question.description,
      status: question.status,
      version: question.version,
      user: "",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const getQuestion = async () => {
  try {
    const { data } = await api.get(`/${{ url }}`, {
      params: {
        id: "",
      },
    });
    const response: IResponse<Questions[]> = data;
    const question = response.data.map((value: any) => QuestionFactory(value));
    return question;
  } catch (error) {
    console.log(error);
  }
};

export { createQuestion, getQuestion };
