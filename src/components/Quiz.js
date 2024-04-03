"use client";

import { useState } from 'react';

// tableland should have this in them
const quizQuestions = [
  {
    question: "What is the symbol for Ethereum?",
    options: ["ETH", "BTC", "ETC", "XRP"],
    correct: 0,
  },
  {
    question: "What consensus algorithm does Ethereum 2.0 use?",
    options: ["Proof of Work", "Proof of Stake", "Proof of Authority", "Proof of History"],
    correct: 1,
  },
  {
    question: "Who is the co-founder of Ethereum?",
    options: ["Satoshi Nakamoto", "Charles Hoskinson", "Vitalik Buterin", "Dan Larimer"],
    correct: 2,
  },
  {
    question: "What is a smart contract?",
    options: [
      "A legal document",
      "A type of cryptocurrency",
      "A self-executing contract with the terms directly written into code",
      "A digital form of traditional contract"
    ],
    correct: 2,
  },
  {
    question: "Which token standard is used for creating NFTs on Ethereum?",
    options: ["ERC-20", "ERC-721", "ERC-1155", "ERC-777"],
    correct: 1,
  },
];

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentQuestion = quizQuestions[currentQuestionIndex];
    setShowResult(true);
    setIsCorrectAnswer(selectedOption === currentQuestion.correct);

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000); // delay for 2 seconds
  };

  if (quizCompleted) {
    return <div className="text-center mt-10 text-green-500">Quiz completed! Great job!</div>;
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-white">{currentQuestion.question}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <label key={index} className="flex items-center">
            <input
              type="radio"
              id={`option-${index}`}
              name="option"
              value={index}
              checked={selectedOption === index}
              onChange={() => setSelectedOption(index)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span className="ml-2 text-lg font-medium text-white">{option}</span>
          </label>
        ))}
        <button type="submit" className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-200">
          Submit Answer
        </button>
      </form>
      {showResult && (
        <div className={`text-center mt-4 font-semibold ${isCorrectAnswer ? 'text-green-500' : 'text-red-500'}`}>
          {isCorrectAnswer ? 'Correct!' : 'Wrong answer!'}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;

// TODO

// increment isCorrect if it is right, check with current length of quiz answers
// loop around if quiz is wrong

// sign transaction to sign your progress -> tableland