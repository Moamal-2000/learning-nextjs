import { redirect } from "next/navigation";
import { getPosts } from "../functions/api";

const Posts = async () => {
  const posts = await getPosts();

  if (!posts) redirect("/posts/error");

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
