import { data } from "./data";

export async function GET() {
  return new Response(JSON.stringify(data));
}

export async function POST(request) {
  const req = await request.json();

  const newMessage = {
    message: req.message,
    id: data.length + 1,
  };

  data.push(newMessage);

  const messageStringified = JSON.stringify(newMessage);
  const headers = {
    "Content-Type": "application/json",
  };

  return new Response(messageStringified, {
    headers,
    status: 201,
  });
}
