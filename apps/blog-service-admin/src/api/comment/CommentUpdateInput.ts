import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  blog?: BlogWhereUniqueInput | null;
  content?: string | null;
};
