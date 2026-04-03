import { comments } from "./data";

export async function GET() {
  return new Response(JSON.stringify(comments), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const { text } = await request.json();
  const newComment = {
    id: String(comments.length + 1),
    text,
  };
  comments.push(newComment);

  return new Response(JSON.stringify(comments), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
