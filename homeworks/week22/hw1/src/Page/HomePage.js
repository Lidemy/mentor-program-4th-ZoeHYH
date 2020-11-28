import { getPosts } from "../WebApi";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Article } from "../components/Article";
import { Page } from "../components/Page";

export default function HomePage() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);
  return (
    <Page>
      {posts &&
        posts.map((post) => (
          <Article
            key={post.id}
            post={post}
            hover={true}
            $center={true}
            paragraph={false}
          />
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
