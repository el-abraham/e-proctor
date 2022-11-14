type QuizProps = {
  id: number;
  title: string;
  coverImage?: string;
  description?: string;
  duration?: string;
  questions?: [];
  session?: [];
};

export default class Quiz {
  id: number;
  title: string | undefined;
  coverImage?: string | undefined;
  description?: string | undefined;
  duration?: string | undefined;
  questions?: [];
  session?: [];

  constructor(data: QuizProps) {
    this.id = data.id;
    this.title = data.title;
    this.coverImage = data.coverImage;
    this.duration = data.duration;
    this.description = data.description;
    this.questions = data.questions;
    this.session = data.session;
  }
}

export const QuizFactory = (data: any) => {
  return new Quiz({
    id: data.id,
    title: data.name,
    coverImage: data.image ?? undefined,
    description: data.description,
    duration: data.duration,
    questions: data.questions,
    session: data.session,
  });
};
