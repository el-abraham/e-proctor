import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/forms/Button";
import Notifications from "../../../components/icons/Notifications";
import Profile from "../../../components/dashboard/Profile";
import Settings from "../../../components/icons/Settings";
import { NavbarEnum } from "../../../components/sidebar/SidebarGuru";
import SidebarGuru from "../../../components/sidebar/SidebarGuru";
import SelamatDatangGuru from "../../../components/dashboard/guru/SelamatDatangGuru";
import UjianHariIniGuru from "../../../components/dashboard/guru/UjianHariIniGuru";
import UjianDibuatGuru from "../../../components/dashboard/guru/UjianDibuatGuru";
import Input from "../../../components/forms/Input";

export default function DashboardGuru() {
  const navigate = useNavigate();
  const BuatUjian = () => {
    navigate("/buat-ujian");
  };

  return (
    <div className="App bg-[#EFF0F3] flex pb-[30px]">
      {/* SIDEBAR */}
      <SidebarGuru active={NavbarEnum.DASHBOARD} />

      {/* MODAL CARI UJIAN GAGAL */}
      <input type="checkbox" id="cari-ujian-gagal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="cari-ujian-gagal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Cari Ujian</h3>
          <p className="py-4">
            Sistem tidak menemukan ujian yang anda cari. Mohon ketikkan nama
            ujian dengan tepat!
          </p>
          <div className="modal-action">
            <label htmlFor="cari-ujian-gagal" className="btn">
              Kembali
            </label>
          </div>
        </div>
      </div>

      {/* BUTTON BUAT UJIAN, CARI UJIAN(?), ICON NOTIFIKASI, DAN SETTINGS */}
      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <div className="flex gap-[30px] mt-6 justify-end">
          <Button
            className="rounded-[20PX] btn-sm max-w-xs text-[14px] mt-1 hover:text-white text-black"
            onClick={BuatUjian}
          >
            <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
            <p className="my-auto text-xs">Buat Ujian</p>
          </Button>
          {/* <Button className={"btn-sm rounded-md"}>
            <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
            <p className="my-auto text-xs">Buat Ujian</p>
            </Button> */}
          <label htmlFor="cari-ujian-gagal">
            <MagnifyingGlassIcon className="w-[18 px] h-[18px] absolute mt-3 ml-[245px]" />
            <Input
              className="flex pl-4 pr-[38px] transition duration-200 focus:outline-none rounded-[20PX] mt-1 w-[280px] h-[35PX] text-[14px] focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm"
              placeholder="Cari Ujian ...."
            />
          </label>
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
