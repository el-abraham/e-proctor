import { ClockIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { listQuizState } from "../../../_state/quiz.state";

export default function UjianHariIniGuru() {
  const navigate = useNavigate();
  const listQuiz = useRecoilValue(listQuizState);
  return (
    <div className="text-black font-['Poppins'] self-start mt-[24px] pb-3 w-2/5 bg-[#FBFCFC] rounded-[10px]">
      {/* BAGIAN HEADER */}
      <div className="flex gap-[15px] ml-[20px] mr-[20px] pt-[20px] pb-[9px] border-b border-slate-300">
        <h1 className="font-semibold text-[14px] self-center ml-[20px]">
          Ujian Anda Hari Ini
        </h1>
        <div className="pt-2 pb-2 pr-3 pl-3 bg-[#FBFCFC] rounded-[10px] flex border border-slate-300">
          <p className="m-auto text-[14px] font-semibold">{listQuiz?.length}</p>
        </div>
      </div>

      {/* CONTENT */}
      {listQuiz?.map((value, index) => {
        return (
          <div
            className="cursor-pointer"
            key={index}
            onClick={() => navigate(`ujian/detail?q=${value.id}`)}
          >
            <div className="mt-5 flex mb-4">
              <div className="avatar ml-10">
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
                    {value.duration} Menit
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
          </div>
        );
      })}
    </div>
  );
}
