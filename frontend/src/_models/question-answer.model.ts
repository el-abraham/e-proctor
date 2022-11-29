type QuestionAnswerProps = {
  id?: number | undefined,
  answer: string,
  isCorrect: boolean,
  image?: string | undefined,
  description?: string
};


export interface QuestionAnswerDTO {
  id: number;
  is_correct: boolean;
  answer: string;
  image?: string | undefined;
  description?: string | undefined;
}


export default class QuestionAnswer {
  id?: number | undefined;
  answer: string;
  isCorrect: boolean;
  image?: string | undefined;
  description?: string | undefined;

  constructor(data: QuestionAnswerProps) {
    if (data.id) this.id = data.id;
    this.answer = data.answer;
    this.isCorrect = data.isCorrect;
    if (data.image) this.image = data.image;
    if (data.description) this.description = data.description;
  }

  convertToDTO() {
    return {
      "answer": this.answer,
      "is_correct": this.isCorrect,
    }
  }
}

export const QuestionAnswerFactory = (data: QuestionAnswerDTO) => {
  return new QuestionAnswer({
    id: data.id,
    answer: data.answer,
    isCorrect: data.is_correct,
    image: data.image ?? undefined,
    description: data.description ?? undefined,
  });
};
