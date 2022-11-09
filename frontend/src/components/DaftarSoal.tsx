import { ChevronRightIcon } from "@heroicons/react/24/outline";
import AfterAnswer from "./AfterAnswer";
import Button from "./Button";
import Soal from "./Soal";

export default function DaftarSoal() {
  return (
    <div>
      <div className="bg-white border shadow-md w-[318px] h-[400px] ml-[80px] mt-4 rounded-[10px]">
        <h1 className="font-['Open Sans'] font-semibold text-[17px] ml-6 mt-2 border-b border-black mr-5">
          Daftar Soal
        </h1>
        <div className="grid grid-cols-5 mt-2 gap-[0.5px]">
          <Soal text="1"></Soal>
          <Soal text="2">.</Soal>
          <Soal text="3">.</Soal>
          <Soal text="4">.</Soal>
          <Soal text="5">.</Soal>
          <Soal text="6">.</Soal>
          <Soal text="7">.</Soal>
          <Soal text="8">.</Soal>
          <Soal text="9">.</Soal>
          <Soal text="10">.</Soal>
          <Soal text="11">.</Soal>
          <Soal text="12">.</Soal>
          <Soal text="13">.</Soal>
          <Soal text="14">.</Soal>
          <Soal text="15">.</Soal>
          <Soal text="16">.</Soal>
          <Soal text="17">.</Soal>
          <Soal text="18">.</Soal>
          <Soal text="19">.</Soal>
          <Soal text="20">.</Soal>
        </div>
        <div className="flex">
          <Button className="font-['Open Sans'] font-semibold items-center text-[15px] text-black bg-[#FCC666] border-[2px] w-[68px] h-[37px] rounded-[10PX] ml-4">
            Finish
          </Button>
          <Button className="font-['Open Sans'] font-extrabold items-center text-[12px] text-black bg-[#FBFCFC] border-[2px] border-gray-400 w-[35px] h-[35px] rounded-[10PX] mt-4 ml-[170px]">
            <ChevronRightIcon className="w-[18px] h-[18px]" />
          </Button>
        </div>
      </div>
    </div>
  );
}
