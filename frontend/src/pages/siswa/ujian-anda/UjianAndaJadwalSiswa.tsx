import Notifications from "../../../components/icons/Notifications";
import Settings from "../../../components/icons/Settings";
import SidebarSiswa, { NavbarSiswa } from "../../../components/sidebar/SidebarSiswa";
import TabsSiswa from "../../../components/tabs/siswa/TabsSiswa";

export default function UjianAndaJadwalSiswa(){
    return(
        <div className="bg-[#EFF0F3] flex text-black">
            <SidebarSiswa active={NavbarSiswa.UJIANANDA} />

            <div className='mr-[24px] w-full ml-6 pl-[240px] pb-[30px]'>
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
                <h1>Halaman Jadwal</h1>
            </div>
        </div>
    );
}