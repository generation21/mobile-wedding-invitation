import PostList from "@/components/PostList";
import StoryBoard from "@/components/StoryBoard";
import { storybaordModel } from "@/model/storyboard";
import { fireStore } from "@/service/firesotre";
import { collection, getDocs } from "firebase/firestore";

import { Suspense } from "react";

export default async function HomePage() {
  const { storyboard } = await getServerSideProps();
  return (
    <section className="w-full flex flex-col">
      <Suspense>
        <StoryBoard storyboard={storyboard} />
      </Suspense>
      <PostList />
    </section>
  );
}

async function getServerSideProps() {
  const storyBoardCollectionRef = collection(fireStore, "storyboard");

  const snapshot = await getDocs(storyBoardCollectionRef);
  const storyboard = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as storybaordModel[];

  return { storyboard };
}
