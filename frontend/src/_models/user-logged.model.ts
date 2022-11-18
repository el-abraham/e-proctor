
type UserLoggedProps = {
  id: number,
  fullname: string,
  role: string | string[]
}


export default class UserLogged {
  id: number;
  fullname: string;
  role: string[] | string;

  constructor(data: UserLoggedProps) {
    this.id = data.id;
    this.fullname = data.fullname;
    this.role = data.role;
  }
}

