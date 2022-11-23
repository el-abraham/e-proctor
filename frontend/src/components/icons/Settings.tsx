import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function () {
  return (
    // <div className="p-3 rounded-[10px] bg-[#FBFCFC] flex text-black self-center">
    //   <Cog6ToothIcon className="w-[20px] h-[20px] m-auto" />
    // </div>

    // TEST BEN DROPDOWN FOR LOGOUT
    <div className="dropdown dropdown-end dropdown-bottom">
      <label tabIndex={0} className="btn">
        <Cog6ToothIcon className="w-[20px] h-[20px] m-auto" />
      </label>
      <ul tabIndex={0} className="dropdown-content menu mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li className="text-red-500"><a>Logout</a></li>
      </ul>
    </div>
  );
}
