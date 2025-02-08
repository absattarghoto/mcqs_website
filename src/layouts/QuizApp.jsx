import React, { useState, useEffect } from "react";
import quizData from "./quizData.json"; // Import the JSON file

const QuizApp = () => {
  // Application state
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]); // Holds the 10 random questions
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(600);

  // Helper function to get 10 random questions from the selected quiz
  const getRandomQuestions = (quizKey) => {
    // Copy the questions array so we don't modify the original data
    const questions = [...quizData[quizKey].questions];
    // Shuffle the array using a random sort
    questions.sort(() => Math.random() - 0.5);
    // Return the first 10 questions (or all if there are fewer than 10)
    return questions.slice(0, 10);
  };

  // Start a quiz and reset the timer
  const selectQuiz = (quizKey) => {
    setCurrentQuiz(quizKey);
    // Generate a random set of 10 questions for this quiz
    setQuizQuestions(getRandomQuestions(quizKey));
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimeLeft(600);
  };

  // Timer effect (same as before)
  useEffect(() => {
    if (!currentQuiz || showScore) return;

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          setShowScore(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [currentQuiz, showScore]);

  // Handle answer selection
  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  // Restart quiz and reset timer
  const restartQuiz = () => {
    // Optionally re-randomize the questions on restart:
    setQuizQuestions(getRandomQuestions(currentQuiz));
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimeLeft(600);
  };

  // Return to home screen and reset timer
  const returnHome = () => {
    setCurrentQuiz(null);
    setQuizQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimeLeft(600);
  };

  // Calculate progress for the progress bar
  const progress = currentQuiz
    ? ((currentQuestion + 1) / quizQuestions.length) * 100
    : 0;

  // Format the timer as MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="">
      <div className="p-8 rounded-lg w-full max-w-md">
        {!currentQuiz ? (
          <div className="text-left">
            <h1 className="text-2xl font-bold mb-8">Quiz Categories</h1>
            <div className="space-y-4">
              {Object.keys(quizData).map((quizKey) => (
                <button
                  key={quizKey}
                  onClick={() => selectQuiz(quizKey)}
                  className="w-full text-left font-medium text-secondary rounded-lg hover:text-primary transition duration-300"
                >
                  {quizData[quizKey].title}
                </button>
              ))}
              <div className="mt-6 text-gray-600">
                More Quizzes will be added soon
              </div>
            </div>
          </div>
        ) : showScore ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
            <p className="text-lg mb-6">
              Your score: {score} out of {quizQuestions.length}
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={restartQuiz}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Restart Quiz
              </button>
              <button
                onClick={returnHome}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
              >
                Return Home
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">
                {quizData[currentQuiz].title}
              </h1>
              <p className="text-lg font-mono">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-lg mb-6">
              {quizQuestions[currentQuestion].question}
            </p>
            <div className="space-y-4">
              {quizQuestions[currentQuestion].options.map(
                (option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className={`w-full px-4 py-2 rounded-lg transition duration-300 ${
                      selectedAnswer === option
                        ? option === quizQuestions[currentQuestion].correctAnswer
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
