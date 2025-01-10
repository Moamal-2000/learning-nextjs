import { data } from "./data";

export async function GET() {
  return new Response(JSON.stringify(data));
}

export async function POST(request) {
  const requestData = await request.json();

  data.push(requestData);

  const headers = { "Content-Type": "application/json" };
  const stringifiedRequest = JSON.stringify(requestData);

  return new Response(stringifiedRequest, { headers, status: 201 });
}
