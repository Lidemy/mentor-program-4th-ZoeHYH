import { getPosts } from "../../WebApi";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ArticleHoverContainer } from "../../components/Article";
import { Page } from "../../components/Page";
import { Link } from "react-router-dom";

function Article({ post }) {
  return (
    <ArticleHoverContainer as={Link} to={`/article-${post.id}`}>
      <h3>{post.title}</h3>
      <span>{new Date(post.createdAt).toLocaleString()}</span>
    </ArticleHoverContainer>
  );
}

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);
  return (
    <Page>
      {posts.map((post) => (
        <Article key={post.id} post={post}></Article>
      ))}
    </Page>
  );
}

Article.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.number,
    id: PropTypes.number,
  }),
};
