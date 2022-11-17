import Button from "../../components/forms/Button";
import Comp from "../../assets/comp.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { userLogin } from "../../services/api/authentication.service";
// import { AuthLogin } from "../auth-login";

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://www.youtube.com/watch?v=sBw0O5YTT4Q&t=1978s&ab_channel=DevGuyAhnaf

type LoginValues = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const [login, setLogin] = useState<LoginValues>({
    username: "",
    password: "",
  });

  // const[saved, setSaved] = useState(() => {
  //   const test = localStorage.getItem("login")
  //   const initialValue = JSON.stringify(test)
  //   return initialValue || ""
  // })

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    userLogin(login);
  }

  // useEffect(() => {
  //   const test = localStorage.getItem('login')
  //   if (test) {
  //     setLogin(JSON.parse(test))
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("login", JSON.stringify(login));
  // }, [login]);


  return (
    <div className="w-full min-h-screen bg-[#EFF0F3]">
      <div className="w-full grid grid-cols-2 place-content-stretch">
        <div className="min-h-screen flex justify-center">
          <div className="px-24">
            <h1 className="font-['Open Sans'] font-bold text-[25px] pt-[30px] mb-[30px]">
              Logo E-Proctor
            </h1>
            <div className="bg-[#FBFCFC] rounded-lg py-5">
              <form onSubmit={onSubmit}>
                <div className="mx-5 px-5 py-4 border-b border-slate-300">
                  <h1 className="font-['Poppins'] font-semibold text-lg">
                    Login User
                  </h1>
                </div>
                <div className="px-10 pb-5">
                  <p className="mt-[20px]">Silakan login terlebih dahulu</p>
                  <input
                    type="text"
                    name="username"
                    value={login.username}
                    onChange={onChange}
                    placeholder="Masukkan email atau username ...."
                    className="input input-bordered input-md w-full mt-7"
                  />
                  <input
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={onChange}
                    placeholder="Masukkan password ...."
                    className="input input-bordered input-md w-full mt-7"
                  />
                  <div className="flex mt-5 justify-between">
                    <div className="flex">
                      <input
                        id="ingat_saya"
                        type="checkbox"
                        className="checkbox checkbox-xs"
                      />
                      <label
                        htmlFor="ingat_saya"
                        className="text-xs self-center ml-[10px]"
                      >
                        Ingat saya
                      </label>
                    </div>
                    <div>
                      <p className="text-xs">
                        <u>Lupa password?</u>
                      </p>
                    </div>
                  </div>
                  <div className="mt-7">
                    <Button className="w-full ">
                      <p className="text-sm">MASUK</p>
                    </Button>
                  </div>
                  <div className="text-xs text-center mt-10">
                    <p>
                      Belum mempunyai akun?{" "}
                      <Link to={"/daftar"}>
                        <u>
                          <strong>Daftar sekarang!</strong>
                        </u>
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
              <p className="text-2xs text-slate-500 text-center">
                Copyright @eproctor 2022 | Privacy Policy
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBFCFC] min-h-screen">
          <div className=" w-full flex flex-col">
            <img
              className="h-[350px] w-[350px] mx-auto mt-[30px]"
              src={Comp}
              alt=""
            />
            <div className="mx-auto mt-[30px]">
              <p className="font-['Poppins'] mx-auto font-semibold text-lg text-center leading-[150%] w-[479px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, odit.
              </p>
              <p className="font-['Open Sans'] text-sm leading-[200%] text-center mx-auto mt-5 w-[479px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur consequatur soluta nobis dolor culpa aspernatur vero
                sit id commodi eius!
              </p>
            </div>
            <div className="flex gap-[15px] mt-[50px] mx-auto">
              <div className="w-[66px] h-2 bg-slate-400 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
