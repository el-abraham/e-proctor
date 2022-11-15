import QuestionAnswer, {
  QuestionAnswerFactory,
} from "../../models/questions-answers";
import { api, IResponse } from "./config";

const url = "";

const createQuestionsAnswers = async (question_answers: QuestionAnswer) => {
  try {
    const response = await api.post(`/${{ url }}`, {
      answer: question_answers.answer,
      is_correct: question_answers.is_correct,
      image: question_answers.image,
      description: question_answers.description,
      question: "",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const getQuestionsAnswers = async () => {
  try {
    const { data } = await api.get(`/${{ url }}`, {
      params: {
        id: "",
      },
    });
    const response: IResponse<QuestionAnswer[]> = data;
    const question_answers = response.data.map((value: any) =>
      QuestionAnswerFactory(value)
    );
    return question_answers;
  } catch (error) {
    console.log(error);
  }
};

export default { createQuestionsAnswers, getQuestionsAnswers };
