import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Breadcrumbs from "../../../components/others/Breadcrumbs";
import Button from "../../../components/forms/Button";
import NamaUjian from "../../../components/others/NamaUjian";
import TxtEditor from "../../../components/TxtEditor";

export default function () {
  return (
    <div className="px-[70px] py-[30px] bg-[#EFF0F3] text-black">
      <Breadcrumbs />
      <NamaUjian />

      <div className="dropdown">
        <p className="text-sm font-['Roboto'] ml-1 mb-1">Pilih Kategori</p>
        <label tabIndex={0} className="btn m-1">
          Unlimited
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

      <div>
        {/* BAGIAN PERTANYAAN */}
        <div className="mt-[15px]">
          <p className="mb-[15px] font-semibold">Pertanyaan</p>
          <TxtEditor />
        </div>

        {/* BAGIAN JAWABAN */}
        <p className="mt-[40px] font-semibold">Jawaban</p>

        {/* JAWABAN 1 */}
        <div className="mt-5">
          <p className="mb-[15px]">Jawaban 1</p>
          <TxtEditor />
          <p className="text-sm font-['Roboto'] mt-[15px] mb-[10px]">
            Jawaban 1 Benar
          </p>
          <input type="checkbox" checked className="checkbox checkbox-lg" />
        </div>

        {/* JAWABAN 1 */}
        <div className="mt-5">
          <p className="mb-[15px]">Jawaban 2</p>
          <TxtEditor />
          <p className="text-sm font-['Roboto'] mt-[15px] mb-[10px]">
            Jawaban 2 Benar
          </p>
          <input type="checkbox" checked className="checkbox checkbox-lg" />
        </div>

        {/* JAWABAN 3 */}
        <div className="mt-5">
          <p className="mb-[15px]">Jawaban 3</p>
          <TxtEditor />
          <p className="text-sm font-['Roboto'] mt-[15px] mb-[10px]">
            Jawaban 3 Benar
          </p>
          <input type="checkbox" checked className="checkbox checkbox-lg" />
        </div>

        {/* JAWABAN 4 */}
        <div className="mt-5">
          <p className="mb-[15px]">Jawaban 4</p>
          <TxtEditor />
          <p className="text-sm font-['Roboto'] mt-[15px] mb-[10px]">
            Jawaban 4 Benar
          </p>
          <input type="checkbox" checked className="checkbox checkbox-lg" />
        </div>
      </div>

      <Button className="mt-5">
        <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
        <p className="my-auto text-xs">Tambah Jawaban</p>
      </Button>

      <div className="mt-[40px] flex justify-center">
        <Button className="mr-[30px]">
          <p className="text-xs">Batalkan</p>
        </Button>
        <Button>
          <p className="text-xs">Simpan Pertanyaan</p>
        </Button>
      </div>
    </div>
  );
}
