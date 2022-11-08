import SidebarSiswa, { NavbarSiswa } from "../../components/sidebar/SidebarSiswa";

export default function DashboardSiswa() {
  return(
    <div className="App bg-[#EFF0F3] flex pb-[30px]">
      <SidebarSiswa active={NavbarSiswa.DASHBOARD} />
    </div>
  ); 
}
