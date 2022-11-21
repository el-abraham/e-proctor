import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import Button from "../../../components/forms/Button";

export default function VerifikasiKamera(){
    // https://dev.to/0xkoji/use-webcam-with-react-easily-397f
    const webcam = useRef<Webcam>(null);
    return(
        <div className="bg-[#EFF0F3] min-h-screen py-[30px] px-[50px]">
            <div className="alert alert-warning shadow-lg max-w-xl mx-auto mb-5">
                <div className="mx-auto">
                    <ExclamationTriangleIcon className="w-9 h-9"/>
                    <span>Arahkan wajah anda ke dalam frame kamera untuk verifikasi!</span>
                </div>
            </div>
            
            <Webcam audio={false} ref={webcam} className='w-[500px] rounded-lg mx-auto border-2 border-black' />
            <Link to={'/siswa-preexam'}>
                <Button className='mx-auto flex mt-5'>
                    <p>Kembali</p>
                </Button>
            </Link>
        </div>
    );
}