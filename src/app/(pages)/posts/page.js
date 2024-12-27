import { getPosts } from "../../../functions/api";

export const metadata = {
  title: "Posts",
};

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

      {!posts && (
        <p className="warning">
          No posts found or there is an error while getting posts
        </p>
      )}
    </div>
  );
};

export default Posts;
