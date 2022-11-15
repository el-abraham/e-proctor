import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import Button from './Button';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

export default function QuillJsBankSoal(){
    const [pertanyaan, setPertanyaan] = useState("");
    const [jawaban1, setJawaban1] = useState("");
    const [jawaban2, setJawaban2] = useState("");
    const [jawaban3, setJawaban3] = useState("");
    const [jawaban4, setJawaban4] = useState("");
    const [kateg, setKateg] = useState({
      kategori: "",
    })

    function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
      setKateg({kategori: e.target.value});
    }

    const handleForm = (e:any) => {
        e.preventDefault();
        console.log({
          pertanyaan,
          kateg,
          jawaban1,
          jawaban2,
          jawaban3,
          jawaban4,
        });
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <div className="dropdown">
                <p className="text-sm font-['Roboto'] ml-1 mb-1">Pilih Kategori</p>
                <select value={kateg.kategori} onChange={onChange} name="kateg" className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                        Pilih Kategori
                    </option>
                    <option>Kategori A</option>
                    <option>Kategori B</option>
                    </select>
                </div>

                <div>
                {/* BAGIAN PERTANYAAN */}
                <div className="mt-[15px]">
                    <p className="mb-[15px] font-semibold">Pertanyaan</p>
                    <ReactQuill value={pertanyaan} onChange={setPertanyaan} />
                </div>

                {/* BAGIAN JAWABAN */}
                <p className="mt-[40px] font-semibold">Jawaban</p>

                {/* JAWABAN 1 */}
                <div className="mt-5">
                    <p className="mb-[15px]">Jawaban 1</p>
                    <ReactQuill value={jawaban1} onChange={setJawaban1} />
                    <p className="text-sm font-['Roboto'] mt-[15px] mb-[10px]">
                    Jawaban 1 Benar
                    </p>
                    <input type="checkbox" checked className="checkbox checkbox-lg" />
                </div>

                {/* JAWABAN 1 */}
                <div className="mt-5">
                    <p className="mb-[15px]">Jawaban 2</p>
                    <ReactQuill value={jawaban2} onChange={setJawaban2} />
                    <p className="text-sm font-['Roboto'] mt-[15px] mb-[10px]">
                    Jawaban 2 Benar
                    </p>
                    <input type="checkbox" checked className="checkbox checkbox-lg" />
                </div>

                {/* JAWABAN 3 */}
                <div className="mt-5">
                    <p className="mb-[15px]">Jawaban 3</p>
                    <ReactQuill value={jawaban3} onChange={setJawaban3} />
                    <p className="text-sm font-['Roboto'] mt-[15px] mb-[10px]">
                    Jawaban 3 Benar
                    </p>
                    <input type="checkbox" checked className="checkbox checkbox-lg" />
                </div>

                {/* JAWABAN 4 */}
                <div className="mt-5">
                    <p className="mb-[15px]">Jawaban 4</p>
                    <ReactQuill value={jawaban4} onChange={setJawaban4}/>
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
            </form>
        </div>
    );
}