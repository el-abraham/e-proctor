import { useRecoilValue } from "recoil";
import Notifications from "../../../components/icons/Notifications";
import Settings from "../../../components/icons/Settings";
import { userState } from "../../../_state/user.state";

export default function Header() {
  const user = useRecoilValue(userState);

  return (
    <div className="flex gap-[30px] mt-6 justify-end">
      <div className="avatar flex text-black font-['Open Sans'] font-semibold text-sm">
        <div className="w-[42px] h-[42px] rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
        <p className="self-center ml-5">{user?.fullname}</p>
      </div>
      <Notifications />
      <Settings />
    </div>
  );
}
