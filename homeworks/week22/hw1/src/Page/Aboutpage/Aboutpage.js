import { ArticleContainer } from "../../components/Article";
import { Page } from "../../components/Page";
import { ABOUT } from "../../constants/text";

export default function Articlepage() {
  return (
    <Page>
      <ArticleContainer>
        <h3>{ABOUT.header}</h3>
        <p>{ABOUT.content}</p>
      </ArticleContainer>
    </Page>
  );
}
