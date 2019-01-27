export interface User {
  name: string;
  image: string;
  id: number;
}

export interface Users {
  users: [] | Array<User> | {};
}
