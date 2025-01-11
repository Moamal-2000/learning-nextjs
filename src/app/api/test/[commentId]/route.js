import { data } from "../data";

export async function GET(_, context) {
  const errorData = { error: "The id of the item is not found" };
  const { commentId } = await context.params;
  const chosenData = data.find((d) => d.id === +commentId);

  if (!chosenData) return Response.json(errorData);

  return Response.json(chosenData);
}

export async function PATCH(request, context) {
  const { commentId } = await context.params;
  const body = await request.json();
  const isIdNumber = !isNaN(parseInt(commentId));

  // Error handler
  if (!isIdNumber)
    return Response.json({ error: `input: \`${commentId}\` is not valid ID` });

  return Response.json(body);
}
