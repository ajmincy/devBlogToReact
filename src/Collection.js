import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Collection = () => {
  const collectionPath = `https://dev.to/api/articles?username=simplymincy`;

  const [articleCollection, setArticleCollection] = useState();
  useEffect(() => {
    axios.get(collectionPath).then((response) => {
      setArticleCollection(response.data);
    });
  }, [collectionPath]);

  if (!articleCollection) return null;

  const list = articleCollection.map((article) => (
    <div key={article.id}>
      <div>
        <div>
          <img src={article.social_image} alt="Article Images" />
        </div>
        <div>
          <h4>{article.title}</h4>
        </div>
      </div>
      <div>
        <Link to={`/Article/simplymincy/${article.slug}`}>Read</Link>
      </div>
    </div>
  ));

  return (
    <div>
      Dev Collection
      {list}
    </div>
  );
};

export default Collection;
