import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useRecoilValue } from "recoil";
import { listCategoryState } from "../../_state/category.state";
import useQuestionActions from "../../_actions/question.actions";

import QuestionAnswer from "../../_models/question-answer.model";
import Question from "../../_models/question.model";

type AnswerProps = {
  correct1: {
    ref: React.RefObject<ReactQuill>;
    value: boolean;
  };
  correct2: {
    ref: React.RefObject<ReactQuill>;
    value: boolean;
  };
  correct3: {
    ref: React.RefObject<ReactQuill>;
    value: boolean;
  };
  correct4: {
    ref: React.RefObject<ReactQuill>;
    value: boolean;
  };
  correct5: {
    ref: React.RefObject<ReactQuill>;
    value: boolean;
  };
};

export default function QuestionForm() {
  const listCategory = useRecoilValue(listCategoryState);
  const questionActions = useQuestionActions();

  const categoryRef = useRef<HTMLSelectElement>(null);
  const questionNameRef = useRef<HTMLInputElement>(null);
  const questionRef = useRef<ReactQuill>(null);
  const answerRef1 = useRef<ReactQuill>(null);
  const answerRef2 = useRef<ReactQuill>(null);
  const answerRef3 = useRef<ReactQuill>(null);
  const answerRef4 = useRef<ReactQuill>(null);
  const answerRef5 = useRef<ReactQuill>(null);

  const initialAnswer: AnswerProps = {
    correct1: {
      ref: answerRef1,
      value: false,
    },
    correct2: {
      ref: answerRef2,
      value: false,
    },
    correct3: {
      ref: answerRef3,
      value: false,
    },
    correct4: {
      ref: answerRef4,
      value: false,
    },
    correct5: {
      ref: answerRef5,
      value: false,
    },
  };

  const [correctAnswer, setCorrectAnswer] =
    useState<AnswerProps>(initialAnswer);

  const checkAnswerRequired = () => {
    for (let [key, value] of Object.entries(correctAnswer)) {
      if (value.value) return true;
    }
    return false;
  };

  const validation = () => {
    if (!questionNameRef.current?.value || questionNameRef.current.value == "")
      return false;
    if (!questionRef.current?.value) return false;
    if (!answerRef1.current?.value) return false;
    if (!answerRef2.current?.value) return false;
    if (!answerRef3.current?.value) return false;
    if (!answerRef4.current?.value) return false;
    if (!answerRef5.current?.value) return false;
    return true;
  };

  const handleForm = (e: any) => {
    e.preventDefault();
    if (checkAnswerRequired() && validation()) {
      const curentCategory = listCategory?.find(
        (e) => e.id == categoryRef.current?.value
      );

      const answer: QuestionAnswer[] = [];
      Object.values(correctAnswer).forEach((val) => {
        answer.push(
          new QuestionAnswer({
            answer: val.ref.current!.value.toString(),
            isCorrect: val.value,
          })
        );
      });
      const question: Question = new Question({
        name: questionNameRef.current!.value,
        answers: answer,
        questionText: questionRef.current?.value.toString(),
        category: curentCategory!,
      });

      questionActions.addQuestion(question);
    }
  };

  const handleCorrectAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCorrectAnswer({
      ...initialAnswer,
      [event.currentTarget.id]: {
        ...initialAnswer[event.currentTarget.id as keyof AnswerProps],
        value: true,
      },
    });
  };

  useEffect(() => {
    if (listCategory == undefined) {
      questionActions.categories();
    }
  }, []);

  return (
    <div className="mb-8">
      <form onSubmit={handleForm}>
        <div className="dropdown">
          <p className="font-semibold">Pilih Kategori</p>
          <select
            ref={categoryRef}
            className="select select-sm rounded select-bordered w-80 h-auto mt-3"
          >
            {listCategory?.map((value, index) => {
              return (
                <option key={index} value={value.id}>
                  {value.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="space-y-5 mt-5">
          {/* BAGIAN JUDUL */}
          <div>
            <p className="font-semibold">Judul</p>
            <input
              ref={questionNameRef}
              className="font-['Open_Sans'] flex items-center text-black w-full h-[48px] mt-2 placeholder:text-gray-500 pl-4 pr-[40px] rounded h-11 text-[14px]"
              placeholder="Masukkan Judul Ujian ...."
            />
          </div>

          {/* BAGIAN PERTANYAAN */}
          <div>
            <p className="font-semibold mb-3">Pertanyaan</p>
            <ReactQuill ref={questionRef} />
          </div>

          {/* JAWABAN */}
          <div>
            <p className="font-semibold mb-3">Jawaban 1</p>
            <ReactQuill ref={answerRef1} />
            <div className="flex space-x-3 items-center mt-2">
              <input
                onChange={handleCorrectAnswer}
                checked={correctAnswer.correct1.value}
                id="correct1"
                type="checkbox"
                className="checkbox checkbox-sm rounded-none"
              />

              <label htmlFor="correct1">jawaban benar</label>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Jawaban 2</p>
            <ReactQuill ref={answerRef2} />
            <div className="flex space-x-3 items-center mt-2">
              <input
                onChange={handleCorrectAnswer}
                checked={correctAnswer.correct2.value}
                id="correct2"
                type="checkbox"
                className="checkbox checkbox-sm rounded-none"
              />

              <label htmlFor="correct2">jawaban benar</label>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Jawaban 3</p>
            <ReactQuill ref={answerRef3} />
            <div className="flex space-x-3 items-center mt-2">
              <input
                onChange={handleCorrectAnswer}
                checked={correctAnswer.correct3.value}
                id="correct3"
                type="checkbox"
                className="checkbox checkbox-sm rounded-none"
              />

              <label htmlFor="correct3">jawaban benar</label>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Jawaban 4</p>
            <ReactQuill ref={answerRef4} />
            <div className="flex space-x-3 items-center mt-2">
              <input
                onChange={handleCorrectAnswer}
                checked={correctAnswer.correct4.value}
                id="correct4"
                type="checkbox"
                className="checkbox checkbox-sm rounded-none"
              />

              <label htmlFor="correct4">jawaban benar</label>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Jawaban 5</p>
            <ReactQuill ref={answerRef5} />
            <div className="flex space-x-3 items-center mt-2">
              <input
                onChange={handleCorrectAnswer}
                checked={correctAnswer.correct5.value}
                id="correct5"
                type="checkbox"
                className="checkbox checkbox-sm rounded-none"
              />

              <label htmlFor="correct5">jawaban benar</label>
            </div>
          </div>
        </div>

        <div className="mt-[40px] flex justify-center">
          <Button className="mr-[30px] bg-neutral">
            <p className="text-xs">Batalkan</p>
          </Button>
          <Button className="btn-primary">
            <p className="text-xs">Simpan Pertanyaan</p>
          </Button>
        </div>
      </form>
    </div>
  );
}
