import AnswerCard from "./AnswerCard";

export default function VoteQuestion({
  idWord,
  question_content,
  human_response,
  ai_response,
}: {
  idWord: string;
  question_content: string;
  human_response: string;
  ai_response: string;
}) {
  <div className="flex-grow">
    <div className="min-h-[calc(80vh-4.5rem)] flex flex-col justify-center gap-20 items-center">
      <QuestionTitle idWord={idWord} question_content={question_content} />
      <div className="flex justify-center items-top flex-row gap-20">
        <AnswerCard num={1} content={human_response} />
        <AnswerCard num={2} content={ai_response} />
      </div>
    </div>
  </div>;
}