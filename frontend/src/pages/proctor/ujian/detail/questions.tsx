import {
  EyeIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Button from "../../../../components/forms/Button";
import Breadcrumbs from "../../../../components/others/Breadcrumbs";
import NamaUjian from "../../../../components/others/NamaUjian";
import SidebarGuru, {
  NavbarEnum,
} from "../../../../components/sidebar/SidebarGuru";
import { detailQuizState } from "../../../../_state/quiz.state";
import Header from "../../questions-bank/header";
import TabsDetailUjianGuru from "./tabs";

export default function DetailQuestionsGuru() {
  const detailQuiz = useRecoilValue(detailQuizState);

  useEffect(() => {
    console.log(detailQuiz);
  }, []);

  return (
    <div className="bg-[#EFF0F3] min-h-screen flex text-black">
      <input type="checkbox" id="trash-icon" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="trash-icon"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Hapus Question</h3>
          <p className="py-4">
            Apakah anda yakin ingin menghapus question ini?
          </p>
          <div className="modal-action">
            <label htmlFor="trash-icon" className="btn btn-primary">
              Ya
            </label>
            <label htmlFor="trash-icon" className="btn">
              Tidak
            </label>
          </div>
        </div>
      </div>

      <input type="checkbox" id="bank-soal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="bank-soal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Tambah Question dari Bank Soal</h3>
          <div className="block">
            {/* SELECT TAG */}
            <div className=" flex w-full mt-5 justify-between">
              <p className="self-center mr-8">Pilih Kategori</p>
              <select className="select select-bordered w-10/12 max-w-5xl">
                <option disabled selected>
                  Pilih Kategori
                </option>
                <option>Kategori A</option>
                <option>Kategori B</option>
              </select>
            </div>
            {/* TABLE */}
            <div className="overflow-x-auto font-['Roboto'] my-[30px]">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        checked
                        className="checkbox checkbox-xs"
                      />
                    </th>
                    <th>Soal</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody className="text-sm">
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        checked
                        className="checkbox checkbox-xs"
                      />
                    </th>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia, consequuntur?
                    </td>
                    <td className="flex gap-[15px]">
                      <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        checked
                        className="checkbox checkbox-xs"
                      />
                    </th>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia, consequuntur?
                    </td>
                    <td className="flex gap-[15px]">
                      <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        checked
                        className="checkbox checkbox-xs"
                      />
                    </th>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia, consequuntur?
                    </td>
                    <td className="flex gap-[15px]">
                      <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        checked
                        className="checkbox checkbox-xs"
                      />
                    </th>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia, consequuntur?
                    </td>
                    <td className="flex gap-[15px]">
                      <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        checked
                        className="checkbox checkbox-xs"
                      />
                    </th>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia, consequuntur?
                    </td>
                    <td className="flex gap-[15px]">
                      <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        checked
                        className="checkbox checkbox-xs"
                      />
                    </th>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia, consequuntur?
                    </td>
                    <td className="flex gap-[15px]">
                      <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* PAGING */}
            <div className="justify-between flex mb-8">
              <p className="font-['Open Sans'] text-sm self-center">
                <u>Show all</u>
              </p>
              <div className="btn-group">
                <button className="btn btn-md">1</button>
                <button className="btn btn-md btn-active">2</button>
                <button className="btn btn-md">3</button>
                <button className="btn btn-md">4</button>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <Button htmlFor="bank-soal" className="btn-primary">
              Tambah ke Ujian
            </Button>
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <SidebarGuru active={NavbarEnum.UJIANANDA} />

      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <Header />
        <Breadcrumbs />
        <NamaUjian title={detailQuiz?.title} />
        <TabsDetailUjianGuru />

        <p className="font-['Open Sans'] font-semibold text-sm my-[30px]">
          Total Pertanyaan: 0
        </p>

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-primary m-1">
            <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
            <p className="my-auto text-xs">Question</p>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/guru-ujiananda-question-lihat"}>
                <PlusCircleIcon className="h-[20px] w-[20px] my-auto" />
                <p className="my-auto text-xs">Buat Pertanyaan Baru</p>
              </Link>
            </li>
            <li>
              <label htmlFor="bank-soal">
                <PlusCircleIcon className="h-[20px] w-[20px] my-auto" />
                <p className="my-auto text-xs">Dari Bank Soal</p>
              </label>
            </li>
          </ul>
        </div>

        {detailQuiz?.questions?.length ? (
          <div className="overflow-x-auto font-['Roboto'] my-[30px]">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <td>Nomor</td>
                  <th>Soal</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {detailQuiz?.questions?.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{++index}</td>
                      <td>{value.name}</td>
                      <td className="flex gap-[15px]">
                        <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
                        <label htmlFor="trash-icon">
                          <TrashIcon className="w-[24px] h-[24px] self-center text-red-500" />
                        </label>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
