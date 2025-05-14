interface QuestionFooterProps {
  introDialogue?: string
  dialogue: string
  movie: string
}

export default function QuestionFooter({ introDialogue, dialogue, movie }: QuestionFooterProps) {
  return (
    <div className="relative text-center px-5 h-fit">
      <div className="font-serif text-9xl bg-gradient-to-b from-accent/50 to-accent/0 text-transparent bg-clip-text max-h-16 overflow-hidden">
        “
      </div>
      <div className="text-xl absolute top-7 left-0 right-0">
        <span className="text-accent">{introDialogue}</span> {dialogue}
        <br />- <em>{movie}</em>
      </div>
    </div>
  );
}