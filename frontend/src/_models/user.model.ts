import UserRole, { UserRoleDTO, UserRoleFactory } from "./user-role.model";

type UserProps = {
  id?: number | undefined;
  firstname: string;
  lastname?: string | undefined;
  username: string;
  password?: string | undefined;
  picture?: string | undefined;
  roles?: UserRole | UserRole[] | undefined;
};

export interface UserDTO {
  id: number;
  firstname: string;
  lastname?: string | undefined;
  username: string;
  pictrure?: string | undefined;
  roles?: UserRoleDTO[];
}

export default class User {
  id?: number | undefined;
  firstname: string;
  lastname?: string | undefined;
  username: string;
  password?: string | undefined;
  picture?: string | undefined;
  roles?: UserRole | UserRole[] | undefined;

  constructor(data: UserProps) {
    if (data.id) this.id = data.id;
    this.firstname = data.firstname;
    if (data.lastname) this.lastname = data.lastname;
    this.username = data.username;
    if (data.password) this.password = data.password;
    if (data.picture) this.picture = data.picture;
    if (data.roles) this.roles = data.roles;
  }
}

export const UserFactory = (data: UserDTO) => {
  return new User({
    id: data.id,
    firstname: data.firstname,
    lastname: data.lastname,
    username: data.username,
    picture: data.pictrure,
    roles: data.roles?.map(value => UserRoleFactory(value))
  });
};

