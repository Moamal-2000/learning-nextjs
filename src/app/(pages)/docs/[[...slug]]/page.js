import ShowText from "@/src/components/ShowText";

export const metadata = {
  title: "Docs",
};

const Docs = async ({ params }) => {
  const { slug } = await params;

  return (
    <div>
      <h1>Docs Page, Slug page</h1>

      {slug?.map((s, i) => (
        <ShowText slug={slug} index={i} key={i} />
      ))}
    </div>
  );
};

export default Docs;
