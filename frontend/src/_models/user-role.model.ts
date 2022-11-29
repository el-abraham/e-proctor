

type UserRoleProps = {
  id?: number | undefined;
  name: string;
  shortname?: string | undefined;
  description?: string | undefined;
};

export interface UserRoleDTO {
  id: number;
  name: string;
  shortname?: string | undefined;
  description?: string | undefined;
}

export default class UserRole {
  id?: number | undefined;
  name: string | undefined;
  shortname?: string | undefined;
  description?: string | undefined;

  constructor(data: UserRoleProps) {
    if (data.id) this.id = data.id;
    this.name = data.name;
    if (data.shortname) this.shortname = data.shortname;
    if (data.description) this.description = data.description;
  }
}

export const UserRoleFactory = (data: UserRoleDTO) => {
  return new UserRole({
    id: data.id,
    name: data.name,
    shortname: data.shortname,
    description: data.description,
  });
};
