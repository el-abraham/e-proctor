import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import SelamatDatangGuru from "../../components/dashboard/proctor/SelamatDatang";
import UjianDibuatGuru from "../../components/dashboard/proctor/UjianDibuat";
import UjianHariIniGuru from "../../components/dashboard/proctor/UjianHariIni";
import Profile from "../../components/dashboard/Profile";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import Notifications from "../../components/icons/Notifications";
import Settings from "../../components/icons/Settings";
import SidebarGuru, { NavbarEnum } from "../../components/sidebar/SidebarGuru";

export default function DashboardGuru() {
  return (
    <div className="App bg-[#EFF0F3] flex pb-[30px]">
      {/* SIDEBAR */}
      <SidebarGuru active={NavbarEnum.DASHBOARD} />

      {/* BUTTON BUAT UJIAN, CARI UJIAN(?), ICON NOTIFIKASI, DAN SETTINGS */}
      <div className="mr-[24px] w-full min-h-screen ml-6 pl-[240px]">
        <div className="flex gap-[30px] mt-6 justify-end">
          {/* TEST BEN BUTTON TAMBAH UJIAN */}
          <Link to={"/ujian/create"}>
            <Button className="btn rounded-[20PX] max-w-xs text-[14px] mt-1 text-white">
              <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
              <p className="my-auto text-xs">Buat Ujian</p>
            </Button>
          </Link>

          <div className="font-['Open Sans'] items-center relative -mt-2">
            <label htmlFor="cari-ujian-sukses">
              <MagnifyingGlassIcon className="w-[20px] h-[20px] flex absolute mt-6 ml-[245px]" />

              <Input
                className="flex pl-4 pr-[38px] transition h-11 duration-200 focus:outline-none rounded-[20PX] mt-3 w-[280px] text-[14px] focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm"
                placeholder="Cari Ujian"
              />
            </label>
          </div>

          <Notifications />
          <Settings />
        </div>

        <div className="flex mt-[40px] justify-between">
          {/* UCAPAN SELAMAT DATANG */}
          <SelamatDatangGuru />
          {/* PROFILE */}
          <Profile />
        </div>

        <div className="flex justify-between">
          {/* UJIAN HARI INI */}
          <UjianHariIniGuru />
          {/* UJIAN DIBUAT */}
          <UjianDibuatGuru />
        </div>
      </div>
    </div>
  );
}
