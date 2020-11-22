import { useState } from "react";
import InputRadio from "./InputRadio";
import { Section, SectionTitle, Description, Input, Alert } from "./style";
import PropTypes from "prop-types";

export default function InputSection({
  template,
  response,
  handleResponseEdit,
}) {
  const IS_RADIO = template.type === "radio";
  const [value, setValue] = useState(response ? response : "");
  const handleOnChange = ({ target }) => {
    setValue(target.value);
    handleResponseEdit(target.name, target.value);
  };
  const handleOnBlur = ({ target }) => {
    if (target.value === "") handleResponseEdit(target.name, false);
  };
  return (
    <Section>
      <SectionTitle
        as={IS_RADIO ? "h2" : "label"}
        notation={template.required}
        htmlFor={IS_RADIO ? "" : template.name}
      >
        {template.title}
      </SectionTitle>
      <Description>{template.description}</Description>
      {IS_RADIO ? (
        template.radios.map((radio) => {
          return (
            <InputRadio
              key={radio.name}
              name={template.name}
              radio={radio}
              check={radio.name === value}
              handleOnChange={handleOnChange}
            />
          );
        })
      ) : (
        <Input
          type={template.type}
          placeholder={template.placeholder}
          name={template.name}
          id={template.name}
          value={value}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        ></Input>
      )}
      <Alert>{response === "" || response ? "" : template.required}</Alert>
    </Section>
  );
}

InputSection.propTypes = {
  template: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.string,
    radios: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  }),
  response: PropTypes.string,
  handleResponseEdit: PropTypes.func,
};
