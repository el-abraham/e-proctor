import { CameraIcon, CheckCircleIcon, ClockIcon, ExclamationTriangleIcon, PlayIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import DashedLine from '../../../assets/dashedline.png';
import Button from "../../../components/forms/Button";

export default function PreExam(){
    return(
        <div className="bg-[#EFF0F3] min-h-screen py-[30px] px-[50px] text-white">
            
            {/* ICON */}
            <Link to={'/siswa-dashboard'}>
                <XCircleIcon className="w-9 h-9 text-black"/>
            </Link>

            <div className="flex">
                {/* CARD LEFT SIDE */}
                <div className="bg-[#272343] w-[320px] mt-10 rounded-[10px] py-9">
                    {/* IMG */}
                    <img src="https://placeimg.com/192/192/people" alt="" className="w-64 h-44 rounded-[10px] mx-auto" />
                    {/* JUDUL UJIAN */}
                    <h1 className="text-white font-semibold font-['Open Sans'] text-xl text-center mt-5">Ujian Linguistik</h1>
                    <h3 className="font-['Open Sans']  mx-16 mt-5 font-semibold text-sm">Proctor</h3>
                    {/* PROCTOR NAME */}
                    <div>
                        <div className="avatar mt-3 mx-16">
                            <div className="w-12 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                            <p className="font-['Roboto']  text-sm ml-4 self-center">Robert Baratheon</p>
                        </div>
                    </div>

                    {/* SOAL DAN MENIT */}
                    <div className="flex mt-4 mx-16 justify-between py-2 font-['Open Sans']">
                        <div className="px-6">
                            <p className="text-center font-bold text-3xl">10</p>
                            <p className="text-sm text-center">Soal</p>
                        </div>
                        <div className="px-6">
                            <p className="text-center font-bold text-3xl">120</p>
                            <p className="text-sm text-center">Menit</p>
                        </div>
                    </div>

                    {/* TIME */}
                    <div className="flex text-black justify-center mt-8">
                        {/* ILUSTRATION */}
                        <div className="py-4 px-1 bg-[#F7F8F9] w-10 rounded-[20px]">
                            <ClockIcon className="w-6 h-6 mx-auto"/>
                            <img src={DashedLine} className='my-3 mx-auto' alt="" />
                            <ClockIcon className="w-6 h-6 mx-auto"/>
                        </div>
                        <div className="flex flex-col justify-between my-1 text-white">
                            {/* DIMULAI */}
                            <div className="ml-6">
                                <p className="font-['Roboto'] text-sm ">Dimulai</p>
                                <h1 className="font-['Open Sans'] font-semibold text-3xl">10:45</h1>
                            </div>
                            {/* SELESAI */}
                            <div className="ml-6">
                                <p className="font-['Roboto'] text-sm ">Berakhir</p>
                                <h1 className="font-['Open Sans'] font-semibold text-3xl">12:45</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARD RIGHT RIDE */}
                <div className="bg-[#272343] mt-10 py-9 px-14 w-[450px] rounded-[10px] ml-8 max-h-[722px]">
                    <p className="font-['Open Sans'] font-semibold text-sm">Jumat, 23 September 2022</p>
                    <div className="bg-orange-300 py-5 px-6 mt-8 text-black rounded-[10px]">
                        <div className="flex justify-center">
                            <ExclamationTriangleIcon className="w-9 h-9"/>
                            <p className="self-center ml-3 font-['Roboto'] font-medium text-sm">Peringatan</p>
                        </div>
                        <p className="mt-3 text-center font-['Roboto'] text-sm leading-[200%]">Sebelum anda memulai ujian, anda diwajibkan untuk melampirkan hasil screenshot kamera depan anda ke dalam form dibawah ini</p>
                    </div>

                    <div className="alert alert-success shadow-lg mt-8">
                        <div className="mx-auto">
                            <CheckCircleIcon className="w-6 h-6"/>
                            <span>Anda telah berhasil terverifikasi!</span>
                        </div>
                    </div>

                    {/* BUTTON VERIFIKASI */}
                    <Link to={'/siswa-verifikasi'}>
                        <Button className="w-full mt-4">
                            <CameraIcon className="w-6 h-6 mr-4"/>
                            <p className="font-['Open Sans'] font-semibold text-sm">Verifikasi</p>
                        </Button>
                    </Link>

                    {/* TOGGLES */}
                    <div className="flex justify-center mt-4">
                        <div className="form-control mr-8">
                            <label className="label cursor-pointer flex flex-col">
                                <input type="checkbox" className="toggle" checked />
                                <span className="label-text text-white mt-1 font-['Open Sans'] text-sm">Camera</span> 
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer flex flex-col">
                                <input type="checkbox" className="toggle"/>
                                <span className="label-text text-white mt-1 font-['Open Sans'] text-sm">Audio</span> 
                            </label>
                        </div>
                    </div>

                    {/* BUTTON MULAI UJIAN */}
                    <Button className="w-full mt-[140px]">
                        <PlayIcon className="w-6 h-6 mr-4"/>
                        <p className="font-['Open Sans'] font-semibold text-sm">Mulai Ujian</p>
                    </Button>
                    
                </div>
            </div>
            
        </div>
    );
}