import { data } from "../data";

export async function GET(_, context) {
  const errorData = { error: "The id of the item is not found" };
  const { commentId } = await context.params;
  const chosenData = data.find((d) => d.id === +commentId);

  if (!chosenData) return Response.json(errorData);

  return Response.json(chosenData);
}
