import  Welcome from "../../../assets/boy.png";

export default function SelamatDatangSiswa(){
    return(
        <div className=" bg-[#FBFCFC] flex-1 mr-4 rounded-[10px] w-[750px]">
            <div className="pt-8 pl-8 pr-8 flex text-black">
                <div className="">
                    <h1 className="font-semibold text-[20px] font-['Poppins']">Selamat Datang, Mary Poppins</h1>
                    <p className="font-['Poppins'] text-[14px] w-[430px] leading-[200%] mt-[25px]">
                        Anda telah menyelesaikan  sebanyak 3 ujian dalam minggu ini!
                        Keep it up and improve your results!
                    </p>
                </div>
                <div className=" mt-[-90px] ml-4">
                    <img className="h-[250px] w-[250px]" src={Welcome} alt="" />
                </div>
            </div>
        </div>
    );
}