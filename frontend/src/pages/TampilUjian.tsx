import { ExclamationTriangleIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header1 from "../components/Header1";
import Sidebar from "../components/Sidebar";

export default function TampilUjian(){
    return(
        <div className="bg-[#EFF0F3] flex text-black">
            {/* SIDEBAR */}
            <Sidebar/>

            {/* BUTTON BUAT UJIAN, CARI UJIAN(?), ICON NOTIFIKASI, DAN SETTINGS */}
            <div className='mr-[24px] w-full ml-6 pl-[240px] flex flex-col'>
                <Header1/>
                <div className="text-center mt-[60px]">
                    <img className="w-[136px] h-[131px] rounded-[10px] mx-auto mb-5" src="https://placeimg.com/192/192/people"/>
                    <h1 className="font-['Open Sans'] font-bold text-[25px] mb-[10px]">Ulangan Harian 1</h1>
                    <p className="font-['Roboto'] text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, harum.</p>
                    <div className="mt-[30px] mb-[30px]">
                        <PencilSquareIcon className="w-[50px] h-[50px] mx-auto mb-5" />
                        <p>Attempts Allowed: 1</p>
                    </div>
                </div>
                <div className="inline-block rounded-[5px] p-5 bg-orange-300 mx-auto">
                    <div className="flex">
                        <ExclamationTriangleIcon className="w-[35px] h-[35px] mr-[15px] "/>
                        <p className="self-center font-['Roboto'] text-sm">Belum ada soal yang ditambahkan</p>
                    </div>
                </div>

                <div className="inline-block rounded-[5px] mx-auto mt-[25px]">
                    <div className="flex flex-col">
                        <Link to={"/ujiananda-questions"}>
                            <Button className="mb-[15px]">
                                <p className='text-xs'>Masukkan Pertanyaan</p>
                            </Button>
                        </Link>

                        <Link to={"/ujiananda"}>
                            <Button className="mb-[30px]">
                                <p className='text-xs'>Kembali ke Ujian Anda</p>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}