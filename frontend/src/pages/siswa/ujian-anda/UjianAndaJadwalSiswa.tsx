import Header1 from "../../../components/dashboard/Header1";
import SidebarSiswa, { NavbarSiswa } from "../../../components/sidebar/SidebarSiswa";
import TabsSiswa from "../../../components/tabs/siswa/TabsSiswa";

export default function UjianAndaJadwalSiswa(){
    return(
        <div className="bg-[#EFF0F3] flex text-black">
            <SidebarSiswa active={NavbarSiswa.UJIANANDA} />

            <div className='mr-[24px] w-full ml-6 pl-[240px] pb-[30px]'>
                <Header1/>
                <TabsSiswa/>
                <h1>Halaman Jadwal</h1>
            </div>
        </div>
    );
}