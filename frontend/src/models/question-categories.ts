type Question_CategoriesProps = {
  id: number;
  parent?: string;
  name: string;
  description: string;
};

export default class Questions_Categories {
  id: number;
  parent?: string | undefined;
  name: string | undefined;
  description: string | undefined;

  constructor(data: Question_CategoriesProps) {
    this.id = data.id;
    this.parent = data.parent;
    this.name = data.name;
    this.description = data.description;
  }
}

export const Question_CategoriesFactory = (data: any) => {
  return new Questions_Categories({
    id: data.id,
    parent: data.parent ?? undefined,
    name: data.name,
    description: data.description,
  });
};
