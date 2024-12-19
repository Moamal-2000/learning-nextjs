import { getPosts } from "../functions/api";

const Posts = async () => {
  const posts = await getPosts();

  const post = {
    body: "This is a new description for the new title",
    id: 100000000,
    title: "This is a new title",
    userId: 1
  }

  posts.push(post)

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
