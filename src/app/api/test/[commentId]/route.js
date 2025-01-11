import { data } from "../data";

const headers = { "Content-Type": "application/json" };

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
  const id = parseInt(commentId);
  const isIdNumber = !isNaN(id);
  const commentIndex = data.findIndex((c) => c.id === id);

  if (!isIdNumber) return errorNotValidId(id);
  if (commentIndex === -1) return errorNotFound(id);

  data[commentIndex].message = body.message;
  return Response.json(data[commentIndex]);
}

function errorNotValidId(commentId) {
  return new Response(
    JSON.stringify({ error: `Input: \`${commentId}\` is not a valid ID` }),
    { status: 400, headers }
  );
}

function errorNotFound(commentId) {
  return new Response(
    JSON.stringify({ error: `Comment with ID \`${commentId}\` not found` }),
    { status: 404, headers }
  );
}
