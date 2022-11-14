import Notifications from "../../icons/Notifications";
import Settings from "../../icons/Settings";

export default function Header1() {
    return(
        <div className="flex gap-[30px] mt-6 justify-end">
            <div className="avatar flex text-black font-['Open Sans'] font-semibold text-sm">
                <div className="w-[42px] h-[42px] rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
                <p className="self-center ml-5">Mary Poppins</p>
            </div>
            <Notifications/>
            <Settings/>
        </div>
    );
}