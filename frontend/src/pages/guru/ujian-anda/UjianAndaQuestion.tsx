import {
  EyeIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../components/others/Breadcrumbs";
import Header1 from "../../../components/dashboard/guru/Header1";
import NamaUjian from "../../../components/others/NamaUjian";
import { NavbarEnum } from "../../../components/sidebar/SidebarGuru";
import SidebarGuru from "../../../components/sidebar/SidebarGuru";
import TabsUjianAnda from "../../../components/tabs/guru/TabsUjianAnda";

export default function UjianAndaQuestion() {
  return (
    <div className="bg-[#EFF0F3] flex text-black">
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
            <label htmlFor="trash-icon" className="btn">
              Ya
            </label>
            <label htmlFor="trash-icon" className="btn">
              Tidak
            </label>
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <SidebarGuru active={NavbarEnum.UJIANANDA} />

      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <Header1 />
        <Breadcrumbs />
        <NamaUjian />
        <TabsUjianAnda />

        <p className="font-['Open Sans'] font-semibold text-sm my-[30px]">
          Total Pertanyaan: 0
        </p>

        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
            <p className="my-auto text-xs">Question</p>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/lihat-questions"}>
                <PlusCircleIcon className="h-[20px] w-[20px] my-auto" />
                <p className="my-auto text-xs">Buat Pertanyaan Baru</p>
              </Link>
            </li>
            <li>
              <Link to={"/guru/bank-soal"}>
                <PlusCircleIcon className="h-[20px] w-[20px] my-auto" />
                <p className="my-auto text-xs">Dari Bank Soal</p>
              </Link>
            </li>
          </ul>
        </div>

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
                <td>Nomor</td>
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
                <td>1</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  consequuntur?
                </td>
                <td className="flex gap-[15px]">
                  <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
                  <label htmlFor="trash-icon">
                    <TrashIcon className="w-[24px] h-[24px] self-center text-red-500" />
                  </label>
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
                <td>2</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  consequuntur?
                </td>
                <td className="flex gap-[15px]">
                  <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
                  <label htmlFor="trash-icon">
                    <TrashIcon className="w-[24px] h-[24px] self-center text-red-500" />
                  </label>
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
                <td>3</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  consequuntur?
                </td>
                <td className="flex gap-[15px]">
                  <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
                  <label htmlFor="trash-icon">
                    <TrashIcon className="w-[24px] h-[24px] self-center text-red-500" />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
