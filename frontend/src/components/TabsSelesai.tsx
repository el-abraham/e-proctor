import {
  CalendarDaysIcon,
  ChevronRightIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";

export default function TabsSelesai() {
  return (
    <div className="flex gap-[19px] py-4">
      {/* gambar 1 */}
      <div className="w-[306px] h-[300px] rounded-[10px] bg-[#FBFCFC]">
        <img
          className="h-[140.5px] w-full rounded-t-[10px]"
          src="https://th.bing.com/th/id/OIP.23o4iI3R8sAJaHxN78SxKgHaFj?w=265&h=197&c=7&r=0&o=5&pid=1.7"
        />
        <div className="flex">
          <p className="font-['Poppins'] font-semibold text-[14px] mt-[15.5px] ml-[30px]">
            Ujian Linguistik
          </p>
          <div className="w-[48px] flex absolute rounded-[10px] bg-[#D9D9D9] h-[44px] items-center ml-[230px] mt-[13.5px]">
            <p className="font-['Open Sans'] w-[23px] h-[24px] items-center font-semibold text-[12px] ml-[12px] mb-3 text-center">
              20 Soal
            </p>
          </div>
        </div>
        <div className="avatar flex">
          <div className="w-[25px] ml-[25px] mt-[10px] rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
          <p className="flex text-[14px] items-center mt-2 mx-2">User Name</p>
        </div>
        <div className="flex items-center">
          <ClockIcon className="ml-[25px] mt-5 w-[22px] h-[22px] text-black" />
          <p className="text-[12px] mt-5 ml-[15px]">10:45 - 12:45</p>
          <CalendarDaysIcon className="absolute ml-[25px] mt-[80px] w-[22px] h-[22px] text-black" />
          <p className="absolute text-[12px] mt-[80px] ml-[70px]">
            Rabu, 30 September
          </p>
          <div>
            <Button className="absolute items-center text-[12px] text-black bg-[#FBFCFC] border-[2px] border-gray-400 w-[88px] h-[35px] gap-x-2 pl-2 rounded-[10px] ml-[65px] mt-auto">
              Summary
              <ChevronRightIcon className="w-[12px] h-[12px]" />
            </Button>
          </div>
        </div>
      </div>
      {/* gambar 2 */}
      <div className="w-[306px] h-[300px] rounded-[10px] bg-[#FBFCFC]">
        <img
          className="h-[140.5px] w-full rounded-t-[10px]"
          src="https://th.bing.com/th/id/OIP.23o4iI3R8sAJaHxN78SxKgHaFj?w=265&h=197&c=7&r=0&o=5&pid=1.7"
        />
        <div className="flex">
          <p className="font-['Poppins'] font-semibold text-[14px] mt-[15.5px] ml-[30px]">
            Ujian Linguistik
          </p>
          <div className="w-[48px] flex absolute rounded-[10px] bg-[#D9D9D9] h-[44px] items-center ml-[230px] mt-[13.5px]">
            <p className="font-['Open Sans'] w-[23px] h-[24px] items-center font-semibold text-[12px] ml-[12px] mb-3 text-center">
              20 Soal
            </p>
          </div>
        </div>
        <div className="avatar flex">
          <div className="w-[25px] ml-[25px] mt-[10px] rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
          <p className="flex text-[14px] items-center mt-2 mx-2">User Name</p>
        </div>
        <div className="flex items-center">
          <ClockIcon className="ml-[25px] mt-5 w-[22px] h-[22px] text-black" />
          <p className="text-[12px] mt-5 ml-[15px]">10:45 - 12:45</p>
          <CalendarDaysIcon className="absolute ml-[25px] mt-[80px] w-[22px] h-[22px] text-black" />
          <p className="absolute text-[12px] mt-[80px] ml-[70px]">
            Rabu, 30 September
          </p>
          <div>
            <Button className="absolute items-center text-[12px] text-black bg-[#FBFCFC] border-[2px] border-gray-400 w-[88px] h-[35px] gap-x-2 pl-2 rounded-[10px] ml-[65px] mt-auto">
              Summary
              <ChevronRightIcon className="w-[12px] h-[12px]" />
            </Button>
          </div>
        </div>
      </div>
      {/* gambar 3 */}
      <div className="w-[306px] h-[300px] rounded-[10px] bg-[#FBFCFC]">
        <img
          className="h-[140.5px] w-full rounded-t-[10px]"
          src="https://th.bing.com/th/id/OIP.23o4iI3R8sAJaHxN78SxKgHaFj?w=265&h=197&c=7&r=0&o=5&pid=1.7"
        />
        <div className="flex">
          <p className="font-['Poppins'] font-semibold text-[14px] mt-[15.5px] ml-[30px]">
            Ujian Linguistik
          </p>
          <div className="w-[48px] flex absolute rounded-[10px] bg-[#D9D9D9] h-[44px] items-center ml-[230px] mt-[13.5px]">
            <p className="font-['Open Sans'] w-[23px] h-[24px] items-center font-semibold text-[12px] ml-[12px] mb-3 text-center">
              20 Soal
            </p>
          </div>
        </div>
        <div className="avatar flex">
          <div className="w-[25px] ml-[25px] mt-[10px] rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
          <p className="flex text-[14px] items-center mt-2 mx-2">User Name</p>
        </div>
        <div className="flex items-center">
          <ClockIcon className="ml-[25px] mt-5 w-[22px] h-[22px] text-black" />
          <p className="text-[12px] mt-5 ml-[15px]">10:45 - 12:45</p>
          <CalendarDaysIcon className="absolute ml-[25px] mt-[80px] w-[22px] h-[22px] text-black" />
          <p className="absolute text-[12px] mt-[80px] ml-[70px]">
            Rabu, 30 September
          </p>
          <div>
            <Button className="absolute items-center text-[12px] text-black bg-[#FBFCFC] border-[2px] border-gray-400 w-[88px] h-[35px] gap-x-2 pl-2 rounded-[10px] ml-[65px] mt-auto">
              Summary
              <ChevronRightIcon className="w-[12px] h-[12px]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
