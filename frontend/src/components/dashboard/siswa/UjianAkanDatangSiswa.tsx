import { useEffect, useState } from "react";
import Quiz from "../../../models/quiz";
import { getQuiz } from "../../../services/api/quiz.service";

export default function UjianAkanDatangSiswa() {
  const [akanDatang, setAkanDatang] = useState<Quiz[]>([]);

  useEffect(() => {
    const testing = async () => {
      const res = await getQuiz();
      console.log(res);
      setAkanDatang(res ?? []);
    };

    testing();
  }, []);

  return (
    <div className="text-black font-['Poppins'] overflow-y-scroll max-h-[384px] mt-[24px] pb-[30px] w-[620px] bg-[#FBFCFC] ml-4 rounded-[10px]">
      {/* BAGIAN HEADER */}
      <div className="flex gap-[15px] ml-[20px] mr-[20px] pt-[20px] pb-[9px] border-b border-slate-300">
        <h1 className="font-semibold text-[14px] self-center ml-[20px]">
          Ujian Akan Datang
        </h1>
        <div className="pt-2 pb-2 pr-3 pl-3 bg-[#FBFCFC] rounded-[10px] flex border border-slate-300">
          <p className="m-auto text-[14px] font-semibold">
            {akanDatang.length}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="overflow-x-auto ml-[40px] mr-[40px] mt-[20px] font-['Poppins']">
        <table className="table table-zebra w-full ">
          <thead className="text-sm">
            <tr>
              <th>Nama Ujian</th>
              <th>Tanggal</th>
              <th>Jam</th>
              <th>Pengawas</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {akanDatang.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.title}</td>
                  <td>13 Sept</td>
                  <td>10:45 - 12:45</td>
                  <td>
                    <div className="avatar">
                      <div className="w-[50px] h-[50px] rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
