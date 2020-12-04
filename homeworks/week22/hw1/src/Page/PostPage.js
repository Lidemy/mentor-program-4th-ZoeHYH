import { Input } from "../components/Input";
import { Page } from "../components/Page";
import { FormPage } from "../components/Form";
import { useState } from "react";
import { Button } from "../components/Button";
import { ErrorMessage } from "../components/ErrorMessage";
import { createPost } from "../WebApi";
import { useHistory } from "react-router-dom";

export default function PostPage() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    createPost(title, body).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      history.push("/");
    });
  };
  return (
    <Page>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <FormPage onSubmit={handleOnSubmit}>
        <Input
          content="標題"
          type="text"
          name="title"
          alert={errorMessage ? true : false}
          value={title}
          handleOnChange={(value) => setTitle(value)}
        />
        <Input
          content="內文"
          type="textarea"
          name="body"
          alert={errorMessage ? true : false}
          value={body}
          handleOnChange={(value) => setBody(value)}
        />
        <Button>發布</Button>
      </FormPage>
    </Page>
  );
}
