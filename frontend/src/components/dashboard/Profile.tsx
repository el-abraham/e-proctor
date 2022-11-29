import { useRecoilValue } from "recoil";
import { userState } from "../../_state/user.state";

export default function Profile() {
  const user = useRecoilValue(userState);
  return (
    <div className="text-black bg-[#FBFCFC] rounded-[10px] pt-4 w-[250px]">
      {/* NAMA USER */}
      <h1 className="font-semibold text-[14px] font-['Poppins'] leading-[200%] text-center mb-[15px]">
        {user?.fullname}
      </h1>
      {/* AVATAR */}
      <div className="avatar flex justify-center mb-[15px]">
        <div className="w-20 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      {/* AKUN EMAIL */}
      <p className="text-center font-['Poppins'] text-[12px] leading-[200%]">
        mary.poppins@student.com
      </p>
    </div>
  );
}
