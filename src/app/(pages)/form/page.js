import Form from "@/src/components/Form";
import { getTestData } from "@/src/functions/api";

const FormPage = async () => {
  const testData = await getTestData();

  return (
    <div>
      <Form testData={testData} />
    </div>
  );
};

export default FormPage;
