type UserProps = {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  picture?: string;
};

export default class User {
  id: number;
  firstname: string | undefined;
  lastname: string | undefined;
  username: string | undefined;
  password: string | undefined;
  picture?: string | undefined;

  constructor(data: UserProps) {
    this.id = data.id;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.username = data.username;
    this.password = data.password;
    this.picture = data.picture;
  }
}

export const UserFactory = (data: any) => {
  return new User({
    id: data.id,
    firstname: data.first_name,
    lastname: data.last_name,
    username: data.username,
    password: data.password,
    picture: data.picture,
  });
};
