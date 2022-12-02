import { ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import useUjianActions from "../../../_actions/ujian.actions";
import QuizSession from "../../../_models/quiz-session.model";
import Button from "../../forms/Button";

type ModalGabungUjianProps = {
  modal: boolean;
  code: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  reset: () => void;
};

export default function ModalGabungUjianSukses({
  setModal,
  code,
  reset,
}: ModalGabungUjianProps) {
  const ujianActions = useUjianActions();
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [quizSessionSearch, setQuizSessionSearch] = useState<
    QuizSession | undefined
  >(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const modalController = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isChecked) {
      setIsChecked(!isChecked);
      reset();
      setModal(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    ujianActions
      .searchUjian(code, controller.signal)
      .then((value) => {
        if (value) {
          setQuizSessionSearch(value);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <input
        onChange={modalController}
        checked={isChecked}
        type="checkbox"
        id="gabung-ujian-sukses"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="gabung-ujian-sukses"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Gabung Ujian</h3>
          {loading ? (
            <div>loading</div>
          ) : quizSessionSearch ? (
            <FoundQuiz
              code={quizSessionSearch.code!}
              title={quizSessionSearch.quiz!.title!}
              image={quizSessionSearch.quiz?.coverImage}
              user={`${quizSessionSearch.quiz?.user?.firstname ?? ""} ${
                quizSessionSearch.quiz?.user?.lastname ?? ""
              }`}
            />
          ) : (
            <NotFoundQuiz />
          )}

          <div className="modal-action">
            <label htmlFor="gabung-ujian-sukses" className="btn">
              Kembali
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

const NotFoundQuiz = () => {
  return (
    <p className="py-4">
      Kode yang anda masukkan tidak valid. Mohon coba lagi.
    </p>
  );
};

type FoundQuizProps = {
  image: string | undefined;
  code: string;
  title: string;
  user: string;
};

const FoundQuiz = (props: FoundQuizProps) => {
  const ujianActions = useUjianActions();

  const subscribe = () => {
    ujianActions.subscribe(props.code);
  };

  return (
    <div className="w-[380px] rounded-[10px] bg-[#FBFCFC] mx-auto mt-[30px]">
      {/* IMAGE */}
      <img
        className="h-[140.5px] w-full rounded-t-[10px]"
        src="https://placeimg.com/192/192/people"
      />
      <div className="mx-[30px] flex justify-between mt-[15.5px]">
        <h1 className="font-['Open Sans'] text-2xl font-semibold">
          {props.code}
        </h1>
        <h1 className="font-['Roboto'] text-xs self-center">
          Rabu, 30 September
        </h1>
      </div>
      <div className="mx-[30px] mt-5 pb-[24px] flex justify-between">
        <div className="flex flex-col">
          {/* NAMA UJIAN */}
          <div className="flex ">
            <p className="font-['Poppins'] font-semibold text-sm ">
              {props.title}
            </p>
          </div>

          {/* AVATAR */}
          <div className="avatar flex  mt-[10px]">
            <div className="w-[30px] h-[30px] rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
            <p className="flex text-sm ml-[15px] self-center font-['Open Sans']">
              {props.user}
            </p>
          </div>

          {/* TIME */}
          <div className="flex items-center mt-[30px]">
            <ClockIcon className="w-[30px] h-[30px] text-black" />
            <p className="text-[12px] ml-[15px]">10:45 - 12:45</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md font-['Open Sans'] self-end font-semibold text-sm text-center py-[10px] px-5 bg-red-400">
            <p>20</p>
            <p>Soal</p>
          </div>
          <button className="mt-5 btn btn-primary" onClick={subscribe}>
            <div className="flex">
              <p className="my-auto text-xs">Gabung</p>
              <ChevronRightIcon className="w-[15px] h-[15px] ml-[10px]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
