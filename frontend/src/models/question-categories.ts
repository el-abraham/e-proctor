type QuestionCategoriesProps = {
  id: number;
  parent?: string;
  name: string;
  description: string;
};

export default class QuestionCategories {
  id: number;
  parent?: string | undefined;
  name: string | undefined;
  description: string | undefined;

  constructor(data: QuestionCategoriesProps) {
    this.id = data.id;
    this.parent = data.parent;
    this.name = data.name;
    this.description = data.description;
  }
}

export const QuestionCategoriesFactory = (data: any) => {
  return new QuestionCategories({
    id: data.id,
    parent: data.parent ?? undefined,
    name: data.name,
    description: data.description,
  });
};
