import Posts from "@/src/components/Posts";

export const metadata = {
  title: "Posts",
};

const PostsPage = async () => {
  return (
    <div>
      <h1>Posts Page</h1>
      <Posts />
    </div>
  );
};

export default PostsPage;
