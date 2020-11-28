import { getPosts } from "../WebApi";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Article } from "../components/Article";
import { Page } from "../components/Page";
import { useParams } from "react-router-dom";
import { Nav, Pagination } from "../components/Button";

export default function ListPage() {
  let { page } = useParams();
  const LIMIT = 10;
  const [posts, setPosts] = useState();
  let totalPages = useRef();
  useEffect(() => {
    getPosts().then((posts) => {
      totalPages.current = Math.ceil(posts.length / LIMIT);
      setPosts(posts.slice((page - 1) * LIMIT, page * LIMIT));
    });
  }, [page]);
  return (
    <Page>
      {posts &&
        posts.map((post) => (
          <Article
            key={post.id}
            post={post}
            hover={true}
            $center={true}
            paragraph={true}
          />
        ))}
      {posts && (
        <Pagination>
          {new Array(totalPages.current).fill("").map((item, index) => {
            return (
              <Nav
                key={index}
                to={`/list/${index + 1}`}
                isExact={false}
                label={`${index + 1}`}
              />
            );
          })}
        </Pagination>
      )}
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
