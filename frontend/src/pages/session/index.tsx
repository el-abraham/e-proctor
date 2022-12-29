import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import CountDownTimer from "../../components/others/countdown";
import useSessionActions from "../../_actions/session.action";
import QuestionAnswer from "../../_models/question-answer.model";
import QuestionInstanceAnswer from "../../_models/question-instance-answer.model";
import {
  curentNoState,
  curentSoalState,
  sessionInstanceState,
} from "../../_state/session.state";

export default function Session() {
  const navigate = useNavigate();
  const finish = () => {
    navigate(`/exam/session/finish?instance=${searchParams.get("instance")}`);
  };

  const converter = (unix: number, batas: number) => {
    const now = Date.now();
    const time = Math.floor((now - unix * 1000) / 1000);
    const resultTime = batas * 60 - time;

    return resultTime > 0 ? resultTime : 0;
  };

  const curentSoal = useRecoilValue(curentSoalState);
  const sessionInstance = useRecoilValue(sessionInstanceState);
  const [searchParams] = useSearchParams();
  const sessionActions = useSessionActions();
  const [noSoal, setNoSoal] = useRecoilState(curentNoState);

  const changeCurentSoal = (no: number) => {
    if (noSoal != no) {
      navigate(`/exam/session?q=${no}&instance=${sessionInstance!.id}`);
      setNoSoal(no);
    }
  };

  const nextSoal = () => {
    if (noSoal < sessionInstance!.questions!.length) {
      changeCurentSoal(noSoal + 1);
    }
  };

  const prevSoal = () => {
    if (noSoal > 1) {
      changeCurentSoal(noSoal - 1);
    }
  };

  useEffect(() => {
    if (sessionInstance != undefined) {
      sessionActions.changeQuestion(noSoal);
    }
  }, [noSoal, sessionInstance]);

  useEffect(() => {
    if (searchParams.has("q") && sessionInstance != undefined) {
      const no = parseInt(searchParams.get("q")!) ?? 1;
      if (no != noSoal) {
        // console.log(sessionInstance);
        // converter(sessionInstance.timeStart!);
        setNoSoal(no);
      }
    }
  }, [sessionInstance]);

  useEffect(() => {
    const instance = parseInt(searchParams.get("instance") ?? "") ?? undefined;
    if (instance) {
      if (sessionInstance == undefined) {
        sessionActions.info(instance);
      }
    } else {
      return navigate("/ujian");
    }
  }, []);

  return (
    <div className="bg-[#EFF0F3] w-full h-full min-h-screen">
      <div className="container pt-[60px] mx-auto">
        <div className="flex space-x-10">
          <div className="flex-1">
            <h1 className="font-['Poppins'] font-semibold text-2xl">
              {sessionInstance?.session.quiz?.title}
              {/* Ujian Linguistik */}
            </h1>
            <div className="mt-5 card w-full bg-white rounded-md shadow-md text-sm">
              <div className="card-body py-3 px-5">
                Ujian ini dimonitor oleh pengawas. Mohon kerjakan ujian ini
                dengan baik.
              </div>
            </div>

            <div className="mt-5 mb-5 pb-3 card w-full bg-white rounded-md shadow-md">
              <div className="card-body py-3 px-5">
                <div className="border-b justify-between border-black p-2 flex">
                  <h3>Soal Nomor {noSoal}</h3>
                  <h3>
                    {noSoal}/{sessionInstance?.questions!.length}
                  </h3>
                </div>

                {curentSoal ? <CurrentSoalItem soal={curentSoal} /> : ""}

                <div className="mt-5 px-2 flex justify-between">
                  <div
                    className={`flex py-3 px-5 rounded-md shadow-[0_0_3px_rgba(0,0,0,0.15)] items-center cursor-pointer`}
                    onClick={prevSoal}
                  >
                    Soal sebelumnya
                  </div>
                  <div
                    className={`flex py-3 px-5 rounded-md shadow-[0_0_3px_rgba(0,0,0,0.15)] items-center cursor-pointer`}
                    onClick={nextSoal}
                  >
                    Soal selanjutnya
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[310px]">
            <div>
              <span className="font-mono text-2xl text-center">
                {sessionInstance ? (
                  <CountDownTimer
                    hours={Math.floor(
                      converter(
                        sessionInstance.timeStart!,
                        sessionInstance.session.quiz?.duration!
                      ) /
                        60 /
                        60
                    )}
                    minutes={
                      Math.floor(
                        converter(
                          sessionInstance.timeStart!,
                          sessionInstance.session.quiz?.duration!
                        ) / 60
                      ) % 60
                    }
                    seconds={
                      converter(
                        sessionInstance.timeStart!,
                        sessionInstance.session.quiz?.duration!
                      ) % 60
                    }
                  />
                ) : (
                  ""
                )}
              </span>
            </div>
            <div className="mt-5 mb-5 pb-3 card w-full bg-white rounded-md shadow-md">
              <div className="card-body py-3 px-5">
                <div className="border-b border-black p-2">
                  <h3>Daftar Soal</h3>
                </div>
                <div className="mt-2">
                  <div className="grid grid-cols-5 gap-4">
                    {sessionInstance != undefined && curentSoal != undefined
                      ? sessionInstance?.questions?.map((value, index) => {
                          const no = index + 1;
                          return (
                            <ItemDaftarSoal
                              key={index}
                              selected={value.id == curentSoal!.id}
                              number={no}
                              onClick={() => changeCurentSoal(no)}
                            />
                          );
                        })
                      : ""}
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div
                      className="bg-[#FCC666] py-[6px] px-5 rounded text-sm shadow-[0_0_3px_rgba(0,0,0,0.20)] cursor-pointer"
                      onClick={finish}
                    >
                      Finish
                    </div>
                    <div className="border border-black rounded p-2">
                      <ChevronRightIcon className="w-4 h-4 text-black stroke-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type CurrentSoalProps = {
  soal: QuestionInstanceAnswer;
};

const CurrentSoalItem = ({ soal }: CurrentSoalProps) => {
  const sessionActions = useSessionActions();
  const labelJawaban = ["A", "B", "C", "D", "E"];

  const onAnswer = (answer: QuestionAnswer) => {
    if (soal.answer?.id != answer.id) {
      sessionActions.setAnswer(answer);
    }
  };

  return (
    <Fragment>
      <div
        dangerouslySetInnerHTML={{ __html: `${soal.question.questionText}` }}
        className="pt-5 px-2 leading-relaxed"
      ></div>

      <div className="mt-5 px-2 space-y-7">
        {soal.question.answers.map((value, index) => {
          return (
            <div
              key={index}
              className={`flex w-full px-5 py-3 ${
                soal.answer != undefined
                  ? soal.answer.id == value.id
                    ? // ? "bg-base-300 border border-red-500 text-white"
                      "border border-primary bg-white"
                    : "bg-white"
                  : "bg-white"
              } rounded-md drop-shadow-[0_0_3px_rgba(0,0,0,0.15)] items-center cursor-pointer`}
              onClick={() => onAnswer(value)}
              // onClick={() => onSelect(soal.id, index)}
            >
              <label
                className={`border ${
                  soal.answer != undefined
                    ? value.id == soal.answer.id
                      ? "border-primary"
                      : "border-black"
                    : "border-black"
                } rounded-md flex w-6 h-6 place-content-center text-sm`}
              >
                {labelJawaban.at(index)}
              </label>
              {/* <p className="ml-5">{value.answer}</p> */}
              <div
                dangerouslySetInnerHTML={{ __html: `${value.answer}` }}
                className="ml-5"
              />
              {/* <div clas/> */}
              {/* dangerouslySetInnerHTML={{__html: `${l}`}} */}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

type ItemDaftarSoalProps = {
  number: number;
  answered?: boolean;
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const ItemDaftarSoal = (props: ItemDaftarSoalProps) => {
  const align =
    props.number % 5 > 1
      ? "justify-self-center"
      : props.number % 5 == 0
      ? "justify-self-end"
      : "";
  return (
    <div
      onClick={props.onClick}
      className={`flex ${align} ${
        props.selected && "bg-base-300 text-white"
      } place-content-center items-center rounded-md w-9 h-12 border border-black cursor-pointer`}
    >
      {props.number}
    </div>
  );
};
