import { deleteComment } from "@/service/posts";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const { id, username, password, comment, emoji } = await req.json();
  if (!id || comment === undefined) {
    return new Response("Bad Request", { status: 400 });
  }
  const targetComment = {
    username,
    comment,
    emoji,
    password,
  };

  return deleteComment({ id, targetComment })
    .then(() => NextResponse.json({ message: "Comment added successfully" }))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
