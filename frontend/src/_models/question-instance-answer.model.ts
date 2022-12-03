import QuestionAnswer, { QuestionAnswerDTO, QuestionAnswerFactory } from "./question-answer.model";
import Question, { QuestionDTO, QuestionFactory } from "./question.model";

type QuestionInstanceAnswerProps = {
  id?: number | undefined;
  instance: number;
  answer?: QuestionAnswer | undefined;
  question: Question;
}

export interface QuestionInstanceAnswerDTO {
  id: number;
  instance: number;
  answer?: QuestionAnswerDTO | undefined;
  question: QuestionDTO;
}


export default class QuestionInstanceAnswer {
  id?: number | undefined;
  instance: number;
  answer?: QuestionAnswer | undefined;
  question: Question;

  constructor(data: QuestionInstanceAnswerProps) {
    if (data.id) this.id = data.id;
    this.instance = data.instance;
    if (data.answer) this.answer = data.answer;
    this.question = data.question;
  }
}


export const QuestionInstanceAnswerFactory = (data: QuestionInstanceAnswerDTO) => {
  return new QuestionInstanceAnswer({
    id: data.id,
    instance: data.instance,
    question: QuestionFactory(data.question),
    answer: data.answer ? QuestionAnswerFactory(data.answer) : undefined
  })
}