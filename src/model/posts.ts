import { Timestamp } from "firebase/firestore";

export type Comment = {
  username: string;
  password: string;
  comment: string;
  emoji: number;
};
export type FullPost = {
  id: string;
  images: string[];
  text: string;
  hashtag: string[];
  comments: Comment[];
  createdAt: Timestamp;
};

export type SimplePost = Omit<FullPost, "comments"> & {
  comments: number;
};
