const Docs = async ({ params }) => {
  const { slug } = await params;

  return (
    <div>
      <h1>Docs Page</h1>
      <ShowText slug={slug} index={0} />
      <ShowText slug={slug} index={1} />
      <ShowText slug={slug} index={2} />
    </div>
  );
};

export default Docs;

function ShowText({ slug, index }) {
  const slashes = Array.from({ length: index + 1 })
    .map((_) => "-")
    .join("");

  if (slug?.length <= index || !slug) return "";

  return (
    <h2>
      {slashes} {slug?.[index]}
    </h2>
  );
}
