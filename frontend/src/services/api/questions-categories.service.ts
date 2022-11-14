import Questions_Categories, {
  Question_CategoriesFactory,
} from "../../models/question-categories";
import { api, IResponse } from "./config";

const url = "";

const createQuestionCategories = async (
  questions_categories: Questions_Categories
) => {
  try {
    const response = await api.post(`/${{ url }}`, {
      parent: "",
      name: questions_categories.name,
      description: questions_categories.description,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const getQuestionCategories = async () => {
  try {
    const { data } = await api.get(`/${{ url }}`, {
      params: {
        id: "",
      },
    });
    const response: IResponse<Questions_Categories[]> = data;
    const questions_categories = response.data.map((value: any) =>
      Question_CategoriesFactory(value)
    );
    return questions_categories;
  } catch (error) {
    console.log(error);
  }
};

export { createQuestionCategories, getQuestionCategories };
