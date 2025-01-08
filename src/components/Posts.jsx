import { getPosts } from "../functions/api";

const Posts = async () => {
  const posts = await getPosts();

  return (
    <>
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
    </>
  );
};

export default Posts;
