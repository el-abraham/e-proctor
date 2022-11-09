import { CheckIcon } from "@heroicons/react/24/outline";
import React, { Children } from "react";
import Button from "./Button";

type Props = {
  text: string;
  children?: React.ReactNode;
};

const Soal = ({ text }: Props) => {
  return (
    <Button className="font-[Open Sans] text-black font-semibold border-2 border-opacity-50 w-[35px] h-[45px] mt-2 border-black rounded-[11px]">
      <p className="text-[14px]">{text}</p>
      <div className="absolute bg-[#55CB7D] ml-[20px] -mt-[30px] h-[14px] w-[14px] rounded-tr-[4px]">
        <CheckIcon className="w-[15px] h-[15px] font-bold" />
      </div>
    </Button>
  );
};

export default Soal;
