"use client";

import { Metadata } from "next"
import { useParams } from "next/navigation"
import AnswerCard from "@/components/AnswerCard"
import numberToWords from "number-to-words";
import QuestionFooter from "@/components/QuestionFooter";

/* export const metadata: Metadata = {
  title: 'turing test | question ' + { id },
  description: 'question ' + { id } + ' of this turing test'
} */

export default function Question() {
  const params = useParams();
  const id = params.id;
  const idWord = numberToWords.toWords(Number(id)).trim();
  let introDialogue = "She’s a replicant, isn’t she?"
  let dialogue = "I’m impressed. How many questions does it usually take to spot them?"
  let movie = "Blade Runner (1982)"

  return (
    <div>
      <div className="min-h-[calc(80vh-3rem)] flex flex-col justify-center gap-20 items-center">
        <QuestionTitle idWord={idWord} />
        <div className="flex justify-center items-top flex-row gap-10">
          <AnswerCard num={1} content="hello world" />
            <div className="w-[1px] bg-secondary self-stretch my-16 rounded-full"></div>
          <AnswerCard num={2} content="save me frank oceandsiofjoesijfiosd jfoijdsfiojsdoifjospdkfopkj opj poefkop kfopdj fopejs iodcj okd opfsdkopf dksfop kdspfo ksd" />
        </div>
      </div>
      <QuestionFooter introDialogue={introDialogue} dialogue={dialogue} movie={movie} />
    </div>
  );
}

function QuestionTitle({ idWord }: { idWord: string }) {
  return (
    <div className="relative text-center w-fit h-fit">
      <div className="text-9xl bg-gradient-to-b from-accent/50 to-accent/0 text-transparent bg-clip-text">
        {idWord}
      </div>
      <div className="text-2xl absolute top-16 left-0 right-0">
        what’s your favorite album of the 2010s?
      </div>
    </div>
  );
}