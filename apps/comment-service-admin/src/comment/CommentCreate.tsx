import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="blogId" source="blogId" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
