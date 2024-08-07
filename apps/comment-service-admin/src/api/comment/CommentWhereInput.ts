import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  blogId?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
};
