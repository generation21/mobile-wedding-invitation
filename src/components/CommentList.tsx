"use client";
import { Comment } from "@/model/posts";
import { useState } from "react";
import CommentDetail from "./CommentDetail";

type Props = {
  comments: Comment[];
  handleEditComment: (comment: Comment, method: "Edit" | "Remove") => void;
};
export default function CommentList({ comments, handleEditComment }: Props) {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };
  return (
    <article className="border-t border-gray-300 py-3">
      {!open && comments.length > 0 && (
        <button
          className="font-bold  text-sky-500"
          onClick={handleOnClick}
        >{`View all ${comments.length} comments`}</button>
      )}
      {open && (
        <div className="space-y-4 mt-4">
          {comments.map((item, index) => (
            <CommentDetail
              key={index}
              item={item}
              handleEditComment={handleEditComment}
            />
          ))}
          <button
            className="mt-4 text-sm text-gray-500"
            onClick={handleOnClick}
          >
            댓글 숨기기
          </button>
        </div>
      )}
    </article>
  );
}
