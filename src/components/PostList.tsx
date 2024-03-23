"use client";
import PostListCard from "./PostListCard";
import GridSpinner from "./ui/GridSpinner";
import usePosts from "@/hooks/posts";

export default function PostList() {
  const { posts, isLoading: loading } = usePosts();
  // TODO: 계좌, 지도 drawer
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
