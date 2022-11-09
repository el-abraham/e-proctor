import Button from "../../components/forms/Button";
import Comp from "../../assets/comp.png";
import { useState } from "react";
import { Link } from "react-router-dom";

type LoginValues = {
    username: string;
    password: string;
    konfpassword: string;
};

export default function Daftar(){

    const [ login, setLogin] = useState<LoginValues>({
        username: "",
        password: "",
        konfpassword: "",
    });

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLogin({...login, [e.target.name]: e.target.value});
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(login);
    }

    return(
        <div className="App bg-[#EFF0F3] flex h-screen">
            <div className="w-2/4 px-[70px]">
                <h1 className="font-['Open Sans'] font-bold text-[25px] pt-[30px] mb-[30px]">Logo E-Proctor</h1>
                <form className="bg-[#FBFCFC] rounded-[20px]" onSubmit={onSubmit}>
                    <div className="gap-[15px] ml-[20px] mr-[20px] pt-[20px] pb-[15px] border-b border-slate-300">
                        <h1 className="font-['Poppins'] font-semibold text-[20px] ml-[20px]">Daftar Akun</h1>
                    </div>
                    <p className="ml-[40px] mt-[20px]">Jika anda belum memiliki akun, dipersilahkan untuk mendaftar dengan mengisi form dibawah ini!</p>
                    <div className="mr-[40px]">
                        <input type="text" name="username" value={login.username} onChange={onChange} placeholder="Masukkan email atau username ...." className="mt-[30px] ml-[40px] input input-bordered w-[434px]" />
                        <input type="password" name="password" value={login.password} onChange={onChange} placeholder="Masukkan password ...." className="mt-[15px] ml-[40px] input input-bordered w-[434px]" />
                        <input type="password" name="konfpassword" value={login.konfpassword} onChange={onChange} placeholder="Konfirmasi password ...." className="mt-[15px] ml-[40px] input input-bordered w-[434px]" />
                    </div>
                    <div className="ml-[40px] mt-[30px] mr-[40px]">
                        <Button className="w-full ">
                            <p className='text-sm'>DAFTAR</p>
                        </Button>
                    </div>
                    <div className="text-xs text-center mt-[50px] pb-[30px] ">
                        <p>Sudah mempunyai akun? <Link to={"/login"}><u><strong>Login sekarang!</strong></u></Link></p>
                    </div>
                </form>
                <p className="text-xs text-center mt-5">Copyright @eproctor 2022 | Privacy Policy</p>
            </div>
            <div className="bg-[#FBFCFC] w-full flex flex-col">
                <img className="h-[350px] w-[350px] mx-auto mt-[30px]" src={Comp} alt="" />
                <div className="mx-auto mt-[30px]">
                    <p className="font-['Poppins'] mx-auto font-semibold text-lg text-center leading-[150%] w-[479px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, odit.</p>
                    <p className="font-['Open Sans'] text-sm leading-[200%] text-center mx-auto mt-5 w-[479px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur consequatur soluta nobis dolor culpa aspernatur vero sit id commodi eius!</p>
                </div>
                <div className="flex gap-[15px] mt-[50px] mx-auto">
                    <div className="w-[66px] h-2 bg-slate-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}