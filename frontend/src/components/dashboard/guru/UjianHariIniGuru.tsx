import { ClockIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Quiz from "../../../models/quiz";
import { getQuiz } from "../../../services/api/quiz.service";

export default function UjianHariIniGuru() {
  const [hariIni, setHariIni] = useState<Quiz[]>([]);

  useEffect(() => {
    const testing = async () => {
      const res = await getQuiz();
      console.log(res);
      setHariIni(res ?? []);
    };

    testing();
  }, []);

  return (
    <div className="text-black font-['Poppins'] max-h-[324px] overflow-y-scroll mt-[24px] pb-[30px] w-[380px] bg-[#FBFCFC] rounded-[10px]">
      {/* BAGIAN HEADER */}
      <div className="flex gap-[15px] ml-[20px] mr-[20px] pt-[20px] pb-[9px] border-b border-slate-300">
        <h1 className="font-semibold text-[14px] self-center ml-[20px]">
          Ujian Anda Hari Ini
        </h1>
        <div className="pt-2 pb-2 pr-3 pl-3 bg-[#FBFCFC] rounded-[10px] flex border border-slate-300">
          <p className="m-auto text-[14px] font-semibold">{hariIni.length}</p>
        </div>
      </div>
      <div>
        {hariIni.map((value) => {
          return (
            <div className="mt-[20px] flex mb-[15px]">
              <div className="avatar ml-[40px]">
                <div className="w-[134px] h-[124px] rounded">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div className="ml-[15px] self-center">
                <h1 className="font-semibold text-[14px] mb-[10px]">
                  {value.title}
                </h1>
                <div className="flex">
                  <ClockIcon className="w-[24px] h-[24px] mr-[10px]" />
                  <p className="font-['Roboto'] self-center text-sm">
                    10:45 - 12:45
                  </p>
                </div>
                <div className="flex mt-[10px]">
                  <div className="avatar">
                    <div className="w-[30px] h-[30px] rounded-full">
                      <img src="https://placeimg.com/192/192/people" />
                    </div>
                  </div>
                  <p className="self-center ml-[10px] text-sm">Alena Portman</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
