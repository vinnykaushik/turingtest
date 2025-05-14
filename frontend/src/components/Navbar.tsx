import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-background gap-10 sticky top-0">
      <div className="text-accent text-2xl w-fit h-fit pt-1 px-1 rounded-lg bg-background hover:brightness-90 hover:transition-all ">
        <Link href={"/"}>
          turing test
        </Link>
      </div>
      <hr className="border-l border-foreground border-secondary flex-grow"/>
      <div className="flex items-center space-x-6">
        <Link href="/about" className="text-foreground hover:underline">
          about
        </Link>
        <Link href="#how-to" className="text-foreground hover:underline">
          how to
        </Link>
        <Link href="https://github.com/vinnykaushik/turingtest" target="_blank" className="text-foreground hover:underline">
          github
        </Link>
      </div>
    </nav>
  );
}