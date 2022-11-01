import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import Breadcrumbs from "../components/Breadcrumbs";
import Header1 from "../components/Header1";
import Sidebar, { NavbarEnum } from "../components/Sidebar";
import Tabs1 from "../components/Tabs1";

export default function Kategori() {
  return (
    <div className="bg-[#EFF0F3] flex text-black">
      <input type="checkbox" id="add-kategori" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="add-kategori"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Tambah Kategori</h3>
          <div className="block">
            <div className=" flex w-full mt-5">
              <p className="self-center mr-8">Parent Kategori</p>
              <div className="dropdown">
                <label tabIndex={0} className="btn m-1">
                  Click
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex w-full mt-5">
              <p className="self-center mr-10">Nama Kategori</p>
              <input
                type="text"
                placeholder="Masukkan nama kategori ..."
                className="input input-bordered w-[300px]"
              />
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="add-kategori" className="btn">
              Simpan
            </label>
          </div>
        </div>
      </div>

      <input type="checkbox" id="trash-icon" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="trash-icon"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Hapus Kategori</h3>
          <p className="py-4">Apakah anda yakin ingin menghapus kategori ini?</p>
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
      <Sidebar active={NavbarEnum.BANKSOAL} />

      {/* BUTTON BUAT UJIAN, CARI UJIAN(?), ICON NOTIFIKASI, DAN SETTINGS */}
      <div className="mr-[24px] w-full h-screen ml-6 pl-[240px]">
        <Header1 />
        <Breadcrumbs />
        <Tabs1 />

        <label htmlFor="add-kategori" className="btn btn-primary mr-5 my-5">
          <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
          <p className="my-auto text-xs">Buat Kategori Baru</p>
        </label>

        <div className="overflow-x-auto font-['Roboto'] mb-[30px]">
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
                <th>Nama Kategori</th>
                <th>Jumlah Pertanyaan</th>
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
                <td>Kategori 1</td>
                <td>20 Soal</td>
                <td className="flex gap-[15px]">
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
                <td>1</td>
                <td>Kategori 1</td>
                <td>20 Soal</td>
                <td className="flex gap-[15px]">
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
                <td>1</td>
                <td>Kategori 1</td>
                <td>20 Soal</td>
                <td className="flex gap-[15px]">
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
