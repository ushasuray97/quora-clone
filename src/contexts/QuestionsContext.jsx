import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

const QuestionsContext = React.createContext();
export const UNCATEGORIZED_BUDGET_ID = "uncategorized";

export function useQuestions() {
  return useContext(QuestionsContext);
}

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useLocalStorage("budgets", []);
  const [answers, setAnswers] = useLocalStorage("expenses", []);

  //Fetch expenses incurred for a specific budget -> Ex. Entertainment
  function getQuestionAnswer(questionId) {
    return answers.filter((answer) => {
      return answer.questionId === questionId;
    });
  }

  //Add an expense to the array with tagged budgetID ->  destructured expense
  function addAnswer({ description,questionId }) {
    setAnswers((prevAnswers) => {
      return [...prevAnswers, { id: uuidV4(), description,questionId }];
    });
  }

  
  function addQuestion({question}) {
    setQuestions((prevQuestions) => {
      if (prevQuestions.find((ques) => ques.question === question)) {
        return prevQuestions;
      }
      const newQuestions = [...prevQuestions, { id: uuidV4(), question }];
      return newQuestions;
    });
  }

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        answers,
        getQuestionAnswer,
        addAnswer,
        addQuestion
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};