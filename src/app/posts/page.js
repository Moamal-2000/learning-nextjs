import { getPosts } from "../../functions/api";

const Posts = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts Page</h1>

      <ul>
        {posts?.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
