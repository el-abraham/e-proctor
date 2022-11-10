import { CameraIcon, KeyIcon, ShieldExclamationIcon, TrashIcon, UserCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Button from "../../components/forms/Button";

export default function Pengaturan() {
    return(
        <div className="App bg-[#EFF0F3] py-[30px] px-[50px] flex"> 
            
            <div className="">
                <h1 className="font-['Poppins'] text-xl font-semibold">Profile Settings</h1>
                {/* GRID 1 */}
                <div className="grid grid-cols-2 gap-5">
                    {/* PROFILE */}
                    <div className="py-5 flex bg-[#F7F8F9] rounded-[10px] mt-[32px]">
                        {/* AVATAR */}
                        <div className="avatar ml-[50px] ">
                            <div className="rounded-full w-[100px] h-[100px] self-center">
                                <img src="https://placeimg.com/192/192/people" className="" />
                            </div>
                        </div>
                        <div className="flex gap-[35px] justify-end w-full mr-[50px]">
                            <div className="p-2 self-center bg-slate-300 rounded-full">
                                <CameraIcon className="w-6 h-6"/>
                            </div>
                            <div className="p-2 self-center bg-slate-300 rounded-full">
                                <TrashIcon className="w-6 h-6 text-red-500"/>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F7F8F9] mt-[32px] px-[50px] py-[30px] rounded-[10px]">
                        <div className="border-b border-slate-300 pb-[15px]">
                            <h1 className="font-semibold text-[14px] self-center">NAMA LENGKAP</h1>
                        </div>
                        <input type="text" placeholder="Rhaella Targaryen" className=" mt-[15px] input input-bordered w-full" disabled />
                    </div>
                </div>

                {/* GRID 2 */}
                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-[#F7F8F9] mt-[32px] px-[50px] py-[30px] rounded-[10px]">
                        <div className="border-b border-slate-300 pb-[15px]">
                            <h1 className="font-semibold text-[14px] self-center ml">EMAIL</h1>
                        </div>
                        <input type="text" placeholder="rhaella@gmail.com" className=" mt-[15px] input input-bordered w-full" disabled />
                    </div>

                    <div className="bg-[#F7F8F9] mt-[32px] px-[50px] py-[30px] rounded-[10px]">
                        <div className="border-b border-slate-300 pb-[15px]">
                            <h1 className="font-semibold text-[14px] self-center ml">NOMOR TELEPON</h1>
                        </div>
                        <input type="text" placeholder="+62 896251238999" className=" mt-[15px] input input-bordered w-full" disabled />
                    </div>
                </div>

                {/* BIO */}
                <div className="mt-[32px]">
                    <div className="bg-[#F7F8F9] mt-[32px] px-[50px] py-[30px] rounded-[10px]">
                        <div className="border-b border-slate-300 pb-[15px]">
                            <h1 className="font-semibold text-[14px] self-center ml">BIO</h1>
                        </div>
                        <p className=" mt-[15px] leading-[150%] font-['Roboto']">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui eu ultrices purus, urna. Tristique varius nam mi eu nec. Nam netus sagittis at donec vel. Massa, proin cursus lobortis iaculis egestas nulla tortor. 
                        </p>
                    </div>
                </div>

                <div className="justify-end flex pt-[30px] gap-4">
                    <Button>
                        <p>Batalkan</p>
                    </Button>
                    <Button>
                        <p>Simpan</p>
                    </Button>
                </div>
            </div>

            <div className="ml-5">
                <h1 className="font-['Poppins'] text-xl font-semibold">Lainnya</h1>
                
                <div className="flex py-4 px-10 bg-[#F7F8F9] w-[310px] mt-8 rounded-[10px]">
                    <UserCircleIcon className="w-6 h-6 self-center mr-5"/>
                    <p className="font-['Open Sans'] text-sm self-center">Profile Settings</p>
                </div>
                <div className="flex py-4 px-10 bg-[#F7F8F9] w-[310px] mt-5 rounded-[10px]">
                    <KeyIcon className="w-6 h-6 self-center mr-5"/>
                    <p className="font-['Open Sans'] text-sm self-center">Ganti Password</p>
                </div>
                <div className="flex py-4 px-10 bg-[#F7F8F9] w-[310px] mt-5 rounded-[10px]">
                    <ShieldExclamationIcon className="w-6 h-6 self-center mr-5"/>
                    <p className="font-['Open Sans'] text-sm self-center">Privacy Policy</p>
                </div>
            </div>

        </div>
    );
}
