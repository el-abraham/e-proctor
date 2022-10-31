import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/Button";
import Header1 from "../components/Header1";
import Input from "../components/Input";
import Sidebar from "../components/Sidebar";

export default function TambahUjian(){
    return(
        <div className="bg-[#EFF0F3] flex text-black">
            {/* SIDEBAR */}
            <Sidebar/>

            {/* BUTTON BUAT UJIAN, CARI UJIAN(?), ICON NOTIFIKASI, DAN SETTINGS */}
            <div className='mr-[24px] w-full ml-6 pl-[240px]'>
                <Header1/>

                <Breadcrumbs/>

                <h1 className="font-['Poppins'] font-semibold text-xl mb-[30px]">Tambah Ujian Baru</h1>

                <div className="flex">
                    {/* MENAMBAHKAN THUMBNAIL */}
                    <div className="bg-[#FBFCFC] w-[246px] h-[246px] rounded-[10px] border-dashed border-2 border-slate-300 flex mr-[50px]">
                        <div className="flex flex-col m-auto">
                            <ArrowUpTrayIcon className="w-[50px] h-[50px] self-center"/>
                            <p className="leading-[200%] mt-[20px] font-['Roboto'] text-sm w-[178px] text-center self-center">Unggah thumbnail untuk ujian anda</p>
                        </div>
                    </div>

                    <div className="block">
                        {/* NAMA UJIAN */}
                        <Input/>

                        {/* DESKRIPSI UJIAN */}
                        <div className="form-control w-[610px] mt-[20px]">
                            <label className="label mb-1">
                                <span className="label-text font-semibold text-sm font-['Open Sans']">DESKRIPSI UJIAN</span>
                            </label> 
                            <textarea className="textarea textarea-bordered h-24" placeholder="Masukkan deskripsi ujian ...."></textarea>
                        </div>

                        <div className="flex justify-between">
                            {/* GRADE */}
                            <div className="dropdown dropdown-end mt-[20px]">
                                <p className="font-semibold text-sm font-['Open Sans'] ml-1 mb-1">GRADE</p>
                                <label tabIndex={0} className="btn m-1">Unlimited</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>

                            {/* ACAK SOAL */}
                            <div className="dropdown dropdown-end mt-[20px]">
                                <p className="font-semibold text-sm font-['Open Sans'] ml-1 mb-1">ACAK SOAL</p>
                                <label tabIndex={0} className="btn m-1">Ya</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>

                            {/* DURASI PENGERJAAN */}
                            <div className="dropdown dropdown-end mt-[20px]">
                                <p className="font-semibold text-sm font-['Open Sans'] ml-1 mb-1">DURASI PENGERJAAN</p>
                                <label tabIndex={0} className="btn m-1">30 Menit</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-[30px] justify-end flex mb-[30px]">
                            <Button className="mr-[30px]">
                                <p className='text-xs'>Batalkan</p>
                            </Button>

                            <Link to={"/tampilujian"}>
                                <Button>
                                    <p className='text-xs'>Simpan Ujian</p>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}