export const GET = async () => {
  const data = {
    message: "Hello from nested route!",
  };

  return new Response(JSON.stringify(data));
};
