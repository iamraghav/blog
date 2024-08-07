import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  blog?: BlogWhereUniqueInput | null;
  content?: string | null;
};
