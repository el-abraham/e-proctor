import Question, { QuestionDTO, QuestionFactory } from "./question.model";
import QuizSession, { QuizSessionDTO, QuizSessionFactory } from "./quiz-session.model";
import User, { UserDTO, UserFactory } from "./user.model";

type QuizProps = {
  id?: number | undefined;
  title: string;
  coverImage?: string;
  description?: string;
  duration: number;
  questions?: Question[] | undefined;
  session?: QuizSession[] | undefined;
  user?: User | undefined;
};

export interface QuizDTO {
  id: number;
  name: string;
  image?: string | undefined;
  duration: number;
  description?: string | undefined;
  user: UserDTO;
  questions?: QuestionDTO[];
  sessions?: QuizSessionDTO[];
}

export default class Quiz {
  id?: number | undefined;
  title: string | undefined;
  coverImage?: string | undefined;
  description?: string | undefined;
  duration: number;
  questions?: Question[] | undefined;
  session?: QuizSession[] | undefined;
  user?: User | undefined;

  constructor(data: QuizProps) {
    if (data.id) this.id = data.id;
    this.title = data.title;
    if (data.coverImage) this.coverImage = data.coverImage;
    this.duration = data.duration;
    if (data.description) this.description = data.description;
    if (data.questions) this.questions = data.questions;
    if (data.session) this.session = data.session;
    if (data.user) this.user = data.user;
  }

  convertToDTO() {
    return {
      "name": this.title,
      "duration": this.duration,
      "description": this.description,
    }
  }
}

export const QuizFactory = (data: QuizDTO): Quiz => {
  return new Quiz({
    id: data.id,
    title: data.name,
    coverImage: data.image ?? undefined,
    description: data.description,
    duration: data.duration,
    questions: data.questions?.map(value => QuestionFactory(value)),
    session: data.sessions?.map(value => QuizSessionFactory(value)),
    user: UserFactory(data.user)
  });
};

