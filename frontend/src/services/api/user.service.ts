import User, { UserFactory } from "../../models/user";
import { api, IResponse } from "./config";

const url = "";
const createUser = async (user: User) => {
  try {
    const response = await api.post(`/${{ url }}`, {
      first_name: user.firstname,
      last_name: user.lastname,
      username: user.username,
      password: user.password,
      picture: user.picture,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async () => {
  try {
    const { data } = await api.get(`/${{ url }}`, {
      params: {
        id: "",
      },
    });
    const response: IResponse<User[]> = data;
    const user = response.data.map((value: any) => UserFactory(value));
    return user;
  } catch (error) {
    console.log(error);
  }
};

export { createUser, getUser };
