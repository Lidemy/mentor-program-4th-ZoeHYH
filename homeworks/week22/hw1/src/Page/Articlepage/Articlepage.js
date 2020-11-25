import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost } from "../../WebApi";
import { ArticleContainer } from "../../components/Article";
import { Page } from "../../components/Page";

export default function Articlepage() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    getPost(id).then((data) => setPost(data[0]));
  }, [id]);
  return (
    <Page>
      <ArticleContainer>
        <h3>{post.title}</h3>
        <span>{new Date(post.createdAt).toLocaleString()}</span>
        <p>{post.body}</p>
      </ArticleContainer>
    </Page>
  );
}
