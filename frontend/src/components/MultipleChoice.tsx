import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function MultipleChoice() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  const questions = [
    {
      id: 1,
      text: "What is the capital of America?",
      options: [
        { id: 0, pilgan: "A", text: "New York City", isCorrect: false },
        { id: 1, pilgan: "B", text: "Boston", isCorrect: false },
        { id: 2, pilgan: "C", text: "Santa Fe", isCorrect: false },
        { id: 3, pilgan: "D", text: "Washington DC", isCorrect: true },
      ],
    },
    {
      id: 2,
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, pilgan: "A", text: "1787", isCorrect: true },
        { id: 1, pilgan: "B", text: "1776", isCorrect: false },
        { id: 2, pilgan: "C", text: "1774", isCorrect: false },
        { id: 3, pilgan: "D", text: "1826", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "Who was the second president of the US?",
      options: [
        { id: 0, pilgan: "A", text: "John Adams", isCorrect: true },
        { id: 1, pilgan: "B", text: "Paul Revere", isCorrect: false },
        { id: 2, pilgan: "C", text: "Thomas Jefferson", isCorrect: false },
        { id: 3, pilgan: "D", text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "What is the largest state in the US?",
      options: [
        { id: 0, pilgan: "A", text: "California", isCorrect: false },
        { id: 1, pilgan: "B", text: "Alaska", isCorrect: true },
        { id: 2, pilgan: "C", text: "Texas", isCorrect: false },
        { id: 3, pilgan: "D", text: "Montana", isCorrect: false },
      ],
    },
    {
      id: 5,
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, pilgan: "A", text: "Canada", isCorrect: false },
        { id: 1, pilgan: "B", text: "Russia", isCorrect: true },
        { id: 2, pilgan: "C", text: "Cuba", isCorrect: true },
        { id: 3, pilgan: "D", text: "Mexico", isCorrect: false },
      ],
    },
  ];

  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setIsToggled(true);
    }
  };

  const optionNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setIsToggled(false);
    }
  };

  const optionBack = () => {
    if (currentQuestion - 1 > questions.length) {
      setCurrentQuestion(currentQuestion - 1);
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
        {questions[currentQuestion].options.map((option) => {
          return (
            <button
              className={
                "hover:bg-sky-400 w-[810px] h-[50px] rounded-[10px] ml-4 mt-4 border-[1px] border-gray-400"
              }
              key={option.id}
              onClick={() => handleClick(option.isCorrect)}
            >
              <div className="flex -mt-1 ml-3 h-10">
                <p className="w-[24px] h-[24px] rounded-[5px] border-[1px] border-black font-['Poppins'] font-semibold mt-[8px]">
                  {option.pilgan}
                </p>
              </div>
              <li className="-mt-[35px] ml-12 text-left list-none bg-none text-[20px]">
                {option.text}
              </li>
            </button>
          );
        })}
        {/* {isToggled && <AfterAnswer />} */}
        {/* Previous and Next */}

        <div className="flex absolute -ml-[580px] mt-[30px]">
          <div>
            <button
              className="ml-[610px] btn btn-outline"
              onClick={() => {
                setCurrentQuestion(currentQuestion - 1);
              }}
            >
              Previous
            </button>
          </div>
          <div className="Button Next">
            <button className="ml-[610px] btn btn-outline" onClick={optionNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MultipleChoice;
