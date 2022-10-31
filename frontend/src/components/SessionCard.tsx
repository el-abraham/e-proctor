export default function SessionCard(){
    return(
        <div className="pt-[30px] pl-[40px] pr-[40px] pb-[30px] w-[470px] bg-[#FBFCFC] rounded-[10px]">
            <div className="flex">
                <div>
                    <h2 className="mb-3 font-['Open Sans'] font-semibold text-sm">Session 1</h2>
                    <p className="mb-2 font-['Roboto] text-xs">Open: Jumat, 30 September 2022, 08:00 </p>
                    <p className="font-['Roboto] text-xs">Open: Jumat, 30 September 2022, 08:00 </p>
                </div>
                <div className="ml-[30px] flex">
                    <div className="text-center pt-2 pb-2 pl-5 pr-5">
                        <p className="font-['Roboto] font-medium text-[25px]">20</p>
                        <p className="font-['Roboto] text-sm">Soal</p>
                    </div>
                    <div className="border-l border-slate-400 text-center pt-2 pb-2 pl-5 pr-5">
                        <p className="font-['Roboto] font-medium text-[25px]">120</p>
                        <p className="font-['Roboto] text-sm">Menit</p>
                    </div>
                </div>
            </div>

            <div className="flex mt-5 justify-between">
                <h1 className="font-['Open Sans'] font-semibold text-[30px]">fas789sd</h1>
                <div className="avatar-group -space-x-6 ml-6">
                    <div className="avatar">
                        <div className="w-10">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-10">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-10">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-10">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <p className="pl-[35px] self-center">12 Anggota</p>
                </div>
            </div>
        </div>
    );
}