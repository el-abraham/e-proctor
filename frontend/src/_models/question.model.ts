import QuestionAnswer, { QuestionAnswerDTO, QuestionAnswerFactory } from "./question-answer.model";
import QuestionCategory, { QuestionCategoryDTO, QuestionCategoryFactory } from "./question-category.model";

type QuestionProps = {
  id?: number | undefined,
  name: string,
  questionText?: string | undefined,
  description?: string,
  category: QuestionCategory,
  answers: QuestionAnswer[],
  status?: string | undefined,
  version?: number | undefined
};

export interface QuestionDTO {
  id: number;
  name: string;
  question_text: string;
  description?: string | undefined;
  status?: string | undefined;
  answers: QuestionAnswerDTO[];
  version?: number | undefined;
  category: QuestionCategoryDTO;
}

export default class Question {
  id?: number | undefined;
  name: string;
  answers: QuestionAnswer[];
  category: QuestionCategory;
  questionText?: string | undefined;
  description?: string | undefined;
  status?: string | undefined;
  version?: number | undefined;

  constructor(data: QuestionProps) {
    this.id = data.id;
    this.name = data.name;
    this.questionText = data.questionText;
    this.description = data.description;
    this.status = data.status;
    this.version = data.version;
    this.category = data.category;
    this.answers = data.answers;
  }

  convertToDTO() {
    return {
      "name": this.name,
      "category": this.category.id,
      "question_text": this.questionText,
      "answers": this.answers.map(value => value.convertToDTO()),
      "description": this.description ?? undefined
    }
  }
}

export const QuestionFactory = (data: QuestionDTO) => {
  return new Question({
    id: data.id,
    name: data.name,
    category: QuestionCategoryFactory(data.category),
    answers: data.answers.map(answer => QuestionAnswerFactory(answer)),
    description: data.description ?? undefined,
    questionText: data.question_text,
    status: data.status ?? undefined,
    version: data.version ?? undefined
  })
};
