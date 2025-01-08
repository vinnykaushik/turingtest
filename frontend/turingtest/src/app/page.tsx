import Image from "next/image";
import AnswerCard from "@/components/AnswerCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-background">
      <AnswerCard num={1} content="Blonde by Frank Ocean"/>
    </div>
  );
}
