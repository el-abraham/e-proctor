import { BellIcon } from "@heroicons/react/24/outline";

export default function Notifications(){
    return(
        <div className="p-3 rounded-[10px] bg-[#FBFCFC] flex text-black self-center">
            <BellIcon className="w-[20px] h-[20px] m-auto"/>
        </div>
    );
}