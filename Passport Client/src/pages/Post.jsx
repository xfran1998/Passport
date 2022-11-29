import { posts } from "../data";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Post = () => {
  const location = useLocation();
  const [post, setPost] = useState({});

  useEffect(() => {
    const id = location.pathname.split("/").at(-1);
    setPost(posts[id - 1]);
  }, []);

  return (
    <div className="post">
      <img src={post.img} alt="post image" className="post-img" />
      <h1>{post.tittle}</h1>
      <p>{post.longDesc}</p>
    </div>
  );
};

export default Post;
