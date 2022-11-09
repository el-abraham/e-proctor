import {
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  MicrophoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import MultipleChoice from "../components/MultipleChoice";
import Soal from "../components/Soal";

export default function InSession() {
  return (
    <div className="flex bg-[#EFF0F3] py-[60px] w-auto h-[770px]">
      <div>
        <h1 className="text-center mt-auto h-[50px] w-[200px] ml-[60px] fonf-['Poppins'] font-bold text-[25px] text-black">
          Ujian Linguistik
        </h1>
        <div className="bg-white mt-6 shadow-md w-[850px] h-[55px] ml-[60px] rounded-[10px]">
          <p className="flex items-center text-black font-semibold ml-4 py-[15px]">
            <ExclamationTriangleIcon className="w-[24px] h-[24px] mr-6" />
            Ujian ini Dimonitor Oleh Pengawas. Mohon Kerjakan Ujian ini dengan
            baik.
          </p>
        </div>
        {/* borders soal */}
        <MultipleChoice />
      </div>
      {/* Kembali atau Lanjut */}
      <div>
        <div className="flex gap-[19px] ml-[90px]">
          {/* Jam */}
          <div className="w-[50px] h-[70px] shadow-md bg-white rounded-[10px]">
            <div className="text-center ml-2 w-[32px] h-[61px] text-[30px]">
              0<p className="text-[12px]">Jam</p>
            </div>
          </div>
          {/* Menit */}
          <div className="w-[50px] ml-[52px] h-[70px] shadow-md bg-white rounded-[10px]">
            <div className="text-center ml-2 w-[32px] h-[61px] text-[30px]">
              0<p className="text-[12px]">Menit</p>
            </div>
          </div>
          {/* Detik */}
          <div className="w-[50px] ml-[53px] h-[70px] shadow-md bg-white rounded-[10px]">
            <div className="text-center ml-2 w-[32px] h-[61px] text-[30px]">
              0<p className="text-[12px]">Detik</p>
            </div>
          </div>
        </div>
        <div className="text-black ml-[80px] mt-8 w-[315px] h-[175px] border-[1px] border-black rounded-[5px]">
          <button className="flex ml-[125px]">
            <VideoCameraIcon className="w-[18px] h-[18px] mt-[140px]" />
            <MicrophoneIcon className="w-[18px] h-[18px] mt-[140px] ml-6" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4 ml-[110px]">
          <Soal />
          <Soal />
          <Soal />
          <Soal />
          <Soal />
          <Soal />
        </div>
      </div>
    </div>
  );
}
