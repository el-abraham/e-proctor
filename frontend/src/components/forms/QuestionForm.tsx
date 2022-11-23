import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useRecoilValue } from "recoil";
import { listCategoryState } from "../../_state/category.state";
import useQuestionActions from "../../_actions/question.actions";
import Input from "./Input";

export default function QuestionForm() {
  const listCategory = useRecoilValue(listCategoryState);
  const questionActions = useQuestionActions();

  const categoryRef = useRef<HTMLSelectElement>(null);
  const questionRef = useRef<ReactQuill>(null);
  const answerRef1 = useRef<ReactQuill>(null);
  const answerRef2 = useRef<ReactQuill>(null);
  const answerRef3 = useRef<ReactQuill>(null);
  const answerRef4 = useRef<ReactQuill>(null);
  const answerRef5 = useRef<ReactQuill>(null);

  const initialAnswer = {
    correct1: false,
    correct2: false,
    correct3: false,
    correct4: false,
    correct5: false,
  };

  const [correctAnswer, setCorrectAnswer] = useState(initialAnswer);

  const checkAnswerRequired = () => {
    for (let [key, value] of Object.entries(correctAnswer)) {
      if (value) return true;
    }
    return false;
  };

  const handleForm = (e: any) => {
    e.preventDefault();
    if (checkAnswerRequired()) {
      console.log(checkAnswerRequired());
      console.log(categoryRef.current?.value);
      console.log(questionRef.current?.value);
      console.log(answerRef1.current?.value);
      console.log(answerRef2.current?.value);
      console.log(answerRef3.current?.value);
      console.log(answerRef4.current?.value);
      console.log(answerRef5.current?.value);
    }
  };

  const handleCorrectAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCorrectAnswer({ ...initialAnswer, [event.currentTarget.id]: true });
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
            className="select select-sm rounded select-bordered w-80 max-w-md mt-3"
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
            <Input
              className=" pl-4 pr-[40px] rounded h-11 text-[14px]"
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
                checked={correctAnswer.correct1}
                id="correct1"
                type="checkbox"
                className="checkbox checkbox-sm rounded-none"
              />
              <label htmlFor="correct1">Jawaban benar</label>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Jawaban 2</p>
            <ReactQuill ref={answerRef2} />
            <div className="flex space-x-3 items-center mt-2">
              <input
                onChange={handleCorrectAnswer}
                checked={correctAnswer.correct2}
                id="correct2"
                type="checkbox"
                className="checkbox checkbox-sm rounded-none"
              />
              <label htmlFor="correct2">Jawaban benar</label>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Jawaban 3</p>
            <ReactQuill ref={answerRef3} />
            <div className="flex space-x-3 items-center mt-2">
              <input
                onChange={handleCorrectAnswer}
                checked={correctAnswer.correct3}
                id="correct3"
                type="checkbox"
                className="checkbox checkbox-sm rounded-none"
              />
              <label htmlFor="correct3">Jawaban benar</label>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Jawaban 4</p>
            <ReactQuill ref={answerRef4} />
            <div className="flex space-x-3 items-center mt-2">
              <input
                onChange={handleCorrectAnswer}
                checked={correctAnswer.correct4}
                id="correct4"
                type="checkbox"
                className="checkbox checkbox-sm rounded-none"
              />
              <label htmlFor="correct4">Jawaban benar</label>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Jawaban 5</p>
            <ReactQuill ref={answerRef5} />
            <div className="flex space-x-3 items-center mt-2">
              <input
                onChange={handleCorrectAnswer}
                checked={correctAnswer.correct5}
                id="correct5"
                type="checkbox"
                className="checkbox checkbox-sm rounded-none"
              />
              <label htmlFor="correct5">Jawaban benar</label>
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
