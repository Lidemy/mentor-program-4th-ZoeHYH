import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from "../../constants/variable";

export const Main = styled.main`
  padding-top: 20px;
  background: #f0f0f0;
`;
export const Form = styled.form`
  border-top: 6px solid #fad312;
  max-width: 645px;
  padding: 55px 40px 35px;
  box-shadow: 1.8px 2.4px 5px 0px rgba(0, 0, 0, 0.3);
  background-color: white;
  margin: 20px auto;
  ${MEDIA_QUERY_MD} {
    width: 380px;
  }
  ${MEDIA_QUERY_SM} {
    width: 300px;
    padding: 40px 15px 40px 20px;
  }
`;
export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0 0 35px;
  ${MEDIA_QUERY_MD} {
    font-size: 32px;
  }
  ${MEDIA_QUERY_SM} {
    font-size: 24px;
  }
`;
export const Section = styled.section`
  margin-bottom: 50px;
`;
export const Description = styled.p`
  font-size: 14px;
  margin: 0 0 16px;
`;
export const Alert = styled.p`
  color: #e74149;
  margin: 0;
`;
export const SectionTitle = styled.label`
  ${(props) =>
    props.notation &&
    `
    &::after {
      content: " *";
      color: #e74149;
    }
  `}
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 20px;
`;
export const LabelRadio = styled.label`
  display: block;
  font-size: 12px;
  cursor: pointer;
`;
export const Input = styled.input`
  display: flex;
  width: 300px;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #d0d0d0;
  outline: none;
  margin-bottom: 16px;
  ${MEDIA_QUERY_SM} {
    width: 260px;
  }
  &::placeholder {
    color: #d0d0d0;
  }
  &:focus {
    border: 1px solid #fad312;
  }
  &[type="radio"] {
    display: inline-block;
    width: initial;
    cursor: pointer;
    vertical-align: -8%;
  }
  &[type="submit"] {
    display: block;
    width: initial;
    font-size: 15px;
    background-color: #fad312;
    border: none;
    border-radius: 3px;
    padding: 14px 32px;
    margin: 5px 0 20px;
    cursor: pointer;
  }
`;
export const Footer = styled.footer`
  background-color: black;
  color: #999999;
  text-align: center;
  padding: 24px;
  ${MEDIA_QUERY_SM} {
    font-size: 12px;
  }
`;
