import { CalendarDaysIcon, ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import Button from "../../../components/forms/Button";
import Notifications from "../../../components/icons/Notifications";
import Settings from "../../../components/icons/Settings";
import SidebarSiswa, { NavbarSiswa } from "../../../components/sidebar/SidebarSiswa";
import TabsSiswa from "../../../components/tabs/siswa/TabsSiswa";

export default function UjianAndaSelesaiSiswa(){
    return(
        <div className="bg-[#EFF0F3] flex text-black">
            <SidebarSiswa active={NavbarSiswa.UJIANANDA} />

            <div className='mr-[24px] w-full ml-6 pl-[240px] pb-[30px] h-screen'>
                <div className="flex gap-[30px] mt-6 justify-end">
                    {/* CARI UJIAN INPUT */}
                    <div className="form-control self-center">
                        <label className="input-group h-[40px]">
                            <input type="text" placeholder="Cari Ujian ...." className="input input-bordered h-[40px] placeholder:text-sm" />
                            <label htmlFor="cari-ujian-gagal" className="h-[40px] bg-red-400 flex ">
                                <p className="text-center m-auto px-4 font-medium text-xs cursor-pointer">CARI</p>
                            </label>
                        </label>
                    </div>
                    <Notifications/>
                    <Settings/>
                </div>
                <TabsSiswa/>
                
                <div className="mt-[30px]">
                    <div className="flex mb-[17px]">
                        <h1 className="self-center font-['Poppins'] font-semibold text-base mr-3">Ujian Diselesaikan</h1>
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

                                    {/* TANGGAL */}
                                    <div className="flex items-center mt-[10px]">
                                        <CalendarDaysIcon className="w-[30px] h-[30px] text-black" />
                                        <p className="text-[12px] ml-[15px]">30/09/2022</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="rounded-md font-['Open Sans'] font-semibold text-sm text-center py-[10px] px-5 bg-red-400">
                                        <p>20</p>
                                        <p>Soal</p>
                                    </div>
                                    <Button className="mt-10">
                                        <p className="my-auto text-xs">Mulai</p>
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

                                    {/* TANGGAL */}
                                    <div className="flex items-center mt-[10px]">
                                        <CalendarDaysIcon className="w-[30px] h-[30px] text-black" />
                                        <p className="text-[12px] ml-[15px]">30/09/2022</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="rounded-md font-['Open Sans'] font-semibold text-sm text-center py-[10px] px-5 bg-red-400">
                                        <p>20</p>
                                        <p>Soal</p>
                                    </div>
                                    <Button className="mt-10">
                                        <p className="my-auto text-xs">Mulai</p>
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

                                    {/* TANGGAL */}
                                    <div className="flex items-center mt-[10px]">
                                        <CalendarDaysIcon className="w-[30px] h-[30px] text-black" />
                                        <p className="text-[12px] ml-[15px]">30/09/2022</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="rounded-md font-['Open Sans'] font-semibold text-sm text-center py-[10px] px-5 bg-red-400">
                                        <p>20</p>
                                        <p>Soal</p>
                                    </div>
                                    <Button className="mt-10">
                                        <p className="my-auto text-xs">Mulai</p>
                                        <ChevronRightIcon className="w-[15px] h-[15px] ml-[10px]"/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}