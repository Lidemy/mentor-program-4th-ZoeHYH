import styled from "styled-components";
import { COLOR, DISTENCE, EFFECT, FONT } from "../constants/style";

export const ArticleContainer = styled.div`
  color: ${COLOR.primary};
  padding: ${DISTENCE.xs};
  max-width: 600px;
  margin: 0 auto;
  & + & {
    border-top: 1px solid ${COLOR.primaryDark + "30"};
  }
  & h3 {
    color: ${COLOR.primaryDark};
    font-size: ${FONT.md};
    font-weight: bold;
    margin: 0 0 ${DISTENCE.xs};
  }
  & span {
    display: block;
    font-size: ${FONT.xs};
  }
  & p {
    font-size: ${FONT.sm};
    margin: ${DISTENCE.xs} 0;
    letter-spacing: 2px;
  }
`;

export const ArticleHoverContainer = styled(ArticleContainer)`
  display: block;
  text-decoration: none;
  &:hover {
    box-shadow: ${EFFECT.shadowDark};
  }
`;
