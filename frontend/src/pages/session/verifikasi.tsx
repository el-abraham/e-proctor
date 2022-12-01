import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { useState } from "react";
import Button from "../../components/forms/Button";

const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: "user",
};

export default function VerifikasiKamera() {
  const navigate = useNavigate();

  const webcam = useRef<Webcam>(null);
  const [img, setImg] = useState("");
  const showImage = () => {
    setImg(webcam.current!.getScreenshot()!.toString());
  };

  const PreExam = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#EFF0F3] min-h-screen py-[30px] px-[50px]">
      <div className="alert alert-warning shadow-lg max-w-xl mx-auto mb-5">
        <div className="mx-auto">
          <ExclamationTriangleIcon className="w-8 h-8" />
          <span>
            Arahkan wajah anda ke dalam frame kamera untuk verifikasi!
          </span>
        </div>
      </div>
      <div className="flex gap-x-5 w-fit mx-auto">
        <Webcam
          audio={false}
          ref={webcam}
          mirrored
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="rounded-lg mx-auto border-2 border-black"
        />
        <img
          src={img}
          className="w-[500px] rounded-lg mx-auto border-2 border-black border-opacity-60 border-dashed"
        ></img>
      </div>

      <div className="flex mt-5 justify-center">
        <Button className="mr-5 bg-neutral" onClick={PreExam}>
          <p>Kembali</p>
        </Button>
        <button onClick={showImage} className="btn btn-primary">
          Tangkap Layar
        </button>
      </div>
    </div>
  );
}
