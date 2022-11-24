import { useRecoilValue } from "recoil";
import { userState } from "../_state/user.state";
import DetailUjianGuru from "./proctor/ujian/detail";
import DetailUjianSiswa from "./siswa/ujian/detail";

const DetailUjian = () => {
  const user = useRecoilValue(userState);

  if (user?.role.includes("proctor")) {
    return <DetailUjianGuru />;
  } else if (user?.role.includes("siswa")) {
    return <DetailUjianSiswa />;
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

export default DetailUjian;
