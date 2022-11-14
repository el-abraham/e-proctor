type Questions_AnswersProps = {
  id: number;
  answer: [];
  is_correct: boolean;
  image: string;
  description?: string;
};

export default class Questions_Answers {
  id: number;
  answer: [];
  is_correct: boolean | undefined;
  image: string | undefined;
  description?: string | undefined;

  constructor(data: Questions_AnswersProps) {
    this.id = data.id;
    this.answer = data.answer;
    this.is_correct = data.is_correct;
    this.image = data.image;
    this.description = data.description;
  }
}

export const Questions_AnswersFactory = (data: any) => {
  return new Questions_Answers({
    id: data.id,
    answer: data.answer,
    is_correct: data.is_correct,
    image: data.image,
    description: data.description,
  });
};
