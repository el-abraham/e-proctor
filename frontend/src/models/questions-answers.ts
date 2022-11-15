type QuestionAnswerProps = {
  id: number;
  answer: [];
  is_correct: boolean;
  image: string;
  description?: string;
};

export default class QuestionAnswer {
  id: number;
  answer: [];
  is_correct: boolean | undefined;
  image: string | undefined;
  description?: string | undefined;

  constructor(data: QuestionAnswerProps) {
    this.id = data.id;
    this.answer = data.answer;
    this.is_correct = data.is_correct;
    this.image = data.image;
    this.description = data.description;
  }
}

export const QuestionAnswerFactory = (data: any) => {
  return new QuestionAnswer({
    id: data.id,
    answer: data.answer,
    is_correct: data.is_correct,
    image: data.image,
    description: data.description,
  });
};
