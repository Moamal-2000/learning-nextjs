"use client";

import { useEffect, useState } from "react";
import { getPosts } from "../functions/api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div>
      <h1>Posts Page</h1>

      <ul>
        {posts?.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
