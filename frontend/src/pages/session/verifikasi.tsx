import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import { useState } from "react";
import Button from "../../components/forms/Button";

export default function VerifikasiKamera() {
  // https://dev.to/0xkoji/use-webcam-with-react-easily-397f
  // https://www.youtube.com/watch?v=0HJ1cMBkWJ4&ab_channel=SyedZano
  //   const img = useState(console.log(webcam.current?.getScreenshot()));

  //   const [image, setImage] = useState<string>();

  //   const capture = useCallback(() => {
  //     const pictureSrc = webcam.current.getScreenshot();
  //     setImage(pictureSrc);
  //   });

  const webcam = useRef<Webcam>(null);

  const [img, setImg] = useState("");

  //   function onClick(e: any) {
  //     console.log
  //     setImg(webcam.current?.getScreenshot());
  //   }

  const showImage = () => {
    setImg(webcam.current!.getScreenshot()!.toString());
  };

  return (
    <div className="bg-[#EFF0F3] min-h-screen py-[30px] px-[50px]">
      <div className="alert alert-warning shadow-lg max-w-xl mx-auto mb-5">
        <div className="mx-auto">
          <ExclamationTriangleIcon className="w-9 h-9" />
          <span>
            Arahkan wajah anda ke dalam frame kamera untuk verifikasi!
          </span>
        </div>
      </div>

      <Webcam
        audio={false}
        ref={webcam}
        className="w-[500px] rounded-lg mx-auto border-2 border-black"
      />

      <img src={img}></img>

      <div className="flex mt-5 justify-center">
        <Link to={"#"}>
          <Button className="mr-5 bg-neutral">
            <p>Kembali</p>
          </Button>
        </Link>
        <button onClick={showImage} className="btn btn-primary">
          Tangkap Layar
        </button>
      </div>
    </div>
  );
}
