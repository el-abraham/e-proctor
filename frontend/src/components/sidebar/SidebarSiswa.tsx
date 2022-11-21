import {
  ClipboardIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export enum NavbarSiswa {
  DASHBOARD,
  UJIANANDA,
  SETTINGS,
}

type SidebarProps = {
  active: NavbarSiswa;
};

export default function SidebarSiswa({ active }: SidebarProps) {
  return (
    <div className="min-w-[240px] h-screen bg-[#272343] text-[#F3FBFB] fixed">
      {/* TITLE */}
      <h1 className="font-['Poppins'] font-bold text-[20px] text-center pt-[60px]">
        E-PROCTOR
      </h1>
      {/* LIST */}
      <div className="list-none mt-[34px] font-['Open Sans']">
        <NavLink
          to={"/"}
          className={
            active == NavbarSiswa.DASHBOARD
              ? "flex font-semibold ml-[27px] p-[10px] rounded-l-[20px] mb-[35px] text-black bg-[#EFF0F3]"
              : "flex ml-[27px] p-[10px] rounded-l-[20px] mb-[35px]"
          }
        >
          <div className="flex">
            <HomeIcon className="h-[20px] w-[20px] my-auto ml-[20px]" />
            <li className="ml-[20px] my-auto text-[14px]">Dashboard</li>
          </div>
        </NavLink>

        <NavLink
          to={"/ujian"}
          className={
            active == NavbarSiswa.UJIANANDA
              ? "flex font-semibold ml-[27px] p-[10px] rounded-l-[20px] mb-[35px] text-black bg-[#EFF0F3]"
              : "flex ml-[27px] p-[10px] rounded-l-[20px] mb-[35px]"
          }
        >
          <div className="flex">
            <ClipboardIcon className="h-[20px] w-[20px] my-auto ml-[20px]" />
            <li className="ml-[20px] my-auto text-[14px]">Ujian Anda</li>
          </div>
        </NavLink>
        <NavLink
          to={"/pengaturan"}
          className={
            active == NavbarSiswa.SETTINGS
              ? "flex font-semibold ml-[27px] p-[10px] rounded-l-[20px] mb-[35px] text-black bg-[#EFF0F3]"
              : "flex ml-[27px] p-[10px] rounded-l-[20px] mb-[35px]"
          }
        >
          <div className="flex">
            <Cog6ToothIcon className="h-[20px] w-[20px] my-auto ml-[20px]" />
            <li className="ml-[20px] my-auto text-[14px]">Pengaturan</li>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
