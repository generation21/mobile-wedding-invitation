import { Comment } from "@/model/posts";
import { EmojiIcon } from "./ui/icons/EmojiIcon";
import { useState } from "react";
import { DialogForm } from "./ui/dialogFrom";
import { RiDeleteBinLine } from "react-icons/ri";
import { ImPencil } from "react-icons/im";

type Props = {
  item: Comment;
  handleEditComment: (comment: Comment, method: "Edit" | "Remove") => void;
};
export default function CommentDetail({ item, handleEditComment }: Props) {
  return (
    <>
      <div
        key={item.comment + item.username + item.password + item.emoji}
        className="flex justify-between gap-4 items-center bg-gray-50  rounded-lg shadow"
      >
        <div className="flex items-center gap-4">
          <EmojiIcon index={item.emoji} />

          <div>
            <div className="font-medium text-xs text-gray-500">
              {item.username}
            </div>
            <div className="text-gray-700 text-base">{item.comment}</div>
          </div>
        </div>
        <div className="flex gap-2">
          <DialogForm
            element={<ImPencil className="w-9 h-9" />}
            method="Edit"
            item={item}
            handleEditComment={handleEditComment}
            cn="text-sky-500 hover:text-sky-600"
          />

          <DialogForm
            element={<RiDeleteBinLine className="w-9 h-9" />}
            method="Remove"
            item={item}
            handleEditComment={handleEditComment}
            cn="text-red-500 hover:text-red-600"
          />
        </div>
      </div>
    </>
  );
}
