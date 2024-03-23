"use client";

import { useState } from "react";
import HeartIcon from "./ui/icons/HeartIcon";
import HeartFullIcon from "./ui/icons/HeartFullIcon";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  id: string;
};
export default function HeartButton({ id }: Props) {
  const [heart, setHeart] = useState(false);

  const notify = () =>
    toast("행복하게 살겠습니다!", {
      duration: 2000,
      position: "bottom-center",
      icon: "🤗",
      style: {
        borderRadius: "10px",
        backgroundColor: "pink",
        color: "white",
      },
    });
  const handleOnClick = () => {
    setHeart(!heart);
    notify();
  };
  return (
    <div>
      <button className="my-2 px-4" onClick={handleOnClick}>
        {heart ? <HeartFullIcon /> : <HeartIcon />}
      </button>
      <Toaster />
    </div>
  );
}
