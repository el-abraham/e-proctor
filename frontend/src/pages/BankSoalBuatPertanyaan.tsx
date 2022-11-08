import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/Button";
import ReactQuill, { Quill } from "react-quill";
import { useState } from "react";

// https://npm.io/package/react-quilljs

// type FormValues = {
//     pertanyaan: string;
//     jawaban1: string;
//     jawaban2: string;
//     jawaban3: string;
//     jawaban4: string;
// };

export default function BankSoalBuatPertanyaan() {
    // const [savedText, setSavedText] = useState("");
    
    // const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    //       e.preventDefault();
    //       const text = quill.getText();
    //       console.log(text);
    //     };
        
    // const [ form, setForm] = useState<FormValues>({
    //     pertanyaan: "",
    //     jawaban1: "",
    //     jawaban2: "",
    //     jawaban3: "",
    //     jawaban4: "",
    // });
        
    // const { quill, quillRef } = useQuill();

    // React.useEffect(() => {
    //     if (quill) {
    //         quill.on('text-change', (delta, oldDelta, source) => {
    //             console.log('Text change!');
    //             console.log(quill.getText()); // Get text only
    //             console.log(quill.getContents()); // Get delta contents
    //             console.log(quill.root.innerHTML); // Get innerHTML using quill
    //             console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
    //         });
    //     }
    // }, [quill]);

    // function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     console.log(quill?.getText());
    // }

    // function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     console.log(e);
    // }

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
    <div className="px-[70px] py-[30px] bg-[#EFF0F3] text-black">
      <Breadcrumbs />

      <h1 className="font-['Open Sans'] font-bold text-[25px]">
        Buat Pertanyaan
      </h1>

      <form onSubmit={handleForm}>
        <div className="dropdown mt-[30px]">
          <p className="text-sm font-['Roboto'] ml-1 mb-1">Pilih Kategori</p>
          <select value={kateg.kategori} onChange={onChange} name="kateg" className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Pilih Kategori
            </option>
            <option>Kategori A</option>
            <option>Kategori B</option>
          </select>
        </div>

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
