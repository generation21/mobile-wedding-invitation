"use client";
import ColorButton from "@/components/ui/ColorButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Comment } from "@/model/posts";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
type Props = {
  item: Comment;
  method: "Edit" | "Remove";
  element: React.ReactNode;
  cn: string;
  handleEditComment: (comment: Comment, method: "Edit" | "Remove") => void;
};

export function DialogForm({
  item,
  method,
  element,
  cn,
  handleEditComment,
}: Props) {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === item.password) {
      const newComment = {
        comment,
        username: item.username,
        password,
        emoji: item.emoji,
      };
      handleEditComment(newComment, method);
      setErrorMessage("");
    } else {
      setErrorMessage("비밀번호가 잘못되었습니다.");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        asChild
        className={`p-2 ${cn} transition duration-150 ease-in-out`}
      >
        {element}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{method}</DialogTitle>
          <DialogDescription>비밀 번호를 입력해주세요</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          {errorMessage && ( // 에러 메시지가 있을 경우 표시
            <Alert variant="destructive" className="mb-3">
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              password
            </Label>
            <Input
              id="name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀 번호를 입력하세요"
              className="col-span-3"
            />
            {method === "Edit" && (
              <>
                <Label htmlFor="name" className="text-right">
                  New Comment
                </Label>
                <Input
                  id="name"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="댓글을 새로 입력하세요"
                  className="col-span-3"
                />
              </>
            )}
          </div>

          <DialogFooter>
            <button type="submit">Save changes</button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
