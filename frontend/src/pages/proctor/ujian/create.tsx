import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import Breadcrumbs from "../../../components/others/Breadcrumbs";
import { NavbarEnum } from "../../../components/sidebar/SidebarGuru";
import SidebarGuru from "../../../components/sidebar/SidebarGuru";
import Header from "../questions-bank/header";
import useQuizActions from "../../../_actions/quiz.actions";
import Quiz from "../../../_models/quiz.model";
import { FileUploader } from "react-drag-drop-files";

type FormValues = {
  namaujian: string;
  deskripsi: string;
  grade: string;
  acak: string;
  durasi: string;
};

export default function TambahUjian() {
  const quizActions = useQuizActions();

  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    if (!nameRef.current?.value || nameRef.current.value == "") return false;
    if (!durationRef.current?.value || parseInt(durationRef.current.value) < 5)
      return false;
    return true;
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const quiz = new Quiz({
      title: nameRef.current!.value,
      duration: parseInt(durationRef.current!.value),
      description: descriptionRef.current?.value,
    });
    quizActions.addQuiz(quiz);
  }

  const breadcrumb = [
    { url: "/", name: "Dashboard" },
    { url: "#", name: "Buat Ujian" },
  ];

  const [file, setFile] = useState<File | Array<File>>();
  const handleChange = (file: File | Array<File>) => {
    setFile(file);
    console.log(file);
  };

  const fileTypes = ["JPG", "PNG", "GIF"];

  return (
    <div className="bg-[#EFF0F3] flex min-h-screen text-black">
      {/* SIDEBAR */}
      <SidebarGuru active={NavbarEnum.UJIANANDA} />

      {/* BUTTON BUAT UJIAN, CARI UJIAN(?), ICON NOTIFIKASI, DAN SETTINGS */}
      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <Header />
        <Breadcrumbs breadcrumbItems={breadcrumb} />

        <h1 className="font-['Poppins'] font-semibold text-xl mb-[30px]">
          Tambah Ujian Baru
        </h1>

        <div className="flex">
          {/* MENAMBAHKAN THUMBNAIL */}

          <div className="bg-[#FBFCFC] w-64 h-64 rounded-[10px] border-dashed border-2 border-slate-300 flex mr-[50px]">
            <FileUploader
              handleChange={handleChange}
              name="file"
              onDrop={console.log("notifikasi")}
              types={fileTypes}
            >
              <div className="w-64 h-64 cursor-pointer flex place-content-center flex-col">
                <ArrowUpTrayIcon className="w-[50px] mx-auto h-[50px] self-center" />
                <p className="font-['Roboto'] text-sm mt-5 text-center">
                  Unggah thumbnail untuk ujian anda
                </p>
              </div>
            </FileUploader>
          </div>

          <form className="block" onSubmit={onSubmit}>
            {/* https://react-hook-form.com/ts/ */}
            {/* NAMA UJIAN */}
            <div className="form-control w-full max-w-xs">
              <label className="label mb-1">
                <span className="label-text font-semibold text-sm font-['Open Sans']">
                  NAMA UJIAN
                </span>
              </label>
              <input
                ref={nameRef}
                type="text"
                placeholder="Masukkan nama ujian ...."
                className="input input-bordered w-[610px]"
              />
            </div>

            {/* DESKRIPSI UJIAN */}
            <div className="form-control w-[610px] mt-[20px]">
              <label className="label mb-1">
                <span className="label-text font-semibold text-sm font-['Open Sans']">
                  DESKRIPSI UJIAN
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                ref={descriptionRef}
                placeholder="Masukkan deskripsi ujian ...."
              ></textarea>
            </div>

            <div className="dropdown dropdown-end mt-[20px]">
              <p className="font-semibold text-sm font-['Open Sans'] ml-1 mb-1">
                DURASI PENGERJAAN
              </p>
              <div className="form-control">
                <label className="input-group">
                  <input
                    ref={durationRef}
                    min={5}
                    type="number"
                    placeholder="--"
                    className="input input-bordered"
                  />
                  <span>Menit</span>
                </label>
              </div>
            </div>

            <div className="mt-[30px] justify-end flex mb-[30px]">
              <button type="reset" className="btn mr-[30px] bg-neutral text-xs">
                Batalkan
              </button>

              <button
                type="submit"
                className="btn mr-[30px] btn-primary text-xs"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
