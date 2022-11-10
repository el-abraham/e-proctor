import Profile from "../../components/dashboard/Profile";
import SelamatDatangSiswa from "../../components/dashboard/siswa/SelamatDatangSiswa";
import UjianAkanDatangSiswa from "../../components/dashboard/siswa/UjianAkanDatangSiswa";
import UjianHariIniSiswa from "../../components/dashboard/siswa/UjianHariIniSiswa";
import Notifications from "../../components/icons/Notifications";
import Settings from "../../components/icons/Settings";
import ModalCariUjianGagal from "../../components/modals/siswa/ModalCariUjianGagal";
import ModalCariUjianSukses from "../../components/modals/siswa/ModalCariUjianSukses";
import ModalGabungUjianGagal from "../../components/modals/siswa/ModalGabungUjianGagal";
import ModalGabungUjianSukses from "../../components/modals/siswa/ModalGabungUjianSukses";
import SidebarSiswa, { NavbarSiswa } from "../../components/sidebar/SidebarSiswa";

export default function DashboardSiswa() {
    return(
        <div className="App bg-[#EFF0F3] flex pb-[30px]">

            {/* JIKA GAGAL */}
            <ModalCariUjianGagal/>
            <ModalGabungUjianGagal/>

            {/* JIKA SUKSES */}
            <ModalCariUjianSukses/>
            <ModalGabungUjianSukses/>

            <SidebarSiswa active={NavbarSiswa.DASHBOARD} />
            <div className='mr-[24px] w-full ml-6 pl-[240px]'>
                <div className="flex gap-[30px] mt-6 justify-end">
                    {/* GABUNG UJIAN INPUT */}
                    <div className="form-control self-center ">
                        <label className="input-group h-[40px]">
                            <input type="text" placeholder="Gabung Ujian ...." className="input input-bordered h-[40px] placeholder:text-sm" />
                            <label htmlFor="gabung-ujian-sukses" className="h-[40px] bg-red-400 flex cursor-pointer">
                                <p className="text-center m-auto px-4 font-medium text-xs">GABUNG</p>
                            </label>
                        </label>
                    </div>
                    {/* CARI UJIAN INPUT */}
                    <div className="form-control self-center">
                        <label className="input-group h-[40px]">
                            <input type="text" placeholder="Cari Ujian ...." className="input input-bordered h-[40px] placeholder:text-sm" />
                            <label htmlFor="cari-ujian-sukses" className="h-[40px] bg-red-400 flex cursor-pointer">
                                <p className="text-center m-auto px-4 font-medium text-xs">CARI</p>
                            </label>
                        </label>
                    </div>
                    <Notifications/>
                    <Settings/>
                </div>

                <div className='flex mt-[40px] justify-between'>
                    {/* UCAPAN SELAMAT DATANG */}
                    <SelamatDatangSiswa/>
                    {/* PROFILE */}
                    <Profile/>
                </div>

                <div className='flex justify-between'>
                    {/* UJIAN HARI INI */}
                    <UjianHariIniSiswa/>
                    {/* UJIAN AKAN DATANG */}
                    <UjianAkanDatangSiswa/>
                </div>

            </div>
        </div>
    ); 
}
