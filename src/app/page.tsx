import PostList from "@/components/PostList";
import StoryBoard from "@/components/StoryBoard";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";

export default function HomePage() {
  return (
    <section className="w-full flex flex-col">
      <StoryBoard />
      <PostList />
    </section>
  );
}
