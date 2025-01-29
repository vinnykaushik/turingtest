"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import { QuestionsContext, QuestionsProvider } from "@/context/QuestionContext";
import VoteQuestion from "@/components/VoteQuestion";
import numberToWords from "number-to-words";
import QuestionFooter from "@/components/QuestionFooter";

export default function QuestionPage() {
  return (
    <QuestionsProvider>
      <Question />
    </QuestionsProvider>
  );
}

function Question() {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error("useQuestions must be used within a QuestionsProvider");
  }
  const { voteQuestions, answerQuestions } = context;
  const params = useParams();
  const id = params.id;
  const idWord = numberToWords.toWords(Number(id)).trim();
  const introDialogue = "";
  const dialogue = "";
  const movie = "Blade Runner (1982)";

  const question = voteQuestions[0];

  if (!question) {
    return <div>Loading...</div>;
  }

  VoteQuestion({
    idWord,
    question_content: question.question_content,
    human_response: question.human_response ?? "not found",
    ai_response: question.ai_response ?? "not found",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <QuestionFooter
        introDialogue={introDialogue}
        dialogue={dialogue}
        movie={movie}
      />
    </div>
  );
}
