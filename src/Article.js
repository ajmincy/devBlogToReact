import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";


const Article = () => {
  const params = useParams();

  const blogPath = `https://dev.to/api/articles/simplymincy/${params.path}`;

  const [articleBody, setArticleBody] = useState();
  useEffect(() => {
    axios.get(blogPath).then((response) => {
      setArticleBody(response.data);
    });
  }, [blogPath]);

  if (!articleBody) return null;

  const markdown = articleBody.body_markdown;

  return (
    <div>
      Dev Blog
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Article;
