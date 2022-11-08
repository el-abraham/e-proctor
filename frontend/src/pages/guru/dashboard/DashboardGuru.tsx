import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Button from "../../../components/forms/Button";
import Notifications from "../../../components/icons/Notifications";
import Profile from "../../../components/dashboard/Profile";
import SelamatDatang from "../../../components/dashboard/SelamatDatang";
import Settings from "../../../components/icons/Settings";
import Sidebar, { NavbarEnum } from "../../../components/Sidebar";
import UjianDibuat from "../../../components/dashboard/UjianDibuat";
import UjianHariIni from "../../../components/dashboard/UjianHariIni";

export default function DashboardGuru(){
    return(
        <div className="App bg-[#EFF0F3] flex pb-[30px]">

            {/* SIDEBAR */}
            <Sidebar active={NavbarEnum.DASHBOARD} />

            {/* BUTTON BUAT UJIAN, CARI UJIAN(?), ICON NOTIFIKASI, DAN SETTINGS */}
            <div className='mr-[24px] w-full ml-6 pl-[240px]'>
                <div className="flex gap-[30px] mt-6 justify-end">
                    <Link to={"/tambahujian"}>
                        <Button>
                            <PlusCircleIcon className='h-[20px] w-[20px] mr-[15px] my-auto'/>
                            <p className='my-auto text-xs'>Buat Ujian</p>
                        </Button>
                    </Link>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <Notifications/>
                    <Settings/>
                </div>

                <div className='flex mt-[40px] justify-between'>
                    {/* UCAPAN SELAMAT DATANG */}
                    <SelamatDatang/>
                    {/* PROFILE */}
                    <Profile/>
                </div>

                <div className='flex justify-between'>
                    {/* UJIAN HARI INI */}
                    <UjianHariIni/>
                    {/* UJIAN DIBUAT */}
                    <UjianDibuat/>
                </div>
                
            </div>

        </div>
    );
}