import { toWords } from "number-to-words";

interface AnswerCardProps {
  num: number,
  content: string
}

export default function AnswerCard({num, content} : AnswerCardProps) {
  return (
    <div className="w-[400px] h-fit rounded-2xl p-6 border border-solid border-10 border-secondary hover:transition-all hover:bg-secondary bg-background text-foreground ">
      <div className="text-2xl mb-2">answer {toWords(num)} </div>
      <div className="text-xl">{content}</div>
    </div>
  );
}