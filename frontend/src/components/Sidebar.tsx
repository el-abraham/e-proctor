import {
  ClipboardIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[200px] fixed h-screen bg-[#272343] text-[#F3FBFB]">
      {/* TITLE */}
      <h1 className="font-['Poppins'] font-bold text-[25px] leading-[45px] text-center pt-[60px]">
        E-PROCTOR
      </h1>
      {/* LIST */}
      <div className="items-center list-none mt-[34px] font-['Open Sans']">
        <Link to={"/"}>
          <div className="flex ml-[27px] h-[52px] rounded-l-[20px] mb-[35px]">
            <HomeIcon className="h-[22px] w-[22px] my-auto ml-[20px]" />
            <p className="ml-[20px] my-auto text-[14px]">Dashboard</p>
          </div>
        </Link>
        <div className="flex ml-[27px] h-[48px] rounded-l-[20px] mb-[35px] text-black bg-[#EFF0F3]">
          <ClipboardIcon className="h-[22px] w-[22px] my-auto ml-[20px]" />
          <p className="ml-[20px] my-auto font-semibold text-[14px]">
            Ujian Anda
          </p>
        </div>
        <div className="flex ml-[27px] h-[52px] rounded-l-[20px]">
          <Cog6ToothIcon className="h-[22px] w-[22px] my-auto ml-[20px]" />
          <p className="ml-[20px] my-auto text-[14px]">Pengaturan</p>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
