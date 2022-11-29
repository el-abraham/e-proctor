import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Input from "../../../components/forms/Input";
import Notifications from "../../../components/icons/Notifications";
import Settings from "../../../components/icons/Settings";
import ModalCariUjianGagal from "../../../components/modals/siswa/CariUjianGagal";
import ModalCariUjianSukses from "../../../components/modals/siswa/CariUjianSukes";
import SidebarSiswa, {
  NavbarSiswa,
} from "../../../components/sidebar/SidebarSiswa";
import TabsSiswa from "../../../components/tabs/TabsSiswa";

export default function JadwalUjianSiswa() {
  return (
    <div className="bg-[#EFF0F3] min-h-screen h-full flex text-black">
      {/* JIKA GAGAL */}
      <ModalCariUjianGagal />

      {/* JIKA SUKSES */}
      <ModalCariUjianSukses />

      <SidebarSiswa active={NavbarSiswa.UJIANANDA} />

      <div className="mr-[24px] w-full ml-6 pl-[240px] pb-[30px]">
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

        <h1 className="font-extrabold font['Poppins'] text-[25px] py-6">
          Halaman Jadwal
        </h1>
      </div>
    </div>
  );
}
