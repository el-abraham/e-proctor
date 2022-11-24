import {
  FunnelIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import Button from "../../../../components/forms/Button";
import Breadcrumbs from "../../../../components/others/Breadcrumbs";
import NamaUjian from "../../../../components/others/NamaUjian";
import SidebarGuru, {
  NavbarEnum,
} from "../../../../components/sidebar/SidebarGuru";
import useQuizActions from "../../../../_actions/quiz.actions";
import QuizSession from "../../../../_models/quiz-session";
import { detailQuizState } from "../../../../_state/quiz.state";
import Header from "../../questions-bank/header";
import TabsDetailUjianGuru from "./tabs";

export default function DetailSessionsGuru() {
  const detailQuiz = useRecoilValue(detailQuizState);

  const quizActions = useQuizActions();
  const nameRef = useRef<HTMLInputElement>(null);
  const timeEndRef = useRef<HTMLInputElement>(null);
  const timeStartRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    if (!nameRef.current?.value || nameRef.current.value == "") return false;
    if (!timeStartRef.current?.value || nameRef.current.value == "")
      return false;
    if (!timeEndRef.current?.value || nameRef.current.value == "") return false;
    return true;
  };

  const convertUnixDate = (date: string) => {
    const dateObject = new Date(date);
    return Math.ceil(dateObject.getTime() / 1000);
  };

  const convertDate = (unixTime: number) => {
    const date = new Date(unixTime * 1000);
    return date;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      const session = new QuizSession({
        name: nameRef.current!.value,
        timeStart: convertUnixDate(timeStartRef.current!.value),
        timeEnd: convertUnixDate(timeEndRef.current!.value),
        quiz: detailQuiz,
      });

      quizActions.addSession(session);
    }
  };

  useEffect(() => {
    if (detailQuiz != undefined) {
      if (detailQuiz.session == undefined) {
        quizActions.sessions(detailQuiz);
      }
    }
  }, [detailQuiz]);

  return (
    <div className="bg-[#EFF0F3] min-h-screen flex text-black">
      <div>
        <form onSubmit={onSubmit}>
          <input type="checkbox" id="add-session" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <label
                htmlFor="add-session"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="font-bold text-lg">Tambah Session</h3>
              <div className="block">
                <div className="justify-between flex w-full mt-5">
                  <p className="self-center">Nama Session</p>
                  <input
                    type="text"
                    ref={nameRef}
                    placeholder="Masukkan nama session ..."
                    className="input input-bordered w-[300px]"
                  />
                </div>
                <div className="justify-between flex w-full mt-5">
                  <p className="self-center">Ujian Dibuka</p>
                  <input
                    type="datetime-local"
                    ref={timeStartRef}
                    className="input input-bordered w-[300px]"
                  />
                </div>
                <div className="justify-between flex w-full mt-5">
                  <p className="self-center">Ujian Ditutup</p>
                  <input
                    type="datetime-local"
                    ref={timeEndRef}
                    className="input input-bordered w-[300px]"
                  />
                </div>
              </div>
              <div className=" modal-action">
                {/* <label type="submit" htmlFor="add-session" className="btn">Simpan</label> */}
                <Button htmlFor="add-session" className="btn btn-primary">
                  Simpan
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <input type="checkbox" id="trash-icon" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="trash-icon"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Hapus Session</h3>
          <p className="py-4">Apakah anda yakin ingin menghapus session ini?</p>
          <div className="modal-action">
            <label htmlFor="trash-icon" className="btn btn-primary">
              Ya
            </label>
            <label htmlFor="trash-icon" className="btn">
              Tidak
            </label>
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <SidebarGuru active={NavbarEnum.UJIANANDA} />

      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <Header />
        <Breadcrumbs />
        <NamaUjian title={detailQuiz?.title} />
        <TabsDetailUjianGuru />

        <div className="mb-[30px] mt-[30px]">
          <label htmlFor="add-session" className="btn btn-primary mr-5">
            <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
            <p className="my-auto text-xs">Session</p>
          </label>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
              <FunnelIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
              <p className="my-auto text-xs">Filter</p>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>
                  <p className="my-auto text-xs">Berdasarkan Selesai</p>
                </a>
              </li>
              <li>
                <a>
                  <p className="my-auto text-xs">Berdasarkan Belum Selesai</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-x-auto font-['Roboto'] mb-[30px]">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <td>No</td>
                <th>Nama Session</th>
                <th>Ujian Dibuka</th>
                <th>Ujian Ditutup</th>
                <th>Status</th>
                <th>Kode Ujian</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {detailQuiz?.session?.map((value, index) => {
                const dateTimeStart = convertDate(value.timeStart);
                const dateTimeEnd = convertDate(value.timeEnd);

                return (
                  <tr key={index}>
                    <td>{++index}</td>
                    <td>{value.name}</td>
                    <td>{`${dateTimeStart.toLocaleDateString()} ${dateTimeStart.toLocaleTimeString()}`}</td>
                    <td>{`${dateTimeEnd.toLocaleDateString()} ${dateTimeEnd.toLocaleTimeString()}`}</td>
                    <td>-</td>
                    <td>{value.code}</td>
                    <td className="flex gap-[15px]">
                      <label htmlFor="trash-icon">
                        <TrashIcon className="w-[24px] h-[24px] self-center text-red-500" />
                      </label>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
