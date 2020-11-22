import { useState } from "react";
export default function useForm(localStorageKey, inputContent) {
  const [responses, setResponses] = useState(() => {
    let localResponses = localStorage.getItem(localStorageKey);
    if (localResponses && localResponses !== "[]" && localResponses !== "") {
      return JSON.parse(localResponses);
    }
    let template = [];
    Object.values(inputContent).forEach((content) => {
      template.push({ name: content.name, content: "" });
    });
    return template;
  });
  let isSubmit = true;
  const handleResponseEdit = (key, value) => {
    setResponses(
      responses.map((response) => {
        if (response.name !== key) return response;
        return { ...response, content: value };
      })
    );
    localStorage.setItem(localStorageKey, JSON.stringify(responses));
  };
  const handleSubmit = (event) => {
    setResponses(
      responses.map((response) => {
        if (!inputContent[response.name].required || response.content !== "")
          return response;
        isSubmit = false;
        return { ...response, content: false };
      })
    );
    if (!isSubmit) {
      localStorage.setItem(localStorageKey, JSON.stringify(responses));
      return event.preventDefault();
    }
    alert(
      responses
        .map((response) => {
          if (inputContent[response.name].type === "radio") {
            const radio = inputContent[response.name].radios.filter(
              (radio) => radio.name === response.content
            );
            const text = radio[0] ? radio[0].text : "";
            return `${inputContent[response.name].title} ${text}`;
          }
          return `${inputContent[response.name].title} ${response.content}`;
        })
        .join("\n")
    );
    localStorage.removeItem(localStorageKey);
  };
  return { responses, handleSubmit, handleResponseEdit };
}
