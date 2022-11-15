import Role, { RoleFactory } from "../../models/role";
import { api, IResponse } from "./config";

const url = "";
const CreateRole = async (role: Role) => {
  try {
    const response = await api.post(`/${{ url }}`, {
      name: role.name,
      short_name: role.shortname,
      description: role.description,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const getRole = async () => {
  try {
    const { data } = await api.get(`/${{ url }}`, {
      params: {
        id: "",
      },
    });
    const response: IResponse<Role[]> = data;
    const role = response.data.map((value: any) => RoleFactory(value));
    return role;
  } catch (error) {
    console.log(error);
  }
};

export { CreateRole, getRole };
