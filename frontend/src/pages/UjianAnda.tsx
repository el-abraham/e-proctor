import {
  BellAlertIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Tabs from "../components/Tabs";
import Button from "../components/Button";
import Input from "../components/Input";
import Sidebar from "../components/Sidebar";

export default function UjianAnda() {
  return (
    <div className="bg-[#EFF0F3] w-auto h-[1324px] flex">
      <Sidebar />
      <div className="ml-auto h-3 flex">
        <div className="font-['Open_Sans'] items-center relative pt-[55px]">
          <MagnifyingGlassIcon className="w-[18px] h-[18px] flex absolute mt-[23px] ml-4" />
          <Input
            className="border-opacity-25 shadow-md pl-12 rounded-[40px] w-[400px] h-12 text-[14px]"
            placeholder="Cari Ujian ...."
          />
        </div>
        <div className="px-[30px]">
          <Button
            className="bg-[#FBFCFC] w-[46px] h-[46px] my-[65px] rounded-[15px] shadow-md"
            text={
              <>
                <BellAlertIcon className="text-black w-[20px] h-[20px] font-extrabold" />
              </>
            }
          />
          <Button
            className="bg-[#FBFCFC] w-[45px] h-[45px] my-[65px] rounded-[15px] mx-[30px] shadow-md"
            text={
              <>
                <Cog6ToothIcon className="text-black w-[20px] h-[20px] font-extrabold" />
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
