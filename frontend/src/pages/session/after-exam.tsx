import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Button from "../../components/forms/Button";

export default function AfterExam() {
  const navigate = useNavigate();
  const KembaliUjian = () => {
    navigate("/exam/session");
  };

  return (
    <div className="bg-[#EFF0F3] min-h-screen h-full text-black">
      <div className="relative flex w-full pt-6">
        {/* bg-[#EFF0F3] */}
        <div className="mx-auto">
          <img
            src="https://th.bing.com/th/id/OIP.VOMKwFZfZ3jTK6ET8t5sxQHaNK?w=185&h=329&c=7&r=0&o=5&pid=1.7"
            className="w-[115px] h-[115px] rounded-[10px]"
          />
        </div>
        <div className="absolute h-[60px] right-5">
          <div className="flex">
            <p className="font-['Poppins'] font-normal text-[14px]">
              Rabu, 30 September
            </p>
            <CalendarIcon className="ml-[12px] w-[18px] h-[18px]" />
          </div>
          <div className="flex pl-[60px] mt-3">
            <p className="font-['Poppins'] font-normal text-[14px]">
              10:45 - 12:45
            </p>
            <ClockIcon className="ml-[12px] w-[18px] h-[18px]" />
          </div>
        </div>
      </div>
      <div className="pt-[12px]">
        <h1 className="text-center font-['Poppins'] font-semibold text-[15px]">
          Nama Ujian
        </h1>
        <div className="avatar flex text-black font-['Open Sans'] font-semibold text-sm justify-center mt-[20px]">
          <div className="w-[40px] h-[40px] rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
          <p className="self-center ml-3 text-[14px]">Mary Poppins</p>
        </div>
      </div>
      <div className="text-[14px] h-full mx-auto  mt-[20px] px-[200px]">
        <table className="table table-compact table-zebra w-full text-center">
          <thead>
            <tr>
              <th>Nomor Soal</th>
              <th>Jawaban</th>
              <th>Status</th>
              <th>Opsi</th>
            </tr>
          </thead>
          <tbody className="cursor-pointer">
            <tr>
              <td>1</td>
              <td>A</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr className="bg-green-400">
              <td>2</td>
              <td>B</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr>
              <td className="bg-red-500 text-white">3</td>
              <td className="bg-red-500 text-white">C</td>
              <td className="bg-red-500 text-white">Jawaban Belum Tersimpan</td>
              <td className="bg-red-500 text-white">Ubah Jawaban</td>
            </tr>
            <tr>
              <td>4</td>
              <td>D</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr>
              <td>5</td>
              <td>E</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr>
              <td>6</td>
              <td>B</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr>
              <td>7</td>
              <td>C</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr>
              <td>8</td>
              <td>D</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr>
              <td>9</td>
              <td>E</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr>
              <td>10</td>
              <td>A</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr>
              <td>11</td>
              <td>C</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr>
              <td>12</td>
              <td>D</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr>
              <td>13</td>
              <td>E</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr>
              <td>14</td>
              <td>A</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
            <tr>
              <td>15</td>
              <td>B</td>
              <td>Jawaban Tersimpan</td>
              <td>Ubah Jawaban</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center pb-3">
        <h1 className="font-['Poppins'] text-[15px] mt-[15px]">
          Waktu tersisa: 24 menit
        </h1>
        <Button
          className="bg-base-300 border-none hover:bg-base-300 mt-[15px]"
          onClick={KembaliUjian}
        >
          Kembali ke Ujian
        </Button>
        <br />
        <Button className="border-none mt-[15px]">Finish Ujian</Button>
      </div>
    </div>
  );
}
