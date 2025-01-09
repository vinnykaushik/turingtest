import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-background px-6 font-mono text-xl">
      <Hero />
      <div className="w-2/3">
        an interactive turing test for today’s ai-powered world. do you think you can tell who’s human and who’s not?
      </div>
    </div>
  );
}
