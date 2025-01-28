import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Question {
  id: string;
  content: string;
}

interface QuestionsContextProps {
  questions: Question[];
  fetchQuestions: () => void;
}

export const QuestionsContext = createContext<
  QuestionsContextProps | undefined
>(undefined);

export const QuestionsProvider = ({ children }: { children: ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchQuestions = async () => {
    fetch("/questions", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <QuestionsContext.Provider value={{ questions, fetchQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};
