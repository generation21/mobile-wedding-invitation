import { log } from "./../../node_modules/@grpc/grpc-js/src/logging";
import { client } from "./sanity";
import { fireStore } from "@/service/firesotre";
import { getDocs, collection } from "firebase/firestore";

export async function getStoryBoard() {
  const storyBoardCollectionRef = collection(fireStore, "storyboard");

  return getDocs(storyBoardCollectionRef);
}
// _type == "storyboard"
