import { ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import Button from "../../forms/Button";

export default function ModalGabungUjianSukses(){
    return(
        <>
            {/* MODAL CARI UJIAN Sukses */}
            <input type="checkbox" id="gabung-ujian-sukses" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="gabung-ujian-sukses" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Gabung Ujian</h3>
                        
                        <div className="w-[326px] rounded-[10px] bg-[#FBFCFC] mx-auto mt-[30px]">
                        {/* IMAGE */}
                        <img className="h-[140.5px] w-full rounded-t-[10px]" src="https://placeimg.com/192/192/people"/>
                        <div className="mx-[30px] flex justify-between mt-[15.5px]">
                            <h1 className="font-['Open Sans'] text-2xl font-semibold">fas789sd</h1>
                            <h1 className="font-['Roboto'] text-xs self-center">Rabu, 30 September</h1>
                        </div>
                        <div className="mx-[30px] mt-5 pb-[24px] flex justify-between">
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
                                <div className="rounded-md font-['Open Sans'] font-semibold text-sm text-center py-[10px] px-5 bg-red-400">
                                    <p>20</p>
                                    <p>Soal</p>
                                </div>
                                <Button className="mt-5">
                                    <p className="my-auto text-xs">Gabung</p>
                                    <ChevronRightIcon className="w-[15px] h-[15px] ml-[10px]"/>
                                </Button>
                            </div>
                        </div>
                    </div>

                        <div className="modal-action">
                        <label htmlFor="gabung-ujian-sukses" className="btn">Kembali</label>
                    </div>
                </div>
            </div>
        </>
    );
}