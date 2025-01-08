export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background font-mono">
      <div className="text-accent text-2xl">
        turing test
      </div>
      <div className="flex space-x-6">
        <a href="#about" className="text-foreground hover:underline">
          about
        </a>
        <a href="#how-to" className="text-foreground hover:underline">
          how to
        </a>
        <a href="#github" className="text-foreground hover:underline">
          github
        </a>
      </div>
    </nav>
  );
}
