import ShowText from "@/src/components/ShowText";

export const metadata = {
  title: "Docs",
};

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
