import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost } from "../WebApi";
import { Article } from "../components/Article";
import { Page } from "../components/Page";

export default function ArticlePage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    getPost(id).then((data) => setPost(data[0]));
  }, [id]);
  return (
    <Page>
      {post && (
        <Article post={post} hover={false} $center={true} paragraph={true} />
      )}
    </Page>
  );
}
