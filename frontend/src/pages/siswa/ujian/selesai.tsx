import {
  CalendarDaysIcon,
  ChevronRightIcon,
  ClockIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useRecoilValue } from "recoil";
import Button from "../../../components/forms/Button";
import Input from "../../../components/forms/Input";
import Notifications from "../../../components/icons/Notifications";
import Settings from "../../../components/icons/Settings";
import ModalCariUjianGagal from "../../../components/modals/siswa/CariUjianGagal";
import ModalCariUjianSukses from "../../../components/modals/siswa/CariUjianSukes";
import SidebarSiswa, {
  NavbarSiswa,
} from "../../../components/sidebar/SidebarSiswa";
import TabsSiswa from "../../../components/tabs/TabsSiswa";
import { ujianListState } from "../../../_state/ujian.state";

export default function SelesaiUjianSiswa() {
  const ujian = useRecoilValue(ujianListState);

  return (
    <div className="bg-[#EFF0F3] min-h-screen h-full flex text-black">
      {/* JIKA GAGAL */}
      <ModalCariUjianGagal />

      {/* JIKA SUKSES */}
      <ModalCariUjianSukses />

      <SidebarSiswa active={NavbarSiswa.UJIANANDA} />

      <div className="pr-6 w-full ml-6 pl-[240px] pb-[30px]">
        <div className="flex gap-[30px] mt-6 justify-end">
          {/* CARI UJIAN INPUT */}
          <div className="font-['Open Sans'] items-center relative -mt-2">
            <label htmlFor="cari-ujian-sukses">
              <MagnifyingGlassIcon className="w-[20px] h-[20px] flex absolute mt-[20px] ml-[245px]" />
              <Input
                className="flex pl-4 pr-[38px] transition duration-200 focus:outline-none rounded-[20PX] mt-3 w-[280px] h-[35PX] text-[14px] focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm"
                placeholder="Cari Ujian"
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
              Ujian Diselesaikan
            </h1>
            <div className="flex rounded-full w-8 h-8 bg-[#FBFCFC]">
              <p className="m-auto font-['Poppins'] font-semibold text-sm">
                {ujian.length}
              </p>
            </div>
          </div>
          {/* MULAI GRID */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-9">
            {ujian.map((value, index) => {
              return (
                <div
                  className="w-[326px] rounded-[10px] bg-[#FBFCFC]"
                  key={index}
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
                          {value.quiz_name}
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

                      {/* TANGGAL */}
                      <div className="flex items-center mt-[10px]">
                        <CalendarDaysIcon className="w-[30px] h-[30px] text-black" />
                        <p className="text-[12px] ml-[15px]">30/09/2022</p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="rounded-md font-['Open Sans'] font-semibold text-sm text-center py-[10px] px-5 bg-red-400">
                        <p>20</p>
                        <p>Soal</p>
                      </div>
                      <Button className="mt-10">
                        <p className="my-auto text-xs">Summary</p>
                        <ChevronRightIcon className="w-[15px] h-[15px] ml-[10px]" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
