type RoleProps = {
  id: number;
  name: string;
  shortname: string;
  description?: string;
};

export default class Role {
  id: number;
  name: string | undefined;
  shortname: string | undefined;
  description?: string | undefined;

  constructor(data: RoleProps) {
    this.id = data.id;
    this.name = data.name;
    this.shortname = data.shortname;
    this.description = data.description;
  }
}

export const RoleFactory = (data: any) => {
  return new Role({
    id: data.id,
    name: data.name,
    shortname: data.shortname,
    description: data.description,
  });
};
