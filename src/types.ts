import { Categories, Roles } from "utils";

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  gender: "male" | "female" | "none";
  role: RoleType;
  password?: string;
}

type RoleType = keyof typeof Roles;

export interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: PostCategory;
  date: Date;
  author: PostAuthor;
}

export type PostAuthor = Pick<User, "id" | "name" | "surname">;

type PostCategory = keyof typeof Categories;

export type UserRegistration = Omit<User, "id">;

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserContextType {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  logOut: () => void;
}
