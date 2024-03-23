import { editComment } from "@/service/posts";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const { id, username, password, comment, emoji } = await req.json();
  if (!id || comment === undefined) {
    return new Response("Bad Request", { status: 400 });
  }
  const newComment = {
    username,
    comment,
    emoji,
    password,
  };

  return editComment({ id, newComment })
    .then(() => NextResponse.json({ message: "Comment edit successfully" }))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
