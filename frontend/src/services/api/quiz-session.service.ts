import QuizSession, { QuizSessionFactory } from "../../models/quiz-session";
import { api, IResponse } from "./config";

const url = "";
const createQuizSession = async (QuizSession: QuizSession) => {
  try {
    const response = await api.post(`/${{ url }}`, {
      quiz_id: QuizSession.quiz_id,
      code: QuizSession.code,
      name: QuizSession.name,
      time_start: QuizSession.time_start,
      time_end: QuizSession.time_end,
      description: QuizSession.description,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const getQuizSession = async () => {
  try {
    const { data } = await api.get(`/${{ url }}`, {
      params: {
        id: "",
      },
    });
    const response: IResponse<QuizSession[]> = data;
    const quizsession = response.data.map((value: any) =>
      QuizSessionFactory(value)
    );
    return quizsession;
  } catch (error) {
    console.log(error);
  }
};

export { createQuizSession, getQuizSession };
