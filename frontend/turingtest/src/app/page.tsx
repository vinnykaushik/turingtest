import Image from "next/image";
import Hero from "@/components/Hero";
import { QuestionsProvider } from "@/context/QuestionContext";

export default function Home() {
  return (
    <QuestionsProvider>
      <div className="bg-background px-6 text-xl">
        <Hero />
        <div className="w-2/3">
          an interactive turing test for today’s ai-powered world. do you think
          you can tell who’s human and who’s not?
        </div>
      </div>
    </QuestionsProvider>
  );
}
