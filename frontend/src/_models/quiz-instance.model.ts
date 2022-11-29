import QuizSession, { QuizSessionDTO, QuizSessionFactory } from "./quiz-session.model";



type QuizInstanceProps = {
  id: number;
  session: QuizSession,
  status: number,
  attempt?: number | undefined
}

export interface QuizInstanceDTO {
  id: number;
  session: QuizSessionDTO,
  status: number,
  attempt?: number | undefined
}

export default class QuizInstance {
  id: number;
  session: QuizSession;
  status: number;
  attempt?: number | undefined;


  constructor(data: QuizInstanceProps) {
    this.id = data.id;
    this.session = data.session;
    this.attempt = data.attempt;
    this.status = data.status;
  }
}

export const QuizInstanceFactory = (data: QuizInstanceDTO) => {
  return new QuizInstance({
    id: data.id,
    session: QuizSessionFactory(data.session),
    status: data.status,
    attempt: data.attempt
  })
}