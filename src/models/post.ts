import { Categories } from "utils";
import models from "models";

export interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: PostCategory;
  date: Date;
  author: PostAuthor;
}

export type PostAuthor = Pick<models.User, "id" | "name" | "surname">;

type PostCategory = keyof typeof Categories;
