import { useRecoilValue } from "recoil";
import { detailQuizState } from "../../_state/quiz.state";

type props = {
  name: string;
  timeStart: number;
  timeEnd: number;
  code: string;
  index: number;
};

export default function SessionCard({
  name,
  timeEnd,
  code,
  index,
  timeStart,
}: props) {
  const detailQuiz = useRecoilValue(detailQuizState);
  const convertDate = (unixTime: number) => {
    const date = new Date(unixTime * 1000);
    return date;
  };
  const dateTimeStart = convertDate(timeStart);
  const dateTimeEnd = convertDate(timeEnd);

  return (
    <div
      className="pt-[30px] pl-[40px] pr-[40px] pb-[30px] w-[470px] bg-[#FBFCFC] rounded-[10px]"
      key={index}
    >
      <div className="flex" key={index}>
        <div>
          <h2 className="mb-3 font-['Open Sans'] font-semibold text-sm">
            {name}
          </h2>
          <p className="mb-2 font-['Roboto] text-xs">
            Open :
            {`${dateTimeStart.toLocaleDateString()} ${dateTimeStart.toLocaleTimeString()}`}
          </p>
          <p className="font-['Roboto] text-xs">
            Close :{" "}
            {`${dateTimeEnd.toLocaleDateString()} ${dateTimeEnd.toLocaleTimeString()}`}
          </p>
        </div>
        <div className="ml-[30px] flex">
          <div className="text-center pt-2 pb-2 pl-5 pr-5">
            <p className="font-['Roboto] font-medium text-[25px]">20</p>
            <p className="font-['Roboto] text-sm">Soal</p>
          </div>
          <div className="border-l border-slate-400 text-center pt-2 pb-2 pl-5 pr-5">
            <p className="font-['Roboto] font-medium text-[25px]">120</p>
            <p className="font-['Roboto] text-sm">Menit</p>
          </div>
        </div>
      </div>

      <div className="flex mt-5 justify-between">
        <h1 className="font-['Open Sans'] font-semibold text-[30px]">{code}</h1>
        <div className="avatar-group -space-x-6 ml-6">
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <p className="pl-[35px] self-center">12 Anggota</p>
        </div>
      </div>
    </div>
  );
}
