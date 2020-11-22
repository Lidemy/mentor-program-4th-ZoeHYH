import useForm from "./useForm";
import {
  Main,
  Form,
  Title,
  Section,
  Description,
  Alert,
  Input,
  Footer,
} from "./style";
import {
  LOCAL_STORAGE_KEY,
  FORM_INFO,
  INPUT_CONTENT,
} from "../../constants/variable";
import InputSection from "./InputSection";

function FormArea() {
  const { responses, handleSubmit, handleResponseEdit } = useForm(
    LOCAL_STORAGE_KEY,
    INPUT_CONTENT
  );
  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <Title>{FORM_INFO.title}</Title>
        <Section>
          {FORM_INFO.description.map((text, index) => {
            return <Description key={index}>{text}</Description>;
          })}
          <Alert>{FORM_INFO.alert}</Alert>
        </Section>
        {responses.map((response) => {
          return (
            <InputSection
              key={INPUT_CONTENT[response.name].name}
              template={INPUT_CONTENT[response.name]}
              response={response.content}
              handleResponseEdit={handleResponseEdit}
            />
          );
        })}
        <Input type="submit" value={FORM_INFO.submit} />
        <p>{FORM_INFO.reminder}</p>
      </Form>
      <Footer>{FORM_INFO.copyright}</Footer>
    </Main>
  );
}

export default FormArea;
