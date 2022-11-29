type QuestionCategoryProps = {
  id?: number | undefined,
  name: string,
  description?: string | undefined,
  parentId?: number | undefined,
};

/// TODO: Harus nya parent bukan parrent

export interface QuestionCategoryDTO {
  id?: number | undefined;
  name: string;
  parent?: number | undefined;
  description?: string | undefined;
}

export default class QuestionCategory {
  id?: number | undefined;
  name: string;
  description?: string | undefined;
  parentId?: number | undefined;

  constructor(data: QuestionCategoryProps) {
    if (data.id) this.id = data.id;
    if (data.parentId) this.parentId = data.parentId;
    if (data.description) this.description = data.description;
    this.name = data.name;
  }

  convertToDTO(): QuestionCategoryDTO {
    return {
      name: this.name,
      description: this.description,
      parent: this.parentId
    }
  }
}

export const QuestionCategoryFactory = (data: QuestionCategoryDTO) => {
  return new QuestionCategory({
    id: data.id,
    name: data.name,
    parentId: data.parent ?? undefined,
    description: data.description ?? undefined,
  });
};
