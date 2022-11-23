import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/forms/Button";
import Breadcrumbs from "../../../components/others/Breadcrumbs";
import SidebarGuru, {
  NavbarEnum,
} from "../../../components/sidebar/SidebarGuru";
import Header from "../questions-bank/header";

export default function UjianGuru() {
  //   const [quizData, setQuizData] = useState<Quiz[]>([]);

  //   useEffect(() => {
  //     const testing = async () => {
  //       const res = await getQuiz();
  //       console.log(res);
  //       setQuizData(res ?? []);
  //     };

  //     testing();
  //   }, []);

  return (
    <div className="bg-[#EFF0F3] min-h-screen flex text-black">
      {/* SIDEBAR */}
      <SidebarGuru active={NavbarEnum.UJIANANDA} />

      {/* BUTTON BUAT UJIAN, CARI UJIAN(?), ICON NOTIFIKASI, DAN SETTINGS */}
      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <Header />

        <Breadcrumbs />

        <Link to={"/guru-tambahujian"}>
          <Button className="mb-[30px]">
            <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
            <p className="my-auto text-xs">Ujian Baru</p>
          </Button>
        </Link>
        <Link to={"/ujian/detail"}>
          <Button className="mb-[30px] ml-5">
            <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
            <p className="my-auto text-xs">Detail Ujian</p>
          </Button>
        </Link>

        <div className="flex gap-[15px] mb-5">
          <h1 className="font-semibold text-[14px] self-center">Ujian Anda</h1>
          <div className="pt-2 pb-2 pr-3 pl-3 bg-[#FBFCFC] rounded-[10px] flex border border-slate-300">
            <p className="m-auto text-[14px] font-semibold">2</p>
          </div>
        </div>

        <div className="overflow-x-auto font-['Open Sans']">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Nama Ujian</th>
                <th>Session</th>
                <th>Attempts Allowed</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Tes</th>
                <td className="flex">
                  <div className="avatar">
                    <div className="w-[86px] h-[86px] rounded">
                      <img src="https://placeimg.com/192/192/people" />
                    </div>
                  </div>
                  <div className="ml-[20px] self-center">
                    <h1 className="font-semibold text-sm mb-[13px]">tes</h1>
                    <div className="flex">
                      <p className="font-['Roboto'] self-center text-xs">tes</p>
                    </div>
                  </div>
                </td>
                <td>tes</td>
                <td>1</td>
                <td>2022-10-02, 05:43</td>
              </tr>
              {/* {quizData.map((value, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td className="flex">
                      <div className="avatar">
                        <div className="w-[86px] h-[86px] rounded">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div className="ml-[20px] self-center">
                        <h1 className="font-semibold text-sm mb-[13px]">
                          {value.title}
                        </h1>
                        <div className="flex">
                          <p className="font-['Roboto'] self-center text-xs">
                            {value.questions?.length}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>{value.session?.length}</td>
                    <td>1</td>
                    <td>2022-10-02, 05:43</td>
                  </tr>
                );
              })} */}
            </tbody>
          </table>
        </div>

        <div className="justify-end flex mb-8">
          <div className="btn-group mt-[30px]">
            <button className="btn btn-md">1</button>
            <button className="btn btn-md btn-active">2</button>
            <button className="btn btn-md">3</button>
            <button className="btn btn-md">4</button>
          </div>
        </div>
      </div>
    </div>
  );
}
