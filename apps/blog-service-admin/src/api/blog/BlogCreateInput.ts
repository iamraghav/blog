import { CommentCreateNestedManyWithoutBlogsInput } from "./CommentCreateNestedManyWithoutBlogsInput";

export type BlogCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutBlogsInput;
  content?: string | null;
  title?: string | null;
};
