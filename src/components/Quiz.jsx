import React, { useState } from "react";
import "../styles/quiz.css";
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const questions = [
    {
      questionText: "Who is Prime Minister of India?",
      answerOptions: [
        { answerText: "Vijay Rupani", isCorrect: false },
        { answerText: "Manmohan singh", isCorrect: false },
        { answerText: "Narendra Modi", isCorrect: true },
        { answerText: "Deep Patel", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tata?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Ratan Tata", isCorrect: true },
        { answerText: "Mukesh Ambani", isCorrect: false },
        { answerText: "Gautam Adani", isCorrect: false },
      ],
    },
    {
      questionText: "who is richest person in the world?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Mukesh Ambani", isCorrect: false },
        { answerText: "Warren Buffett", isCorrect: false },
      ],
    },
    {
      questionText: "how many countries in the world?",
      answerOptions: [
        { answerText: "120", isCorrect: false },
        { answerText: "183", isCorrect: false },
        { answerText: "170", isCorrect: false },
        { answerText: "195", isCorrect: true },
      ],
    },
  ];

  const handleSubmit = (isCorrect) => {
    isCorrect && setScore(score + 1);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };
//   console.log(isCompleted);
  return (
    <div className="container">
      {isCompleted ? (
        <div className="score-container"><h1>You have scored {score} out of {questions.length}</h1></div>
      ) : (
        <div className="quiz-container">
          <div className="question-container">
            <span>{currentQuestion + 1+"."}</span>
            
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-container">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                key={answerOption.answerText}
                onClick={() => handleSubmit(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
