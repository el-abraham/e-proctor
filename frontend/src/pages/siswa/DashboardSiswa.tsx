import Profile from "../../components/dashboard/Profile";
import SelamatDatangSiswa from "../../components/dashboard/siswa/SelamatDatangSiswa";
import UjianAkanDatangSiswa from "../../components/dashboard/siswa/UjianAkanDatangSiswa";
import UjianHariIniSiswa from "../../components/dashboard/siswa/UjianHariIniSiswa";
import Notifications from "../../components/icons/Notifications";
import Settings from "../../components/icons/Settings";
import SidebarSiswa, { NavbarSiswa } from "../../components/sidebar/SidebarSiswa";

export default function DashboardSiswa() {
    return(
        <div className="App bg-[#EFF0F3] flex pb-[30px]">

            {/* MODAL CARI UJIAN GAGAL */}
            <input type="checkbox" id="cari-ujian-gagal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="cari-ujian-gagal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Cari Ujian</h3>
                        <p className="py-4">Sistem tidak menemukan ujian yang anda cari. Mohon ketikkan nama ujian dengan tepat!</p>
                        <div className="modal-action">
                        <label htmlFor="cari-ujian-gagal" className="btn">Kembali</label>
                    </div>
                </div>
            </div>

            {/* MODAL GABUNG UJIAN GAGAL */}
            <input type="checkbox" id="gabung-ujian-gagal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="gabung-ujian-gagal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Gabung Ujian</h3>
                        <p className="py-4">Kode yang anda masukkan tidak valid. Mohon coba lagi.</p>
                        <div className="modal-action">
                        <label htmlFor="gabung-ujian-gagal" className="btn">Kembali</label>
                    </div>
                </div>
            </div>

            <SidebarSiswa active={NavbarSiswa.DASHBOARD} />
            <div className='mr-[24px] w-full ml-6 pl-[240px]'>
                <div className="flex gap-[30px] mt-6 justify-end">
                    {/* GABUNG UJIAN INPUT */}
                    <div className="form-control self-center ">
                        <label className="input-group h-[40px]">
                            <input type="text" placeholder="Gabung Ujian ...." className="input input-bordered h-[40px] placeholder:text-sm" />
                            <label htmlFor="gabung-ujian-gagal" className="h-[40px] bg-red-400 flex cursor-pointer">
                                <p className="text-center m-auto px-4 font-medium text-xs">GABUNG</p>
                            </label>
                        </label>
                    </div>
                    {/* CARI UJIAN INPUT */}
                    <div className="form-control self-center">
                        <label className="input-group h-[40px]">
                            <input type="text" placeholder="Cari Ujian ...." className="input input-bordered h-[40px] placeholder:text-sm" />
                            <label htmlFor="cari-ujian-gagal" className="h-[40px] bg-red-400 flex cursor-pointer">
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
