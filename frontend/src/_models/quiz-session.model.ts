import Quiz, { QuizDTO, QuizFactory } from "./quiz.model";

type QuizSessionProps = {
  id?: number | undefined;
  quiz?: Quiz | undefined;
  code?: string | undefined;
  name: string;
  timeStart: number;
  timeEnd: number;
  description?: string | undefined;
};


export interface QuizSessionDTO {
  id: number;
  name: string;
  code: string;
  time_start: number;
  time_end: number;
  description: string | undefined;
  quiz?: QuizDTO | undefined;
}

export default class QuizSession {
  id?: number | undefined;
  quiz?: Quiz | undefined;
  code?: string | undefined;
  name: string | undefined;
  timeStart: number;
  timeEnd: number;
  description?: string | undefined;

  constructor(data: QuizSessionProps) {
    if (data.id) this.id = data.id;
    if (data.quiz) this.quiz = data.quiz;
    if (data.code) this.code = data.code;
    this.name = data.name;
    this.timeStart = data.timeStart;
    this.timeEnd = data.timeEnd;
    if (data.description) this.description = data.description;
  }


  convertToDTO() {
    return {
      "name": this.name,
      "quiz": this.quiz?.id,
      "time_end": this.timeEnd,
      "time_start": this.timeStart
    }
  }
}

export const QuizSessionFactory = (data: QuizSessionDTO): QuizSession => {
  return new QuizSession({
    id: data.id,
    code: data.code,
    name: data.name,
    timeStart: data.time_start,
    timeEnd: data.time_end,
    description: data.description ?? undefined,
    quiz: data.quiz && QuizFactory(data.quiz)
  });
};
