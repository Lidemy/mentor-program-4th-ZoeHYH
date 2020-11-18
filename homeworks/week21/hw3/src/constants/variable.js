export const MEDIA_QUERY_MD = "@media screen and (max-width: 660px)";
export const MEDIA_QUERY_SM = "@media screen and (max-width: 400px)";
export const LOCAL_STORAGE_KEY = "lazy-form";
export const FORM_INFO = {
  title: "新拖延運動報名表單",
  description: [
    "活動日期：2020/12/10 ~ 2020/12/11",
    "活動地點：台北市大安區新生南路二段1號",
  ],
  submit: "提交",
  alert: "*必填",
  reminder: "請勿透過表單送出您的密碼。",
  copyright: "© 2020 © Copyright. All rights Reserved.",
};
export const INPUT_CONTENT = {
  name: {
    title: "暱稱",
    type: "text",
    name: "name",
    placeholder: "暱稱",
    required: "請填暱稱！",
  },
  email: {
    title: "電子郵件",
    type: "email",
    name: "email",
    placeholder: "電子郵件",
    required: "請填 E-mail！",
  },
  phone: {
    title: "手機號碼",
    type: "tel",
    name: "phone",
    placeholder: "手機號碼",
    required: "請填手機號碼！",
  },
  type: {
    title: "報名類型",
    type: "radio",
    name: "type",
    radios: [
      {
        name: "imagine",
        text: "躺在床上用想像力實作",
      },
      {
        name: "smartphone",
        text: "趴在地上滑手機找現成的",
      },
    ],
    required: "請選擇報名類型！",
  },
  channel: {
    title: "怎麼知道這個活動的？",
    type: "text",
    name: "channel",
    placeholder: "您的回答",
    required: "請填知道活動的途徑！",
  },
  suggestion: {
    title: "其他",
    description: "對活動的一些建議",
    type: "text",
    name: "suggestion",
    placeholder: "您的建議",
  },
};
