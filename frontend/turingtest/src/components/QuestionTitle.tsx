export default function QuestionTitle({
  idWord,
  question_content,
}: {
  idWord: string;
  question_content: string;
}) {
  return (
    <div className="relative text-center w-fit h-fit">
      <div className="text-9xl bg-gradient-to-b from-accent/50 to-accent/0 text-transparent bg-clip-text">
        {idWord}
      </div>
      <div className="text-2xl absolute top-16 left-0 right-0">
        {question_content.toLowerCase()}
      </div>
    </div>
  );
}
