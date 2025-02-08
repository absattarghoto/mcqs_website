import React, { useState, useEffect } from "react";

const QuizApp = () => {
  // Quiz categories and their questions
  const quizCategories = {
    generalKnowledge: {
      title: "General Knowledge Quiz",
      questions: [
        {
          question: "What is the largest planet in our solar system?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correctAnswer: "Jupiter",
        },
        {
          question: "Who painted the Mona Lisa?",
          options: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Michelangelo",
          ],
          correctAnswer: "Leonardo da Vinci",
        },
        {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          correctAnswer: "Paris",
        },
        {
          question: "Which is the longest river in the world?",
          options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
          correctAnswer: "Nile River",
        },
        {
          question: "Who wrote the play 'Romeo and Juliet'?",
          options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
          correctAnswer: "William Shakespeare",
        },
        {
          question: "What is the national currency of Japan?",
          options: ["Yuan", "Yen", "Won", "Ringgit"],
          correctAnswer: "Yen",
        },
        {
          question: "Which continent has the most countries?",
          options: ["Asia", "Africa", "Europe", "South America"],
          correctAnswer: "Africa",
        },
        {
          question: "What is the hardest natural substance on Earth?",
          options: ["Gold", "Iron", "Diamond", "Platinum"],
          correctAnswer: "Diamond",
        },
        {
          question: "Which is the smallest country in the world by area?",
          options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
          correctAnswer: "Vatican City",
        },
        {
          question: "What is the name of the first man to walk on the moon?",
          options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
          correctAnswer: "Neil Armstrong",
        },
      ],
    },
    pakStudy: {
      title: "PAK Study MCQs Quiz",
      questions: [
        {
          question: "Who is the founder of Pakistan?",
          options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam", "Benazir Bhutto"],
          correctAnswer: "Quaid-e-Azam",
        },
        {
          question: "Which is the national language of Pakistan?",
          options: ["Punjabi", "Sindhi", "Urdu", "Pashto"],
          correctAnswer: "Urdu",
        },
        {
          question: "When did Pakistan gain independence?",
          options: ["14th August 1947", "23rd March 1940", "6th September 1965", "16th December 1971"],
          correctAnswer: "14th August 1947",
        },
        {
          question: "Which is the largest province of Pakistan by area?",
          options: ["Punjab", "Sindh", "Balochistan", "Khyber Pakhtunkhwa"],
          correctAnswer: "Balochistan",
        },
        {
          question: "Which city is known as the 'City of Lights'?",
          options: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
          correctAnswer: "Karachi",
        },
        {
          question: "What is the national sport of Pakistan?",
          options: ["Cricket", "Hockey", "Football", "Squash"],
          correctAnswer: "Hockey",
        },
        {
          question: "Who wrote the national anthem of Pakistan?",
          options: ["Allama Iqbal", "Hafeez Jalandhari", "Faiz Ahmed Faiz", "Josh Malihabadi"],
          correctAnswer: "Hafeez Jalandhari",
        },
        {
          question: "Which dam is the largest in Pakistan?",
          options: ["Mangla Dam", "Tarbela Dam", "Warsak Dam", "Diamer-Bhasha Dam"],
          correctAnswer: "Tarbela Dam",
        },
        {
          question: "What is the currency of Pakistan?",
          options: ["Rupee", "Taka", "Dinar", "Rial"],
          correctAnswer: "Rupee",
        },
        {
          question: "Which sea is located to the south of Pakistan?",
          options: ["Arabian Sea", "Caspian Sea", "Red Sea", "Black Sea"],
          correctAnswer: "Arabian Sea",
        },
      ],
    },
    islamicStudies: {
      title: "Islamic Studies Quiz",
      questions: [
        {
          question: "How many pillars of Islam are there?",
          options: ["4", "5", "6", "7"],
          correctAnswer: "5",
        },
        {
          question: "Who was the last prophet of Islam?",
          options: ["Prophet Musa (AS)", "Prophet Isa (AS)", "Prophet Muhammad (PBUH)", "Prophet Ibrahim (AS)"],
          correctAnswer: "Prophet Muhammad (PBUH)",
        },
        {
          question: "What is the first pillar of Islam?",
          options: ["Salah", "Zakat", "Shahada", "Hajj"],
          correctAnswer: "Shahada",
        },
        {
          question: "Which angel brought revelations to Prophet Muhammad (PBUH)?",
          options: ["Angel Israfil", "Angel Jibrael", "Angel Mikail", "Angel Azrael"],
          correctAnswer: "Angel Jibrael",
        },
        {
          question: "What is the holy book of Islam?",
          options: ["Bible", "Torah", "Quran", "Gita"],
          correctAnswer: "Quran",
        },
        {
          question: "Which city is known as the birthplace of Prophet Muhammad (PBUH)?",
          options: ["Madinah", "Jerusalem", "Makkah", "Baghdad"],
          correctAnswer: "Makkah",
        },
        {
          question: "How many Rakats are there in Fajr prayer?",
          options: ["2", "4", "6", "8"],
          correctAnswer: "4",
        },
        {
          question: "What is the night journey of Prophet Muhammad (PBUH) called?",
          options: ["Hijrah", "Miraj", "Hajj", "Ghazwa"],
          correctAnswer: "Miraj",
        },
        {
          question: "During which Islamic month is fasting observed?",
          options: ["Muharram", "Ramadan", "Shawwal", "Dhul-Hijjah"],
          correctAnswer: "Ramadan",
        },
        {
          question: "What is the name of the first Surah in the Quran?",
          options: ["Surah Al-Baqarah", "Surah Al-Ikhlas", "Surah Al-Fatiha", "Surah Yaseen"],
          correctAnswer: "Surah Al-Fatiha",
        },
      ],
    },
    everydayScience: {
      title: "Everyday Science Quiz",
      questions: [
        {
          question: "What is the chemical symbol for water?",
          options: ["H2O", "CO2", "NaCl", "O2"],
          correctAnswer: "H2O",
        },
        {
          question: "What planet is known as the Red Planet?",
          options: ["Earth", "Venus", "Mars", "Jupiter"],
          correctAnswer: "Mars",
        },
        {
          question: "Which gas do plants absorb from the atmosphere?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          correctAnswer: "Carbon Dioxide",
        },
        {
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
          correctAnswer: "Mitochondria",
        },
        {
          question: "Which vitamin is produced by the human body when exposed to sunlight?",
          options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
          correctAnswer: "Vitamin D",
        },
        {
          question: "What is the boiling point of water in Celsius?",
          options: ["50°C", "75°C", "100°C", "150°C"],
          correctAnswer: "100°C",
        },
        {
          question: "Which part of the human body contains the most bones?",
          options: ["Leg", "Hand", "Spine", "Skull"],
          correctAnswer: "Hand",
        },
        {
          question: "What gas do humans exhale?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          correctAnswer: "Carbon Dioxide",
        },
        {
          question: "Which metal is liquid at room temperature?",
          options: ["Gold", "Mercury", "Iron", "Silver"],
          correctAnswer: "Mercury",
        },
        {
          question: "How many colors are in a rainbow?",
          options: ["5", "6", "7", "8"],
          correctAnswer: "7",
        },
      ],
    },
  };

  // Application state
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // Timer state (in seconds) – 10 minutes = 600 seconds
  const [timeLeft, setTimeLeft] = useState(600);

  // Start a quiz and reset the timer
  const selectQuiz = (quizKey) => {
    setCurrentQuiz(quizKey);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimeLeft(600); // Reset timer to 10 minutes
  };

  // Timer effect: decrease timeLeft by 1 every second when a quiz is active
  useEffect(() => {
    if (!currentQuiz || showScore) return;

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          setShowScore(true); // Time is up; show final score
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
    if (
      option === quizCategories[currentQuiz].questions[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizCategories[currentQuiz].questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  // Restart quiz and reset timer
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimeLeft(600);
  };

  // Return to home screen and reset timer
  const returnHome = () => {
    setCurrentQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimeLeft(600);
  };

  // Calculate progress for the progress bar
  const progress = currentQuiz
    ? ((currentQuestion + 1) / quizCategories[currentQuiz].questions.length) * 100
    : 0;

  // Format the timer as MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="">
      <div className="p-8 rounded-lg w-full max-w-md">
        {!currentQuiz ? (
          // Home Screen
          <div className="text-left">
            <h1 className="text-2xl font-bold mb-8">Quiz Categories</h1>
            <div className="space-y-4">
              {Object.keys(quizCategories).map((quizKey) => (
                <button
                  key={quizKey}
                  onClick={() => selectQuiz(quizKey)}
                  className="w-full text-left text-secondary rounded-lg hover:text-primary transition duration-300"
                >
                  {quizCategories[quizKey].title}
                </button>
              ))}
              <div className="mt-6 text-gray-600">
                More Quizzes will be added soon
              </div>
            </div>
          </div>
        ) : showScore ? (
          // Results Screen
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
            <p className="text-lg mb-6">
              Your score: {score} out of {quizCategories[currentQuiz].questions.length}
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
          // Quiz Screen
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">
                {quizCategories[currentQuiz].title}
              </h1>
              {/* Display the timer */}
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
              {quizCategories[currentQuiz].questions[currentQuestion].question}
            </p>
            <div className="space-y-4">
              {quizCategories[currentQuiz].questions[currentQuestion].options.map(
                (option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className={`w-full px-4 py-2 rounded-lg transition duration-300 ${
                      selectedAnswer === option
                        ? option === quizCategories[currentQuiz].questions[currentQuestion].correctAnswer
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
