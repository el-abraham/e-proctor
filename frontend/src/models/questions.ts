type QuestionProps = {
  id: number;
  name: string;
  question_text?: string;
  description?: string;
  status?: string;
  version?: string;
};

export default class Questions {
  id: number;
  name: string | undefined;
  question_text?: string | undefined;
  description?: string | undefined;
  status?: string | undefined;
  version?: string | undefined;

  constructor(data: QuestionProps) {
    this.id = data.id;
    this.name = data.name;
    this.question_text = data.question_text;
    this.description = data.description;
    this.status = data.status;
    this.version = data.version;
  }
}

export const QuestionFactory = (data: any) => {
  return new Questions({
    id: data.id,
    name: data.name,
    question_text: data.question_text,
    description: data.description,
    status: data.status,
    version: data.version,
  });
};
