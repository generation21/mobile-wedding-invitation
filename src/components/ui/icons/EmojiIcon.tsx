import { CONFIG } from "@/libs/configs";

type Props = {
  index: number;
};
export function EmojiIcon({ index }: Props) {
  const colors = [
    "bg-red-200",
    "bg-orange-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-teal-200",
    "bg-blue-200",
    "bg-indigo-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-rose-200",
    "bg-sky-200",
    "bg-lime-200",
    "bg-emerald-200",
    "bg-cyan-200",
  ];
  const colorStyle = `bg-${colors[index]}-200`;
  return (
    <div className={`${colors[index % colors.length]} rounded-full p-1 `}>
      {CONFIG.emojis[index]}
    </div>
  );
}
