import QuestionInstanceAnswer, { QuestionInstanceAnswerDTO, QuestionInstanceAnswerFactory } from "./question-instance-answer.model";
import QuizSession, { QuizSessionDTO, QuizSessionFactory } from "./quiz-session.model";



type QuizInstanceProps = {
  id: number;
  session: QuizSession,
  status: number,
  attempt?: number | undefined,
  timeStart?: number | undefined,
  totalQuestion?: number | undefined,
  questions?: QuestionInstanceAnswer[] | undefined
}

export interface QuizInstanceDTO {
  id: number;
  session: QuizSessionDTO,
  status: number,
  attempt?: number | undefined,
  total_question?: number | undefined,
  time_start?: number | undefined,
  questions?: QuestionInstanceAnswerDTO[] | undefined;
}

export default class QuizInstance {
  id: number;
  session: QuizSession;
  status: number;
  attempt?: number | undefined;
  totalQuestion?: number | undefined;
  timeStart?: number | undefined;
  questions?: QuestionInstanceAnswer[] | undefined;

  constructor(data: QuizInstanceProps) {
    this.id = data.id;
    this.session = data.session;
    this.attempt = data.attempt;
    this.status = data.status;
    if (data.totalQuestion) this.totalQuestion = data.totalQuestion;
    if (data.timeStart) this.timeStart = data.timeStart;
    if (data.questions) this.questions = data.questions;
  }
}

export const QuizInstanceFactory = (data: QuizInstanceDTO) => {
  return new QuizInstance({
    id: data.id,
    session: QuizSessionFactory(data.session),
    status: data.status,
    attempt: data.attempt,
    totalQuestion: data.total_question,
    timeStart: data.time_start,
    questions: data.questions?.map(value => QuestionInstanceAnswerFactory(value))
  })
}