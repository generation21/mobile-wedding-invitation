"use client";
import { useEffect } from "react";
import PostListCard from "./PostListCard";
import GridSpinner from "./ui/GridSpinner";
import usePosts from "@/hooks/posts";
import { useSWRConfig } from "swr";

export default function PostList() {
  // const { posts, isLoading: loading } = usePosts();
  const { posts, isLoading: loading, mutate } = usePosts();
  useEffect(() => {
    // 페이지가 포커스를 받을 때마다 데이터를 강제로 재검증합니다.
    const handleFocus = () => {
      mutate();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [mutate]);

  return (
    <section>
      {loading && (
        <div className="text-center mt-32">
          <GridSpinner />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li id={post.id} key={post.id} className="mb-4">
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
