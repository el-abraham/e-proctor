import {
  CalendarDaysIcon,
  ClockIcon,
  DocumentIcon,
  MagnifyingGlassIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/forms/Button";
import Input from "../../../components/forms/Input";
import Notifications from "../../../components/icons/Notifications";
import Settings from "../../../components/icons/Settings";
import SidebarSiswa, {
  NavbarSiswa,
} from "../../../components/sidebar/SidebarSiswa";

const DetailUjianSiswa = () => {
  const navigate = useNavigate();
  const MasukUjian = () => {
    navigate("/insession");
  };

  return (
    <div className="bg-[#EFF0F3] h-screen flex text-black">
      <SidebarSiswa active={NavbarSiswa.UJIANANDA} />

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

      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <div className="flex gap-[30px] mt-6 justify-end">
          {/* CARI UJIAN INPUT */}
          <div className="font-['Open Sans'] items-center relative -mt-2">
            <label htmlFor="cari-ujian-gagal">
              <MagnifyingGlassIcon className="w-[20px] h-[20px] flex absolute mt-[20px] ml-[245px]" />
              <Input
                className="flex pl-4 pr-[38px] transition duration-200 focus:outline-none rounded-[20PX] mt-3 w-[280px] h-[35PX] text-[14px] focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm"
                placeholder="Cari Ujian ...."
              />
            </label>
          </div>
          <Notifications />
          <Settings />
        </div>

        {/* Detail Ujian */}
        <div>
          <div className="flex bg-[#FBFCFC] mt-[73px] rounded-[10px]">
            {/* Gambar */}
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.VOMKwFZfZ3jTK6ET8t5sxQHaNK?w=185&h=329&c=7&r=0&o=5&pid=1.7"
                className="w-[180px] h-[180px] rounded-[10px]"
              />
            </div>
            {/* Text */}
            <div className="ml-[20px] w-[800px] flex flex-col self-center">
              <h1 className="font-['Poppins'] font-semibold text-[25px]">
                Ujian Geografi
              </h1>
              <h4 className="mt-[22px] font-['Poppins'] font-normal text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                labore velit. Asperiores a dolor consequatur amet non, ipsam eum
                suscipit reprehenderit dolorum libero, sapiente et nulla ipsa.
                A, ratione fugit.
              </h4>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[42px] font-['Poppins'] font-semibold">
          <div className="text-black text-center w-[120px] h-[70px]">
            <DocumentIcon className="w-[45px] h-[45px] mx-auto" />
            <p className="text-[12px] mt-1">20 soal</p>
          </div>
          <div className="text-black text-center w-[120px] h-[70px]">
            <CalendarDaysIcon className="w-[45px] h-[45px] mx-auto" />
            <p className="text-[12px] mt-1">13 September 2022</p>
          </div>
          <div className="text-black text-center w-[120px] h-[70px]">
            <ClockIcon className="w-[45px] h-[45px] mx-auto" />
            <p className="text-[12px] mt-1">20 soal</p>
          </div>
          <div className="text-black text-center w-[120px] h-[70px]">
            <PencilIcon className="w-[45px] h-[45px] mx-auto" />
            <p className="text-[12px] mt-1">20 soal</p>
          </div>
          <div className="text-black text-center w-[120px] h-[70px]">
            <div className="avatar">
              <div className="w-[45px] rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <p className="text-[12px] mt-1">Alena Workman</p>
          </div>
        </div>
        <div className="flex justify-end mt-[52px]">
          <Button className="hover:bg-none" onClick={MasukUjian}>
            Ke Ujian Anda
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailUjianSiswa;
