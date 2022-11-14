type QuizSessionProps = {
  id: number;
  quiz_id?: number;
  code?: number;
  name: string;
  time_start: Date;
  time_end: Date;
  description?: string;
};

export default class QuizSession {
  id: number;
  quiz_id?: number | undefined;
  code?: number | undefined;
  name: string | undefined;
  time_start: Date | undefined;
  time_end: Date | undefined;
  description: string | undefined;

  constructor(data: QuizSessionProps) {
    this.id = data.id;
    this.quiz_id = data.quiz_id;
    this.code = data.code;
    this.name = data.name;
    this.time_start = data.time_start;
    this.time_end = data.time_end;
    this.description = data.description;
  }
}

export const QuizSessionFactory = (data: any) => {
  return new QuizSession({
    id: data.id,
    quiz_id: data.quiz_id,
    code: data.code,
    name: data.name,
    time_start: data.time_start,
    time_end: data.time_end,
    description: data.description,
  });
};
