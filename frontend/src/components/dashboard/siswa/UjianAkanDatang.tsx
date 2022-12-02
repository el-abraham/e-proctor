import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ujianListState } from "../../../_state/ujian.state";

export default function UjianAkanDatangSiswa() {
  const navigate = useNavigate();
  const ujian = useRecoilValue(ujianListState);
  return (
    <div className="text-black font-['Poppins'] self-start w-3/4 mt-6 pb-8 bg-[#FBFCFC] ml-4 rounded-[10px]">
      {/* BAGIAN HEADER */}
      <div className="flex gap-[15px] ml-[20px] mr-[20px] pt-[20px] pb-[9px] border-b border-slate-300">
        <h1 className="font-semibold text-[14px] self-center ml-[20px]">
          Ujian Akan Datang
        </h1>
        <div className="pt-2 pb-2 pr-3 pl-3 bg-[#FBFCFC] rounded-[10px] flex border border-slate-300">
          <p className="m-auto text-[14px] font-semibold">{ujian.length}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="overflow-x-auto ml-[40px] mr-[40px] mt-[20px] font-['Poppins']">
        <table className="table table-compact table-zebra w-full ">
          <thead className="text-sm">
            <tr>
              <th>Nama Ujian</th>
              <th>Tanggal</th>
              <th>Jam</th>
              <th>Pengawas</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {ujian.map((value, index) => {
              return (
                <tr
                  className="cursor-pointer"
                  key={index}
                  onClick={() => navigate(`ujian/detail?p=${value.id}`)}
                >
                  <td>{value.quiz_name}</td>
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
