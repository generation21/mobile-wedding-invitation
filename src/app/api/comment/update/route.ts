import { addCommentToPost } from "@/service/posts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id, username, password, comment, emoji } = await req.json();
  if (!id || comment === undefined) {
    return new Response("Bad Request", { status: 400 });
  }
  const payload = {
    username,
    comment,
    emoji,
    password,
  };

  return addCommentToPost({ id, payload })
    .then(() => NextResponse.json({ message: "Comment added successfully" }))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
