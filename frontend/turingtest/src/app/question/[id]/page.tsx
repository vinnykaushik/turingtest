import { Metadata } from "next"
import AnswerCard from "@/components/AnswerCard"

const id = 1;

export const metadata: Metadata = {
  title: 'turing test | question ' + { id },
  description: 'question ' + { id } + ' of this turing test'
}

export default function Question() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex items-center flex-row gap-20">
        <QuestionTitle />
        <AnswerCard num={1} content="hello world" />
        <AnswerCard num={2} content="save me frank ocean" />
      </div>
    </div>
  );
}

function QuestionTitle() {
  return (
    <div className="relative text-center w-fit h-fit">
      <div className="text-9xl bg-gradient-to-b from-accent/50 to-accent/0 text-transparent bg-clip-text">
        one
      </div>
      <div className="text-2xl absolute top-16 left-0 right-0">
        what’s your favorite album of the 2010s?
      </div>
    </div>
  );
}