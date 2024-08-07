import { Blog } from "../blog/Blog";

export type Comment = {
  author: string | null;
  blog?: Blog | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
