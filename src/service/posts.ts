import { Comment } from "@/model/posts";
import { fireStore } from "@/service/firesotre";
import {
  getDocs,
  collection,
  arrayRemove,
  getDoc,
  FirestoreError,
} from "firebase/firestore";

export async function getPosts() {
  const postsRef = collection(fireStore, "posts");

  return getDocs(postsRef);
}
// _type == "storyboard"

import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { firebasedb } from "./firebasedb";

type addCommentProps = {
  id: string;
  payload: Comment;
};

export async function addCommentToPost({ id, payload }: addCommentProps) {
  const postsRef = doc(fireStore, "posts", id);

  return updateDoc(postsRef, {
    comments: arrayUnion(payload),
  });
}

type editCommentProps = {
  id: string;
  newComment: Comment;
};

export async function editComment({ id, newComment }: editCommentProps) {
  const postRef = doc(fireStore, "posts", id);
  const postSnap = await getDoc(postRef);

  if (!postSnap.exists()) {
    throw Error("Post not found");
  }

  const post = postSnap.data();
  const updatedComments = post.comments.map((item: Comment) => {
    if (
      item.username === newComment.username &&
      item.password === newComment.password &&
      item.emoji === newComment.emoji
    ) {
      return newComment; // 조건에 맞는 코멘트를 새 코멘트 객체로 교체합니다.
    }
    return item;
  });
  return updateDoc(postRef, { comments: updatedComments });
}

type deleteCommentProps = {
  id: string;
  targetComment: Comment;
};

export async function deleteComment({ id, targetComment }: deleteCommentProps) {
  const postRef = doc(fireStore, "posts", id);
  const postSnap = await getDoc(postRef);

  if (!postSnap.exists()) {
    throw Error("Post not found");
  }
  const post = postSnap.data();

  const filteredComments = post.comments.filter((item: Comment) => {
    return !(
      item.username === targetComment.username &&
      item.password === targetComment.password
    );
  });

  return updateDoc(postRef, { comments: filteredComments });
}
