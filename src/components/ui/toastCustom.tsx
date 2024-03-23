import React, { useEffect } from "react";

type Props = {
  message: string;
  isVisible: boolean;
  onClose: () => void;
};

const ToastCustom = ({ message, isVisible, onClose }: Props) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-5 left-1/2  bg-black text-white py-2 px-4 rounded-lg shadow-lg text-sm ${
        isVisible ? "animate-fade-in-up" : "animate-fade-out-down"
      }`}
    >
      {message}
    </div>
  );
};

export default ToastCustom;
