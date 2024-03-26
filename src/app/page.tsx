import PostList from "@/components/PostList";
import StoryBoard from "@/components/StoryBoard";

import { Suspense } from "react";

export default function HomePage() {
  return (
    <section className="w-full flex flex-col">
      <Suspense>
        <StoryBoard />
      </Suspense>
      <PostList />
    </section>
  );
}
