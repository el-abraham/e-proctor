import { useRecoilValue } from "recoil";
import { userState } from "../_state/user.state";
import DashboardGuru from "./proctor/dashboard";
import DashboardSiswa from "./siswa/dashboard";

const Dashboard = () => {
  const user = useRecoilValue(userState);

  if (user?.role.includes("proctor")) {
    return <DashboardGuru />;
  } else if (user?.role.includes("siswa")) {
    return <DashboardSiswa />;
  } else {
    return (
      <div>
        <p>Lorem, ipsum.</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
        ratione.j:w
      </div>
    );
  }
};

export default Dashboard;
