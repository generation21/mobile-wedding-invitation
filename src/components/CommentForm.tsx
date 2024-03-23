"use client";
import { useEffect, useState } from "react";
import SmileIcon from "./ui/icons/SmileIcon";
import { CONFIG } from "@/libs/configs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { EmojiIcon } from "@/components/ui/icons/EmojiIcon";
import { Comment } from "@/model/posts";

type Props = {
  onPostComment: (comment: Comment) => void;
};

export default function CommentForm({ onPostComment }: Props) {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");
  const [emoji, setEmoji] = useState<number>(1);

  useEffect(() => {
    setEmoji(Math.floor(Math.random() * CONFIG.emojis.length));
  }, [open]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onPostComment({ comment, username, password, emoji });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex justify-end w-full">
        <DialogTrigger className="p-2">댓글 남기기</DialogTrigger>
      </div>
      <DialogContent className="rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-xl mx-auto p-4 flex flex-col justify-center items-center"
        >
          <div className="flex items-center w-64 gap-2">
            <EmojiIcon index={emoji} />
            <input
              type="text"
              placeholder="이름"
              className="w-full p-2 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-64">
            <input
              type="text"
              placeholder="비밀 번호"
              className="w-full p-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-64">
            <textarea
              placeholder={CONFIG.inputFrom.placeholder}
              className="w-full p-2 border rounded-md"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-sky-500 text-white p-2 rounded-md hover:bg-sky-600 px-10"
            >
              게시
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
