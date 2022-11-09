import { ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function TabsUjianAnda() {
  return (
    <div className="flex gap-[19px] py-4">
      {/* gambar 1 */}

      <div className="w-[306px] h-[265px] rounded-[10px] bg-[#FBFCFC]">
        <img
          className="h-[140.5px] w-full rounded-t-[10px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_-Kt_GwVL3p5Tz8fGGZ1r_W4yvxsmF2T2w&usqp=CAU"
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
          <p className="flex text-[14px] items-center mx-2">User Name</p>
        </div>
        <div className="flex items-center mt-[10px]">
          <ClockIcon className="ml-[25px] w-[22px] h-[22px] text-black" />
          <p className="text-[12px] ml-[15px]">10:45 - 12:45</p>
          <div className="absolute ml-[220px]">
            <Link to={"insession"}>
              <Button className="font-['Open Sans'] font-semibold items-center text-[12px] text-black bg-[#FBFCFC] border-[1px] border-opacity-25 w-[68px] h-[30px] gap-x-2 pl-2 rounded-[10PX] mt-4">
                Mulai
                <ChevronRightIcon className="w-[12px] h-[12px]" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* gambar 2 */}

      <div className="w-[306px] h-[265px] rounded-[10px] bg-[#FBFCFC]">
        <img
          className="h-[140.5px] w-full rounded-t-[10px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_-Kt_GwVL3p5Tz8fGGZ1r_W4yvxsmF2T2w&usqp=CAU"
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
          <p className="flex text-[14px] items-center mx-2">User Name</p>
        </div>
        <div className="flex items-center mt-[10px]">
          <ClockIcon className="ml-[25px] w-[22px] h-[22px] text-black" />
          <p className="text-[12px] ml-[15px]">10:45 - 12:45</p>
          <Link to={"test-soal"}>
            <Button className="absolute font-['Open Sans'] font-semibold items-center text-[12px] text-black bg-[#FBFCFC] border-[1px] border-opacity-25 w-[68px] h-[30px] gap-x-2 pl-2 rounded-[10PX] ml-[85px] -mt-[10px]">
              Mulai
              <ChevronRightIcon className="w-[12px] h-[12px]" />
            </Button>
          </Link>
        </div>
      </div>

      {/* gambar 3 */}

      <div className="w-[306px] h-[265px] rounded-[10px] bg-[#FBFCFC]">
        <img
          className="h-[140.5px] w-full rounded-t-[10px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_-Kt_GwVL3p5Tz8fGGZ1r_W4yvxsmF2T2w&usqp=CAU"
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
          <p className="flex text-[14px] items-center mx-2">User Name</p>
        </div>
        <div className="flex items-center mt-[10px]">
          <ClockIcon className="ml-[25px] w-[22px] h-[22px] text-black" />
          <p className="text-[12px] ml-[15px]">10:45 - 12:45</p>
          <Button className="absolute font-['Open Sans'] font-semibold items-center text-[12px] text-black bg-[#FBFCFC] border-[1px] border-opacity-25 w-[68px] h-[30px] gap-x-2 pl-2 rounded-[10PX] ml-[220px]">
            Mulai
            <ChevronRightIcon className="w-[12px] h-[12px]" />
          </Button>
        </div>
      </div>

      {/* Tabs */}

      <div className="flex absolute mt-[330px] py-4">
        <p className="font-[Poppins] font-semibold text-[16px]">Akan Datang</p>
        <div className="bg-[#D9D9D9] w-[32px] h-[32px] text-center ml-3 rounded-[50px]">
          <p className="mt-1 font-['Poppins'] font-medium">12</p>
        </div>
      </div>
      <div className="absolute ml-auto mt-[290px] py-4">
        <div className="w-[1090px] h-[475px] ml-auto mb-4 mt-[77px]">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Nama Ujian</th>
                  <th>Tanggal Dimulai</th>
                  <th>Soal</th>
                  <th>Jam Dimulai</th>
                  <th>Pengawas/ Guru</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <th>
                    <img
                      className="w-[86px] h-[86px] rounded-[10px]"
                      src="https://th.bing.com/th/id/OIP.uFBQWmZ6KetgsxjVcpEyUgHaI9?w=185&h=224&c=7&r=0&o=5&pid=1.7"
                    />
                  </th>
                  <td>Ujian Geografi</td>
                  <td>10 Oktober 2022</td>
                  <td>20 Soal</td>
                  <td>10:45 - 12:45</td>
                  <td>
                    <div className="avatar">
                      <div className="w-[50px] h-[50px] ml-auto mt-[10px] rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                      <p className="flex mt-[10px] items-center mx-2">
                        User Name
                      </p>
                    </div>
                  </td>
                </tr>
                {/* <!-- row 2 --> */}
                <tr className="active">
                  <th>
                    <img
                      className="w-[86px] h-[86px] rounded-[10px]"
                      src="https://th.bing.com/th/id/OIP.uFBQWmZ6KetgsxjVcpEyUgHaI9?w=185&h=224&c=7&r=0&o=5&pid=1.7"
                    />
                  </th>
                  <td>Ujian Geografi</td>
                  <td>10 Oktober 2022</td>
                  <td>20 Soal</td>
                  <td>10:45 - 12:45</td>
                  <td>
                    <div className="avatar">
                      <div className="w-[50px] h-[50px] ml-auto mt-[10px] rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                      <p className="flex mt-[10px] items-center mx-2">
                        User Name
                      </p>
                    </div>
                  </td>
                </tr>
                {/* <!-- row 3 --> */}
                <tr>
                  <th>
                    <img
                      className="w-[86px] h-[86px] rounded-[10px]"
                      src="https://th.bing.com/th/id/OIP.uFBQWmZ6KetgsxjVcpEyUgHaI9?w=185&h=224&c=7&r=0&o=5&pid=1.7"
                    />
                  </th>
                  <td>Ujian Geografi</td>
                  <td>10 Oktober 2022</td>
                  <td>20 Soal</td>
                  <td>10:45 - 12:45</td>
                  <td>
                    <div className="avatar">
                      <div className="w-[50px] h-[50px] ml-auto mt-[10px] rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                      <p className="flex mt-[10px] items-center mx-2">
                        User Name
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="active">
                  <th>
                    <img
                      className="w-[86px] h-[86px] rounded-[10px]"
                      src="https://th.bing.com/th/id/OIP.uFBQWmZ6KetgsxjVcpEyUgHaI9?w=185&h=224&c=7&r=0&o=5&pid=1.7"
                    />
                  </th>
                  <td>Ujian Geografi</td>
                  <td>10 Oktober 2022</td>
                  <td>20 Soal</td>
                  <td>10:45 - 12:45</td>
                  <td>
                    <div className="avatar">
                      <div className="w-[50px] h-[50px] ml-auto mt-[10px] rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                      <p className="flex mt-[10px] items-center mx-2">
                        User Name
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
