import { getStoryBoard } from "@/service/storyboard";
import { NextResponse } from "next/server";

export async function GET() {
  // 조회된 모든 문서의 데이터를 배열로 변환합니다.
  const snapshot = await getStoryBoard();
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return NextResponse.json(data);
}
