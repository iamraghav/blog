import { CommentUpdateManyWithoutBlogsInput } from "./CommentUpdateManyWithoutBlogsInput";

export type BlogUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutBlogsInput;
  content?: string | null;
  title?: string | null;
};
