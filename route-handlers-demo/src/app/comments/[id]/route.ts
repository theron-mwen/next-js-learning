import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const comment = comments.find((c) => c.id === id);
  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }
  return new Response(JSON.stringify(comment), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const commentIndex = comments.findIndex((c) => c.id === id);

  if (commentIndex === -1) {
    return new Response("Comment not found", { status: 404 });
  }

  const updatedData = await request.json();
  const {text} = updatedData;
  comments[commentIndex].text = text;

  return new Response(JSON.stringify(comments[commentIndex]), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const commentIndex = comments.findIndex((c) => c.id === id);
  const deletedComment = comments[commentIndex];

  comments.splice(commentIndex, 1);
  return Response.json(deletedComment);
}
