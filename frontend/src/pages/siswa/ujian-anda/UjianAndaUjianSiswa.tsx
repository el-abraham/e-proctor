import {
  ChevronRightIcon,
  ClockIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/forms/Button";
import Input from "../../../components/forms/Input";
import Notifications from "../../../components/icons/Notifications";
import Settings from "../../../components/icons/Settings";
import ModalCariUjianGagal from "../../../components/modals/siswa/ModalCariUjianGagal";
import ModalCariUjianSukses from "../../../components/modals/siswa/ModalCariUjianSukses";
import ModalGabungUjianGagal from "../../../components/modals/siswa/ModalGabungUjianGagal";
import ModalGabungUjianSukses from "../../../components/modals/siswa/ModalGabungUjianSukses";
import SidebarSiswa, {
  NavbarSiswa,
} from "../../../components/sidebar/SidebarSiswa";
import TabsSiswa from "../../../components/tabs/siswa/TabsSiswa";
import Quiz from "../../../models/quiz";
import { getQuiz } from "../../../services/api/quiz.service";

export default function UjianAndaUjianSiswa() {
  const [akanDatang, setAkanDatang] = useState<Quiz[]>([]);
  const [hariIni, setHariIni] = useState<Quiz[]>([]);

  useEffect(() => {
    const testing = async () => {
      const res = await getQuiz();
      console.log(res);
      setAkanDatang(res ?? []);
      setHariIni(res ?? []);
    };

    testing();
  }, []);

  const navigate = useNavigate();
  const DetailUjian = () => {
    // 👇️ navigate to /contacts
    navigate("/siswa/detail-ujian");
  };

  const MasukUjian = () => {
    navigate("/insession");
  };

  return (
    <div className="bg-[#EFF0F3] flex text-black">
      {/* JIKA GAGAL */}
      <ModalCariUjianGagal />
      <ModalGabungUjianGagal />

      {/* JIKA SUKSES */}
      <ModalCariUjianSukses />
      <ModalGabungUjianSukses />

      <SidebarSiswa active={NavbarSiswa.UJIANANDA} />

      <div className="pr-6 w-full ml-6 pl-[240px] pb-[30px]">
        <div className="flex gap-[30px] mt-6 justify-end">
          {/* CARI UJIAN INPUT */}
          <div className="font-['Open Sans'] items-center relative -mt-2">
            <label htmlFor="cari-ujian-sukses">
              <MagnifyingGlassIcon className="w-[20px] h-[20px] flex absolute mt-[20px] ml-[245px]" />
              <Input
                className="flex pl-4 pr-[38px] transition duration-200 focus:outline-none rounded-[20PX] mt-3 w-[280px] h-[35PX] text-[14px] focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm"
                placeholder="Gabung Ujian"
              />
            </label>
          </div>
          <Notifications />
          <Settings />
        </div>
        <TabsSiswa />

        <div className="mt-[30px]">
          <div className="flex mb-[17px]">
            <h1 className="self-center font-['Poppins'] font-semibold text-base mr-3">
              Hari ini
            </h1>
            <div className="flex rounded-full w-8 h-8 bg-[#FBFCFC]">
              <p className="m-auto font-['Poppins'] font-semibold text-sm">
                {hariIni.length}
              </p>
            </div>
          </div>
          {/* MULAI GRID */}
          <div className="flex overflow-x-auto gap-x-4">
            {hariIni.map((value, index) => {
              return (
                <div
                  key={index}
                  className="min-w-[326px] rounded-[10px] bg-[#FBFCFC]"
                >
                  {/* IMAGE */}
                  <img
                    className="h-[140.5px] w-full rounded-t-[10px]"
                    src="https://placeimg.com/192/192/people"
                  />
                  <div className="mx-[30px] mt-[15.5px] pb-[24px] flex justify-between">
                    <div className="flex flex-col">
                      {/* NAMA UJIAN */}
                      <div className="flex ">
                        <p className="font-['Poppins'] font-semibold text-sm ">
                          {value.title}
                        </p>
                      </div>

                      {/* AVATAR */}
                      <div className="avatar flex  mt-[10px]">
                        <div className="w-[30px] h-[30px] rounded-full">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                        <p className="flex text-sm ml-[15px] self-center font-['Open Sans']">
                          Alena Workman
                        </p>
                      </div>

                      {/* TIME */}
                      <div className="flex items-center mt-[30px]">
                        <ClockIcon className="w-[30px] h-[30px] text-black" />
                        <p className="text-[12px] ml-[15px]">10:45 - 12:45</p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="rounded-md font-['Open Sans'] font-semibold text-sm text-center py-[10px] px-5 bg-red-400">
                        <p>20</p>
                        <p>Soal</p>
                      </div>
                      <Button className="mt-5" onClick={MasukUjian}>
                        <p className="my-auto text-xs">Mulai</p>
                        <ChevronRightIcon className="w-[15px] h-[15px] ml-[10px]" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Gambar 1 */}
          </div>
        </div>

        <div className="flex mb-[17px] mt-[30px]">
          <h1 className="self-center font-['Poppins'] font-semibold text-base mr-3">
            Akan Datang
          </h1>
          <div className="flex rounded-full w-8 h-8 bg-[#FBFCFC]">
            <p className="m-auto font-['Poppins'] font-semibold text-sm">
              {akanDatang.length}
            </p>
          </div>
        </div>

        <div className="font-['Open Sans'] mt-[15px]">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Nama Ujian</th>
                <th>Tanggal Ujian</th>
                <th>Jam Dimulai</th>
                <th>Pengawas/Guru</th>
              </tr>
            </thead>
            <tbody>
              {akanDatang.map((value, index) => {
                return (
                  <tr
                    key={index}
                    className="cursor-pointer"
                    onClick={DetailUjian}
                  >
                    <th>{index + 1}</th>
                    <td className="flex">
                      <div className="avatar">
                        <div className="w-[86px] h-[86px] rounded">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div className="ml-[20px] self-center">
                        <h1 className="font-semibold text-sm mb-[13px]">
                          {/* Nama Soal */}
                          {value.title}
                        </h1>
                        <div className="flex">
                          <p className="font-['Roboto'] self-center text-xs">
                            {/* jumlah soal */}
                            {value.questions?.length}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>13 September 2022</td>
                    <td>10:45 - 12:45</td>
                    <td>
                      {/* AVATAR */}
                      <div className="avatar flex ">
                        <div className="w-[50px] h-[50px] rounded-full">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                        <p className="flex text-sm ml-[15px] self-center font-['Open Sans']">
                          Alena Workman
                        </p>
                      </div>
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
