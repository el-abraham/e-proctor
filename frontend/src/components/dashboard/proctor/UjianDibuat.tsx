export default function UjianDibuatGuru() {
  return (
    <div className="text-black font-['Poppins'] max-h-[324px] overflow-y-scroll mt-[24px] pb-[30px] w-[620px] bg-[#FBFCFC] ml-4 rounded-[10px]">
      {/* BAGIAN HEADER */}
      <div className="flex gap-[15px] ml-[20px] mr-[20px] pt-[20px] pb-[9px] border-b border-slate-300">
        <h1 className="font-semibold text-[14px] self-center ml-[20px]">
          Ujian Anda Hari Ini
        </h1>
        <div className="pt-2 pb-2 pr-3 pl-3 bg-[#FBFCFC] rounded-[10px] flex border border-slate-300">
          <p className="m-auto text-[14px] font-semibold">2</p>
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
              <th>Session</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            <tr>
              <td>Geografi</td>
              <td>13 Sept</td>
              <td>10:45 - 12:45</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Geografi</td>
              <td>13 Sept</td>
              <td>10:45 - 12:45</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Geografi</td>
              <td>13 Sept</td>
              <td>10:45 - 12:45</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Geografi</td>
              <td>13 Sept</td>
              <td>10:45 - 12:45</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Geografi</td>
              <td>13 Sept</td>
              <td>10:45 - 12:45</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Geografi</td>
              <td>13 Sept</td>
              <td>10:45 - 12:45</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
