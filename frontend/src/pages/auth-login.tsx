import { useEffect, useRef } from "react";
import Webcam from "react-webcam";

const AuthLogin = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const video = useRef(null);

  const getVideo = () => {
    return navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 1280,
          height: 720,
        },
      })
      .then((stream) => {
        let video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video.play;
        }
      })
      .catch((err) => {
        // console.error(err);
        console.log("oe");
      });
  };

  // useEffect(() => {
  //   getVideo();
  // }, [videoRef]);

  return (
    <div>
      <div>
        <Webcam ref={video} />
        {/* <video ref={videoRef} src=""></video> */}
      </div>
    </div>
  );
};

export { AuthLogin };
