import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import Profile from "../../components/dashboard/Profile";
import SelamatDatangSiswa from "../../components/dashboard/siswa/SelamatDatang";
import UjianAkanDatangSiswa from "../../components/dashboard/siswa/UjianAkanDatang";
import UjianHariIniSiswa from "../../components/dashboard/siswa/UjianHariIni";
import Input from "../../components/forms/Input";
import Notifications from "../../components/icons/Notifications";
import Settings from "../../components/icons/Settings";
import ModalCariUjianGagal from "../../components/modals/siswa/CariUjianGagal";
import ModalCariUjianSukses from "../../components/modals/siswa/CariUjianSukes";
import ModalGabungUjianGagal from "../../components/modals/siswa/GabungUjianGagal";
import ModalGabungUjianSukses from "../../components/modals/siswa/GabungUjianSukses";
import SidebarSiswa, {
  NavbarSiswa,
} from "../../components/sidebar/SidebarSiswa";

export default function DashboardSiswa() {
  const gabungRef = useRef<HTMLInputElement>();
  const [modalGabung, setModalGabung] = useState<boolean>(false);
  const codeRef = useRef<HTMLInputElement>(null);

  const modalHandler = () => {
    if (codeRef.current?.value && codeRef.current.value != "") {
      setModalGabung(true);
    }
  };

  const resetInputGabung = () => {
    codeRef.current!.value = "";
  };

  return (
    <div className="App bg-[#EFF0F3] flex pb-[30px]">
      {/* JIKA GAGAL */}
      <ModalCariUjianGagal />
      {/* <ModalGabungUjianGagal /> */}

      {/* JIKA SUKSES */}
      <ModalCariUjianSukses />
      {modalGabung ? (
        <ModalGabungUjianSukses
          code={codeRef.current!.value}
          setModal={setModalGabung}
          modal={modalGabung}
          reset={resetInputGabung}
        />
      ) : (
        <div></div>
      )}

      <SidebarSiswa active={NavbarSiswa.DASHBOARD} />
      <div className="mr-[24px] w-full min-h-screen ml-6 pl-[240px]">
        <div className="flex gap-[30px] mt-6 justify-end">
          {/* GABUNG UJIAN INPUT */}
          <div className="font-['Open Sans'] items-center relative -mt-2">
            {/* <label htmlFor="gabung-ujian-sukses"> */}
            <label>
              <PlusCircleIcon
                onClick={modalHandler}
                className="w-[25px] h-[25px] flex absolute mt-[17px] ml-[245px]"
              />

              <Input
                ref={codeRef}
                className="flex pl-4 pr-[38px] transition duration-200 focus:outline-none rounded-[20PX] mt-3 w-[280px] h-[35PX] text-[14px] focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm"
                placeholder="Gabung Ujian"
              />
            </label>
          </div>

          {/* CARI UJIAN INPUT */}
          <div className="font-['Open Sans'] items-center relative -mt-2">
            <label htmlFor="cari-ujian-sukses">
              {/* <div> */}
              <MagnifyingGlassIcon className="w-[20px] h-[20px] flex absolute mt-[20px] ml-[245px]" />

              <Input
                className="flex pl-4 pr-[38px] transition duration-200 focus:outline-none rounded-[20PX] mt-3 w-[280px] h-[35PX] text-[14px] focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm"
                placeholder="Cari Ujian"
              />
              {/* </div> */}
            </label>
          </div>
          <Notifications />
          <Settings />
        </div>

        <div className="flex mt-[40px] justify-between">
          {/* UCAPAN SELAMAT DATANG */}
          <SelamatDatangSiswa />
          {/* PROFILE */}
          <Profile />
        </div>

        <div className="flex justify-between">
          {/* UJIAN HARI INI */}
          <UjianHariIniSiswa />
          {/* UJIAN AKAN DATANG */}
          <UjianAkanDatangSiswa />
        </div>
        <div className="w-[300px] h-[300px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path
              fill="#000000"
              d="M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
