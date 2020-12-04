import styled from "styled-components";
import { COLOR, DISTENCE, EFFECT, FONT } from "../constants/style";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArticleContainer = styled.div`
  color: ${COLOR.primary};
  padding: ${DISTENCE.xs};
  max-width: 600px;
  margin: 0 auto;
  & + & {
    border-top: 1px solid ${COLOR.primaryDark + "30"};
  }
  & span {
    display: block;
    font-size: ${FONT.xs};
  }
  & p {
    font-size: ${FONT.sm};
    margin: ${DISTENCE.xs} 0;
    letter-spacing: 2px;
    white-space: pre-line;
    word-break: break-all;
  }
`;

const ArticleTitle = styled(Link)`
  color: ${COLOR.primaryDark};
  font-size: ${FONT.md};
  font-weight: bold;
  text-decoration: none;
  white-space: pre-line;
  word-break: break-all;
  ${(prop) => (prop.$center ? "text-align: center;" : "")}
  & h3 {
    margin: 5px 0;
  }
  & h3:hover {
    color: ${COLOR.primary};
  }
`;

const ArticleHoverContainer = styled(ArticleContainer)`
  display: block;
  &:hover {
    box-shadow: ${EFFECT.shadowDark};
  }
`;

function ArticleContent({ post, paragraph }) {
  return (
    <>
      <ArticleTitle to={`/article-${post.id}`}>
        <h3>{post.title}</h3>
      </ArticleTitle>
      <span>{new Date(post.createdAt).toLocaleString()}</span>
      {paragraph && <p>{post.body}</p>}
    </>
  );
}
ArticleContent.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.number,
    id: PropTypes.number,
  }),
  paragraph: PropTypes.bool,
};

export function Article({ post, hover, $center, paragraph }) {
  if (hover)
    return (
      <ArticleHoverContainer $center={$center}>
        <ArticleContent post={post} paragraph={paragraph} />
      </ArticleHoverContainer>
    );
  return (
    <ArticleContainer $center={$center}>
      <ArticleContent post={post} paragraph={paragraph} />
    </ArticleContainer>
  );
}
Article.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.number,
    id: PropTypes.number,
  }),
  hover: PropTypes.bool,
  $center: PropTypes.bool,
  paragraph: PropTypes.bool,
};
