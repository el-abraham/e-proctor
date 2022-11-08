import { ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import Header1 from "../../../components/dashboard/Header1";
import Button from "../../../components/forms/Button";
import SidebarSiswa, { NavbarSiswa } from "../../../components/sidebar/SidebarSiswa";
import TabsSiswa from "../../../components/tabs/siswa/TabsSiswa";

export default function UjianAndaUjianSiswa() {
  return (
    <div className="bg-[#EFF0F3] flex text-black">
        <SidebarSiswa active={NavbarSiswa.UJIANANDA} />

        <div className='mr-[24px] w-full ml-6 pl-[240px] pb-[30px]'>
            <Header1/>
            <TabsSiswa/>

            <div className="mt-[30px]">
                <div className="flex mb-[17px]">
                    <h1 className="self-center font-['Poppins'] font-semibold text-base mr-3">Hari ini</h1>
                    <div className="flex rounded-full w-8 h-8 bg-[#FBFCFC]">
                        <p className="m-auto font-['Poppins'] font-semibold text-sm">2</p>
                    </div>
                </div>
                {/* MULAI GRID */}
                <div className="grid grid-cols-3 gap-x-4">
                    <div className="w-[326px] rounded-[10px] bg-[#FBFCFC]">
                        {/* IMAGE */}
                        <img className="h-[140.5px] w-full rounded-t-[10px]" src="https://placeimg.com/192/192/people"/>
                        <div className="mx-[30px] mt-[15.5px] pb-[24px] flex justify-between">
                            <div className="flex flex-col">
                                {/* NAMA UJIAN */}
                                <div className="flex ">
                                    <p className="font-['Poppins'] font-semibold text-sm ">
                                        Ujian Linguistik
                                    </p>
                                </div>

                                {/* AVATAR */}
                                <div className="avatar flex  mt-[10px]">
                                    <div className="w-[30px] h-[30px] rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p className="flex text-sm ml-[15px] self-center font-['Open Sans']">Alena Workman</p>
                                </div>

                                {/* TIME */}
                                <div className="flex items-center mt-[30px]">
                                    <ClockIcon className="w-[30px] h-[30px] text-black" />
                                    <p className="text-[12px] ml-[15px]">10:45 - 12:45</p>
                                    
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="rounded-md font-['Open Sans'] font-semibold text-[16px] text-center py-[10px] px-5 bg-red-400">
                                    <p>20</p>
                                    <p>Soal</p>
                                </div>
                                <Button className="mt-4">
                                    <p className="">Mulai</p>
                                    <ChevronRightIcon className="w-[15px] h-[15px] ml-[10px]"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[326px] rounded-[10px] bg-[#FBFCFC]">
                        {/* IMAGE */}
                        <img className="h-[140.5px] w-full rounded-t-[10px]" src="https://placeimg.com/192/192/people"/>
                        <div className="mx-[30px] mt-[15.5px] pb-[24px] flex justify-between">
                            <div className="flex flex-col">
                                {/* NAMA UJIAN */}
                                <div className="flex ">
                                    <p className="font-['Poppins'] font-semibold text-sm ">
                                        Ujian Linguistik
                                    </p>
                                </div>

                                {/* AVATAR */}
                                <div className="avatar flex  mt-[10px]">
                                    <div className="w-[30px] h-[30px] rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p className="flex text-sm ml-[15px] self-center font-['Open Sans']">Alena Workman</p>
                                </div>

                                {/* TIME */}
                                <div className="flex items-center mt-[30px]">
                                    <ClockIcon className="w-[30px] h-[30px] text-black" />
                                    <p className="text-[12px] ml-[15px]">10:45 - 12:45</p>
                                    
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="rounded-md font-['Open Sans'] font-semibold text-[16px] text-center py-[10px] px-5 bg-red-400">
                                    <p>20</p>
                                    <p>Soal</p>
                                </div>
                                <Button className="mt-4">
                                    <p className="">Mulai</p>
                                    <ChevronRightIcon className="w-[15px] h-[15px] ml-[10px]"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[326px] rounded-[10px] bg-[#FBFCFC]">
                        {/* IMAGE */}
                        <img className="h-[140.5px] w-full rounded-t-[10px]" src="https://placeimg.com/192/192/people"/>
                        <div className="mx-[30px] mt-[15.5px] pb-[24px] flex justify-between">
                            <div className="flex flex-col">
                                {/* NAMA UJIAN */}
                                <div className="flex ">
                                    <p className="font-['Poppins'] font-semibold text-sm ">
                                        Ujian Linguistik
                                    </p>
                                </div>

                                {/* AVATAR */}
                                <div className="avatar flex  mt-[10px]">
                                    <div className="w-[30px] h-[30px] rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                    <p className="flex text-sm ml-[15px] self-center font-['Open Sans']">Alena Workman</p>
                                </div>

                                {/* TIME */}
                                <div className="flex items-center mt-[30px]">
                                    <ClockIcon className="w-[30px] h-[30px] text-black" />
                                    <p className="text-[12px] ml-[15px]">10:45 - 12:45</p>
                                    
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="rounded-md font-['Open Sans'] font-semibold text-[16px] text-center py-[10px] px-5 bg-red-400">
                                    <p>20</p>
                                    <p>Soal</p>
                                </div>
                                <Button className="mt-4">
                                    <p className="">Mulai</p>
                                    <ChevronRightIcon className="w-[15px] h-[15px] ml-[10px]"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mb-[17px] mt-[30px]">
                    <h1 className="self-center font-['Poppins'] font-semibold text-base mr-3">Akan Datang</h1>
                    <div className="flex rounded-full w-8 h-8 bg-[#FBFCFC]">
                        <p className="m-auto font-['Poppins'] font-semibold text-sm">2</p>
                    </div>
                </div>

                <div className="overflow-x-auto font-['Open Sans'] mt-[15px]">
                    <table className="table table-zebra w-full">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Nama Ujian</th>
                            <th>Tanggal Ujian</th>
                            <th>Jam Dimulai</th>
                            <th>Pengawas/Guru</th>
                        </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td className="flex">
                                    <div className="avatar">
                                        <div className="w-[86px] h-[86px] rounded">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <div className="ml-[20px] self-center">
                                        <h1 className="font-semibold text-sm mb-[13px]">Ujian Geografi</h1>
                                        <div className="flex">
                                            <p className="font-['Roboto'] self-center text-xs">20 Soal</p>
                                        </div>
                                    </div>
                                </td>
                                <td>13 September 2022</td>
                                <td>10:45 - 12:45</td>
                                <td>
                                    {/* AVATAR */}
                                    <div className="avatar flex ">
                                        <div className="w-[50px] h-[50px] rounded-full">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                        <p className="flex text-sm ml-[15px] self-center font-['Open Sans']">Alena Workman</p>
                                    </div>
                                </td>
                            </tr>
              
                            <tr>
                                <th>1</th>
                                <td className="flex">
                                    <div className="avatar">
                                        <div className="w-[86px] h-[86px] rounded">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <div className="ml-[20px] self-center">
                                        <h1 className="font-semibold text-sm mb-[13px]">Ujian Geografi</h1>
                                        <div className="flex">
                                            <p className="font-['Roboto'] self-center text-xs">20 Soal</p>
                                        </div>
                                    </div>
                                </td>
                                <td>13 September 2022</td>
                                <td>10:45 - 12:45</td>
                                <td>
                                    {/* AVATAR */}
                                    <div className="avatar flex ">
                                        <div className="w-[50px] h-[50px] rounded-full">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                        <p className="flex text-sm ml-[15px] self-center font-['Open Sans']">Alena Workman</p>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th>1</th>
                                <td className="flex">
                                    <div className="avatar">
                                        <div className="w-[86px] h-[86px] rounded">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <div className="ml-[20px] self-center">
                                        <h1 className="font-semibold text-sm mb-[13px]">Ujian Geografi</h1>
                                        <div className="flex">
                                            <p className="font-['Roboto'] self-center text-xs">20 Soal</p>
                                        </div>
                                    </div>
                                </td>
                                <td>13 September 2022</td>
                                <td>10:45 - 12:45</td>
                                <td>
                                    {/* AVATAR */}
                                    <div className="avatar flex ">
                                        <div className="w-[50px] h-[50px] rounded-full">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                        <p className="flex text-sm ml-[15px] self-center font-['Open Sans']">Alena Workman</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


    // <div className="bg-[#EFF0F3] w-auto h-[1324px] flex">
    //   <SidebarSiswa active={NavbarEnum.UJIANANDA} />
    //   <div className="ml-auto h-3 flex">
    //     <div className="font-['Open_Sans'] items-center relative pt-[55px]">
    //       <MagnifyingGlassIcon className="w-[24px] h-[24px] flex absolute mt-4 ml-2" />
    //       <Input
    //         className="border-none shadow-md pl-10 rounded-[20px] w-[286px] h-[40px] text-[16px]"
    //         placeholder="Cari Ujian ...."
    //       />
    //     </div>
    //     <div className="px-[30px]">
    //       <Button
    //         className="bg-[#FBFCFC] w-[42px] h-[42px] my-[65px] rounded-[10px] shadow-md"
    //         text={
    //           <>
    //             <BellAlertIcon className="text-black w-[24px] h-[24px] font-extrabold" />
    //           </>
    //         }
    //       />
    //       <Button
    //         className="bg-[#FBFCFC] w-[42px] h-[42px] my-[65px] rounded-[10px] mx-[30px] shadow-md"
    //         text={
    //           <>
    //             <Cog6ToothIcon className="text-black w-[24px] h-[24px] font-extrabold" />
    //           </>
    //         }
    //       />
    //     </div>
    //   </div>
    //   <div className="absolute mt-[117px] ml-[234px] ">
    //     <TabsSiswa />
    //   </div>
    // </div>
  );
}
