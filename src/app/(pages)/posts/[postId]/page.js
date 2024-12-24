export const generateMetadata = async ({ params }) => {
  const { postId } = await params;

  return {
    title: `Post ${postId}`,
  };
};

const POST = async ({ params }) => {
  const { postId } = await params;

  return (
    <div>
      <h1>Post Page</h1>
      <p>Post ID: {postId}</p>
    </div>
  );
};

export default POST;
