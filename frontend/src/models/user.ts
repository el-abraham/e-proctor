type UserProps = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  picture?: string;
};

export default class User {
  id: number;
  first_name: string | undefined;
  last_name: string | undefined;
  username: string | undefined;
  password: string | undefined;
  picture?: string | undefined;

  constructor(data: UserProps) {
    this.id = data.id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.username = data.username;
    this.password = data.password;
    this.picture = data.picture;
  }
}

export const UserFactory = (data: any) => {
  return new User({
    id: data.id,
    first_name: data.first_name,
    last_name: data.last_name,
    username: data.username,
    password: data.password,
    picture: data.picture,
  });
};
