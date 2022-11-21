import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
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
  return (
    <div className="App bg-[#EFF0F3] flex pb-[30px]">
      {/* JIKA GAGAL */}
      <ModalCariUjianGagal />
      <ModalGabungUjianGagal />

      {/* JIKA SUKSES */}
      <ModalCariUjianSukses />
      <ModalGabungUjianSukses />

      <SidebarSiswa active={NavbarSiswa.DASHBOARD} />
      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <div className="flex gap-[30px] mt-6 justify-end">
          {/* GABUNG UJIAN INPUT */}
          <div className="font-['Open Sans'] items-center relative -mt-2">
            <label htmlFor="gabung-ujian-sukses">
              <PlusCircleIcon className="w-[25px] h-[25px] flex absolute mt-[20px] ml-[245px]" />
              <Input
                className=" pl-4 pr-[40px] rounded-[20PX] w-[280px] h-11 text-[14px]"
                placeholder="Gabung Ujian ...."
              />
            </label>
          </div>

          {/* CARI UJIAN INPUT */}
          <div className="font-['Open Sans'] items-center relative -mt-2">
            <label htmlFor="cari-ujian-sukses">
              <MagnifyingGlassIcon className="w-[20px] h-[20px] flex absolute mt-[22px] ml-[245px]" />
              <Input
                className=" pl-4 pr-[40px] rounded-[20PX] w-[280px] h-11 text-[14px]"
                placeholder="Cari Ujian ...."
              />
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
