import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  blog?: BlogWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
};
