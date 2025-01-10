import { data } from "./data";

export async function GET() {
  return new Response(JSON.stringify(data));
}

export async function POST(request) {
  const { message } = await request.json();
  const newMsg = { message, id: data.length + 1 };

  data.push(newMsg);

  const headers = { "Content-Type": "application/json" };
  const stringifiedRequest = JSON.stringify(newMsg);

  return new Response(stringifiedRequest, { headers, status: 201 });
}
