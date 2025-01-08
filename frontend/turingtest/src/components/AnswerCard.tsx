import { toWords } from "number-to-words";

interface AnswerCardProps {
  num: number,
  content: string
}

export default function AnswerCard({num, content} : AnswerCardProps) {
  return (
    <div className="w-[400px] rounded-2xl p-6 font-mono outline outline-10 outline-secondary hover:transition-all hover:scale-105 hover:bg-secondary hover:outline-none bg-background text-foreground ">
      <div className="text-2xl mb-2">answer {toWords(num)} </div>
      <div className="text-xl">{content}</div>
    </div>
  );
}