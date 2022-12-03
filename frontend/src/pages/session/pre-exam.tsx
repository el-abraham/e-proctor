import {
  CameraIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PlayIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";

import Button from "../../components/forms/Button";
import useSessionActions from "../../_actions/session.action";
import QuizInstance from "../../_models/quiz-instance.model";

enum UjianStateEnum {
  READY,
  CONTINUE,
  FINISH,
  FORBIDDEN,
}

export default function PreExam() {
  const [searchParams] = useSearchParams();
  const [ujianNow, setUjianNow] = useState<QuizInstance>();
  const sessionActions = useSessionActions();
  const [ujianStatus, setUjianStatus] = useState<UjianStateEnum>(
    UjianStateEnum.FORBIDDEN
  );

  const navigate = useNavigate();
  const ujianHandler = (status: UjianStateEnum) => {
    if (status == UjianStateEnum.CONTINUE) {
      navigate(`/exam/session?instance=${ujianNow?.id}`);
    }
    navigate("/exam/session/");
  };

  const Verifikasi = () => {
    navigate("/exam/session/pre/verif");
  };

  const backToDetail = () => {
    navigate(`/ujian/detail?p=${searchParams.get("p")}`);
  };

  if (searchParams.get("p") == null) {
    return <Navigate to={{ pathname: "/ujian" }} />;
  }
  const getInstance = async () => {
    const id = parseInt(searchParams.get("p")!);
    if (id) {
      const res = await sessionActions.getInstance(id);
      const cur = await sessionActions.currentStart();
      setUjianNow(res);
      if (cur == undefined) {
        if (res?.status == 0) {
          setUjianStatus(UjianStateEnum.READY);
        } else {
          setUjianStatus(UjianStateEnum.FINISH);
        }
      } else {
        if (res?.status == 1) {
          setUjianStatus(UjianStateEnum.CONTINUE);
        } else {
          setUjianStatus(UjianStateEnum.FORBIDDEN);
        }
      }
    }
  };

  useEffect(() => {
    if (ujianNow == undefined) {
      getInstance();
    }
  }, []);

  return (
    // bg-[#272343]
    // bg-[#EFF0F3]
    <div className="bg-[#041C32] min-h-screen py-[30px] px-[50px] text-black">
      {/* ICON */}

      <XCircleIcon
        onClick={backToDetail}
        className="w-9 h-9 text-white cursor-pointer"
      />

      <div className="flex justify-center">
        {/* CARD LEFT SIDE */}
        <div className="bg-[#04293A] w-[320px] mt-10 rounded-[10px] py-9 text-white">
          {/* IMG */}
          <img
            src="https://placeimg.com/192/192/people"
            alt=""
            className="w-64 h-44 rounded-[10px] mx-auto"
          />
          {/* JUDUL UJIAN */}
          <h1 className=" font-semibold font-['Open Sans'] text-xl text-center mt-5">
            {ujianNow?.session.quiz?.title} - {ujianNow?.session.name}
          </h1>
          <h3 className="font-['Open Sans']  mx-16 mt-5 font-semibold text-sm">
            Proctor
          </h3>
          {/* PROCTOR NAME */}
          <div>
            <div className="avatar mt-3 mx-16">
              <div className="w-12 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
              <p className="font-['Roboto']  text-sm ml-4 self-center">
                {ujianNow?.session.quiz?.user?.firstname}{" "}
                {ujianNow?.session.quiz?.user?.lastname}
              </p>
            </div>
          </div>

          {/* SOAL DAN MENIT */}
          <div className="flex mt-3 mx-16 justify-between py-2 font-['Open Sans']">
            <div className="px-6">
              <p className="text-center font-bold text-3xl">
                {ujianNow?.questions!.length}
              </p>
              <p className="text-sm text-center">Soal</p>
            </div>
            <div className="px-6">
              <p className="text-center font-bold text-3xl">
                {ujianNow?.session.quiz?.duration}
              </p>
              <p className="text-sm text-center">Menit</p>
            </div>
          </div>

          {/* TIME */}
          <div className="mx-16 mt-7 ">
            <div>
              <p className="font-['Roboto'] text-sm">Dibuka</p>
              <div className="grid grid-flow-col gap-2 mt-2 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
                  <span className="font-mono text-xl">
                    <span>10:45</span>
                  </span>
                </div>
                <div className="flex flex-col p-2 bg-neutral ml-2 rounded-md text-neutral-content">
                  <span className="font-mono text-xl">
                    <h1 className="text-xl">WIB</h1>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="font-['Roboto'] text-sm">Ditutup</p>
              <div className="grid grid-flow-col gap-2 mt-2 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
                  <span className="font-mono text-xl">
                    <span>12:45</span>
                  </span>
                </div>
                <div className="flex flex-col p-2 bg-neutral ml-2 rounded-md text-neutral-content">
                  <span className="font-mono text-xl">
                    <h1 className="text-xl">WIB</h1>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD RIGHT RIDE */}
        <div className="bg-[#04293A] mt-10 py-9 px-14 w-[450px] rounded-[10px] ml-8 max-h-[722px]">
          <p className="font-['Open Sans'] font-semibold text-sm text-white">
            Jumat, 23 September 2022
          </p>
          <div className="bg-orange-300 py-5 px-6 mt-8 text-black rounded-[10px]">
            <div className="flex justify-center">
              <ExclamationTriangleIcon className="w-9 h-9" />
              <p className="self-center ml-3 font-['Roboto'] font-medium text-sm">
                Peringatan
              </p>
            </div>
            <p className="mt-3 text-center font-['Roboto'] text-sm leading-[200%]">
              Sebelum anda memulai ujian, anda diwajibkan untuk melampirkan
              hasil screenshot kamera depan anda ke dalam form dibawah ini
            </p>
          </div>

          <div className="alert alert-success rounded-[10px] shadow-lg mt-8">
            <div className="mx-auto">
              <CheckCircleIcon className="w-6 h-6" />
              <span>Anda telah berhasil terverifikasi!</span>
            </div>
          </div>

          {/* BUTTON VERIFIKASI */}
          <Button onClick={Verifikasi} className="w-full mt-4">
            <CameraIcon className="w-6 h-6 mr-4" />
            <p className="font-['Open Sans'] font-semibold text-sm">
              Verifikasi
            </p>
          </Button>

          {/* BUTTON MULAI UJIAN */}
          {ujianNow ? (
            <Button
              className="w-full mt-[180px]"
              onClick={() => ujianHandler(ujianStatus)}
            >
              <PlayIcon className="w-6 h-6 mr-4" />
              <p className="font-['Open Sans'] font-semibold text-sm">
                {ujianStatus === UjianStateEnum.READY
                  ? "Mulai Ujian"
                  : ujianStatus === UjianStateEnum.CONTINUE
                  ? "Lanjutkan Ujian"
                  : ""}
              </p>
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
