import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../components/others/Breadcrumbs";
import Button from "../../../components/forms/Button";
import Header1 from "../../../components/dashboard/guru/Header1";
import { NavbarEnum } from "../../../components/sidebar/SidebarGuru";
import SidebarGuru from "../../../components/sidebar/SidebarGuru";

type FormValues = {
  namaujian: string;
  deskripsi: string;
  grade: string;
  acak: string;
  durasi: string;
};

export default function TambahUjian() {
  const [form, setForm] = useState<FormValues>({
    namaujian: "",
    deskripsi: "",
    grade: "",
    acak: "",
    durasi: "",
  });

  const [grade, setGrade] = useState<string>();
  const [acak, setAcak] = useState<string>();
  const [durasi, setDurasi] = useState<string>();

  function onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="bg-[#EFF0F3] flex h-screen text-black">
      {/* SIDEBAR */}
      <SidebarGuru active={NavbarEnum.DASHBOARD} />

      {/* BUTTON BUAT UJIAN, CARI UJIAN(?), ICON NOTIFIKASI, DAN SETTINGS */}
      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <Header1 />

        <Breadcrumbs />

        <h1 className="font-['Poppins'] font-semibold text-xl mb-[30px]">
          Tambah Ujian Baru
        </h1>

        <div className="flex">
          {/* MENAMBAHKAN THUMBNAIL */}
          <div className="bg-[#FBFCFC] w-[246px] h-[246px] rounded-[10px] border-dashed border-2 border-slate-300 flex mr-[50px]">
            <div className="flex flex-col m-auto">
              <ArrowUpTrayIcon className="w-[50px] h-[50px] self-center" />
              <p className="leading-[200%] mt-[20px] font-['Roboto'] text-sm w-[178px] text-center self-center">
                Unggah thumbnail untuk ujian anda
              </p>
            </div>
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
                type="text"
                name="namaujian"
                value={form.namaujian}
                onChange={onChange}
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
                onChange={onChange}
                name="deskripsi"
                value={form.deskripsi}
                placeholder="Masukkan deskripsi ujian ...."
              ></textarea>
            </div>

            <div className="flex justify-between">
              {/* GRADE */}
              <div className="dropdown dropdown-end mt-[20px]">
                <p className="font-semibold text-sm font-['Open Sans'] ml-1 mb-1">
                  GRADE
                </p>
                <select
                  value={grade}
                  onChange={onChange}
                  name="grade"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Pilih Grade
                  </option>
                  <option>100</option>
                  <option>50</option>
                </select>
              </div>

              {/* ACAK SOAL */}
              <div className="dropdown dropdown-end mt-[20px]">
                <p className="font-semibold text-sm font-['Open Sans'] ml-1 mb-1">
                  ACAK SOAL
                </p>
                <select
                  value={acak}
                  onChange={onChange}
                  name="acak"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Acak Soal?
                  </option>
                  <option>Ya</option>
                  <option>Tidak</option>
                </select>
              </div>

              {/* DURASI PENGERJAAN */}
              <div className="dropdown dropdown-end mt-[20px]">
                <p className="font-semibold text-sm font-['Open Sans'] ml-1 mb-1">
                  DURASI PENGERJAAN
                </p>
                <select
                  value={durasi}
                  onChange={onChange}
                  name="durasi"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Durasi Pengerjaan
                  </option>
                  <option>1 Jam</option>
                  <option>10 Menit</option>
                </select>
              </div>
            </div>

            <div className="mt-[30px] justify-end flex mb-[30px]">
              <Link to={"/guru/dashboard"}>
                <Button className="mr-[30px]">
                  <p className="text-xs">Batalkan</p>
                </Button>
              </Link>

              {/* <Link to={"/tampilujian"}> */}
              <Button>
                <p className="text-xs">Simpan Ujian</p>
              </Button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
