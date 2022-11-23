import { useRecoilValue } from "recoil";
import { userState } from "../_state/user.state";
import UjianGuru from "./proctor/ujian/ujian";
import UjianSiswa from "./siswa/ujian";

const Ujian = () => {
  const user = useRecoilValue(userState);

  if (user?.role.includes("proctor")) {
    return <UjianGuru />;
  } else if (user?.role.includes("siswa")) {
    return <UjianSiswa />;
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

export default Ujian;
