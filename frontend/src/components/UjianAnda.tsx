import {
  BellAlertIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Tabs from "../components/Tabs";
import Button from "../components/Button";
import Input from "../components/Input";
import Sidebar from "./sidebar/SidebarGuru";

export default function UjianAnda() {
  return (
    <div className="bg-[#EFF0F3] w-auto h-[1324px] flex">
      <Sidebar />
      <div className="ml-auto h-3 flex">
        <div className="font-['Open_Sans'] items-center relative pt-[55px]">
          <MagnifyingGlassIcon className="w-[24px] h-[24px] flex absolute mt-4 ml-2" />
          <Input
            className="border-none shadow-md pl-10 rounded-[20px] w-[286px] h-[40px] text-[16px]"
            placeholder="Cari Ujian ...."
          />
        </div>
        <div className="px-[30px]">
          <Button
            className="bg-[#FBFCFC] w-[42px] h-[42px] my-[65px] rounded-[10px] shadow-md"
            text={
              <>
                <BellAlertIcon className="text-black w-[24px] h-[24px] font-extrabold" />
              </>
            }
          />
          <Button
            className="bg-[#FBFCFC] w-[42px] h-[42px] my-[65px] rounded-[10px] mx-[30px] shadow-md"
            text={
              <>
                <Cog6ToothIcon className="text-black w-[24px] h-[24px] font-extrabold" />
              </>
            }
          />
        </div>
      </div>
      <div className="absolute mt-[117px] ml-[234px] ">
        <Tabs />
      </div>
    </div>
  );
}
