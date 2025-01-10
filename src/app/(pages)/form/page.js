import AddMessageForm from "@/src/components/AddMessageForm";
import { getTestData } from "@/src/functions/api";

const FormPage = async () => {
  const testData = await getTestData();

  return (
    <div>
      {testData?.map(({ message, id }) => (
        <h3>
          {id}: {message}
        </h3>
      ))}
      <AddMessageForm />
    </div>
  );
};

export default FormPage;
