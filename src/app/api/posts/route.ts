import { getPosts } from "@/service/posts";
import { NextResponse } from "next/server";

export async function GET() {
  // 조회된 모든 문서의 데이터를 배열로 변환합니다.
  const snapshot = await getPosts();
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  data.sort((a, b) => {
    const ids = ["introduction", "location", "calendar", "account"];
    const aIndex = ids.indexOf(a.id);
    const bIndex = ids.indexOf(b.id);

    return aIndex - bIndex;
  });
  return NextResponse.json(data);
}
