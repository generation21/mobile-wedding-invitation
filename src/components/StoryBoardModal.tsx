import CloseIcon from "./ui/icons/CloseIcon";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};
export default function StoryBoardModal({ children, onClose }: Props) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/70"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          event.stopPropagation();
          onClose();
        }
      }}
    >
      <button
        className="fixed top-0 right-0 p-8 text-white z-30"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
      >
        <CloseIcon />
      </button>
      <div className="bg-gradient-to-bl from-gray-800 to-gray-500 h-full w-full items-center justify-center flex">
        {children}
      </div>
    </section>
  );
}
