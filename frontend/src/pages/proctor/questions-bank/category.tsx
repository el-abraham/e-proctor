import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../../../components/others/Breadcrumbs";
import Button from "../../../components/forms/Button";
import { NavbarEnum } from "../../../components/sidebar/SidebarGuru";
import SidebarGuru from "../../../components/sidebar/SidebarGuru";
import Header from "./header";
import TabsBankSoal from "./tabs";
import useQuestionActions from "../../../_actions/question.actions";
import { useRecoilValue } from "recoil";
import { listCategoryState } from "../../../_state/category.state";
import QuestionCategory from "../../../_models/question-category";

type FormValues = {
  parentkateg: string;
  namakateg: string;
};

export default function Category() {
  const questionActions = useQuestionActions();

  const listCategory = useRecoilValue(listCategoryState);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    questionActions.categories();
  }, []);

  useEffect(() => {
    if (listCategory != undefined) {
      setLoading(false);
    }
  }, [listCategory]);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="bg-[#EFF0F3] min-h-screen h-full flex text-black">
      <ModalAddCategory />
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
          <p className="py-4">
            Apakah anda yakin ingin menghapus kategori ini?
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
      <SidebarGuru active={NavbarEnum.BANKSOAL} />

      {/* BUTTON BUAT UJIAN, CARI UJIAN(?), ICON NOTIFIKASI, DAN SETTINGS */}
      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <Header />
        <Breadcrumbs />
        <TabsBankSoal />

        <label htmlFor="add-kategori" className="btn btn-primary mr-5 my-5">
          <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
          <p className="my-auto text-xs">Buat Kategori Baru</p>
        </label>

        <div className="overflow-x-auto font-['Roboto'] mb-[30px]">
          <table className="table table-zebra w-full text-sm">
            <thead>
              <tr className="text-sm capitalize">
                <td>No</td>
                <th>Nama Kategori</th>
                <th>Jumlah Pertanyaan</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {listCategory?.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{++index}</td>
                    <td>{value.name}</td>
                    <td>20 Soal</td>
                    <td className="flex gap-[15px]">
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
      </div>
    </div>
  );
}

const ModalAddCategory = () => {
  const listCategory = useRecoilValue(listCategoryState);
  const questionActions = useQuestionActions();

  const parentRef = useRef<HTMLSelectElement>(null);
  const kategoriRef = useRef<HTMLInputElement>(null);
  const deskripsiRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      kategoriRef.current?.value != undefined ||
      kategoriRef.current?.value != null
    ) {
      const question = new QuestionCategory({
        name: kategoriRef.current.value,
        description: deskripsiRef.current?.value,
        parentId:
          parentRef.current?.value && parentRef.current.value != ""
            ? parseInt(parentRef.current.value)
            : undefined,
      });

      questionActions.addCategory(question).finally(() => location.reload());
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="checkbox" id="add-kategori" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box relative">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Tambah Kategori</h3>
              <label
                htmlFor="add-kategori"
                className="btn btn-outline btn-xs btn-circle"
              >
                ✕
              </label>
            </div>
            <div className="block">
              <div className=" flex w-full items-center mt-5">
                <p className="w-32">Parent</p>
                <select
                  defaultValue={""}
                  ref={parentRef}
                  className="select select-sm select-bordered rounded text-sm w-full flex-1"
                >
                  <option disabled value={""}>
                    Pilih Parent Kategori
                  </option>
                  <option value={""}>none</option>
                  {listCategory?.map((value, index) => {
                    return (
                      <option key={index} value={value.id}>
                        {value.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className=" flex w-full items-center mt-5">
                <p className="w-32">Kategori</p>
                <input
                  type="text"
                  name="kategori"
                  ref={kategoriRef}
                  required
                  placeholder="Masukkan nama kategori ..."
                  className="input input-sm input-bordered rounded text-sm w-full flex-1"
                />
              </div>
              <div className=" flex w-full items-center mt-5">
                <p className="w-32">Deskripsi</p>
                <input
                  type="text"
                  name="deskripsi"
                  ref={deskripsiRef}
                  placeholder="opsional"
                  className="input input-sm input-bordered rounded text-sm w-full flex-1"
                />
              </div>
            </div>
            <div className="modal-action">
              <button className="btn btn-base btn-sm capitalize rounded">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
