type RoleProps = {
  id: number;
  name: string;
  short_name: string;
  description?: string;
};

export default class Role {
  id: number;
  name: string | undefined;
  short_name: string | undefined;
  description?: string | undefined;

  constructor(data: RoleProps) {
    this.id = data.id;
    this.name = data.name;
    this.short_name = data.short_name;
    this.description = data.description;
  }
}

export const RoleFactory = (data: any) => {
  return new Role({
    id: data.id,
    name: data.name,
    short_name: data.short_name,
    description: data.description,
  });
};
