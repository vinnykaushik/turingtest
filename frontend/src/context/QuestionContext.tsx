"use client"
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface Question {
  id: string;
  question_content: string;
  char_limit: number;
  human_response?: string;
  ai_response?: string;
}

interface QuestionsContextProps {
  voteQuestions: Question[];
  answerQuestions: Question[];
  fetchQuestions: () => void;
}

export const QuestionsContext = createContext<QuestionsContextProps | undefined>(undefined);

export const QuestionsProvider = ({ children }: { children: ReactNode }) => {
  const [voteQuestions, setVoteQuestions] = useState<Question[]>([]);
  const [answerQuestions, setAnswerQuestions] = useState<Question[]>([]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/questions', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setVoteQuestions(data.vote);
      setAnswerQuestions(data.answer);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <QuestionsContext.Provider value={{ voteQuestions, answerQuestions, fetchQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};