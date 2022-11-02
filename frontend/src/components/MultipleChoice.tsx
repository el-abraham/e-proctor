import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function MultipleChoice() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect: boolean) => {
    // Increment the score

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  return (
    <div>
      <div className="bg-white mt-6 shadow-md w-[850px] h-[470px] ml-[60px] rounded-[10px]">
        <p className="flex border-b w-[810px] items-center py-2 border-black mb-auto text-black font-semibold ml-4 mt-2">
          <DocumentDuplicateIcon className="w-[24px] h-[24px] mr-6" />
          <div>
            <span>Soal Nomor {currentQuestion + 1}</span>
            <span className="ml-[610px]">
              {currentQuestion + 1}/{questions.length}
            </span>
          </div>
        </p>
        <div>
          <p className="font['Poppins'] font-semibold text-[15px] ml-4 mt-6">
            {questions[currentQuestion].text}
          </p>
        </div>
        {/* pilihan ganda */}
        {/* Bagian A */}
        <div className="absolute ml-[60px] -mt-6">
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <button className="w-[700px] h-[50px] rounded-[10px] ml-auto mt-4 py-3">
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                </button>
              );
            })}
          </ul>
        </div>
        <button className="w-[810px] h-[50px] rounded-[10px] ml-4 mt-4 border-[1px] border-gray-400">
          <div className="flex ml-3 text-center">
            <p className="w-[24px] h-[24px] rounded-[5px] border-[1px] border-black font-['Poppins'] font-semibold">
              A
            </p>
          </div>
        </button>
        {/* Bagian B */}
        <button className="w-[810px] h-[50px] rounded-[10px] ml-4 mt-6 border-[1px] border-gray-400">
          <div className="flex ml-3 text-center">
            <p className="w-[24px] h-[24px] rounded-[5px] border-[1px] border-black font-['Poppins'] font-semibold">
              B
            </p>
          </div>
        </button>
        {/* Bagian C */}
        <button className="w-[810px] h-[50px] rounded-[10px] ml-4 mt-6 border-[1px] border-gray-400">
          <div className="flex ml-3 text-center">
            <p className="w-[24px] h-[24px] rounded-[5px] border-[1px] border-black font-['Poppins'] font-semibold">
              C
            </p>
          </div>
        </button>
        {/* Bagian D */}
        <button className="w-[810px] h-[50px] rounded-[10px] ml-4 mt-6 border-[1px] border-gray-400">
          <div className="flex ml-3 text-center">
            <p className="w-[24px] h-[24px] rounded-[5px] border-[1px] border-black font-['Poppins'] font-semibold">
              D
            </p>
          </div>
        </button>
        <div className="flex absolute mt-[30px]">
          <div>
            <button className="ml-4 btn btn-outline">Previous page</button>
          </div>
          <div>
            <button className="ml-[610px] btn btn-outline">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MultipleChoice;
