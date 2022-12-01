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
      <div className="mr-[24px] w-full ml-6 pl-[240px]">
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
      </div>
    </div>
  );
}
