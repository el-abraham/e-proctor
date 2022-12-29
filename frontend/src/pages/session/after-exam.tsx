import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Button from "../../components/forms/Button";
import useSessionActions from "../../_actions/session.action";
import { sessionInstanceState } from "../../_state/session.state";

export default function AfterExam() {
  const sessionInstance = useRecoilValue(sessionInstanceState);
  const [searchParams] = useSearchParams();
  const sessionActions = useSessionActions();

  const navigate = useNavigate();
  const KembaliUjian = () => {
    navigate(`/exam/session?instance=${searchParams.get("instance")}`);
  };

  useEffect(() => {
    const instance = parseInt(searchParams.get("instance") ?? "") ?? undefined;
    if (instance) {
      sessionActions.info(instance);
    } else {
      return navigate("/ujian");
    }
  }, []);

  return (
    <div className="bg-[#EFF0F3] min-h-screen h-full text-black">
      <div className="relative flex w-full pt-6">
        {/* bg-[#EFF0F3] */}
        <div className="mx-auto">
          <img
            src="https://th.bing.com/th/id/OIP.VOMKwFZfZ3jTK6ET8t5sxQHaNK?w=185&h=329&c=7&r=0&o=5&pid=1.7"
            className="w-[115px] h-[115px] rounded-[10px]"
          />
        </div>
        <div className="absolute h-[60px] right-5">
          <div className="flex">
            <p className="font-['Poppins'] font-normal text-[14px]">
              Rabu, 30 September
            </p>
            <CalendarIcon className="ml-[12px] w-[18px] h-[18px]" />
          </div>
          <div className="flex pl-[60px] mt-3">
            <p className="font-['Poppins'] font-normal text-[14px]">
              10:45 - 12:45
            </p>
            <ClockIcon className="ml-[12px] w-[18px] h-[18px]" />
          </div>
        </div>
      </div>
      <div className="pt-[12px]">
        <h1 className="text-center font-['Poppins'] font-semibold text-[15px]">
          Nama Ujian
        </h1>
        <div className="avatar flex text-black font-['Open Sans'] font-semibold text-sm justify-center mt-[20px]">
          <div className="w-[40px] h-[40px] rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
          <p className="self-center ml-3 text-[14px]">Mary Poppins</p>
        </div>
      </div>
      <div className="text-[14px] h-full mx-auto  mt-[20px] px-[200px]">
        <table className="table table-compact  w-full text-center">
          <thead>
            <tr>
              <th className="w-14">No</th>
              <th className="flex-1">Jawaban</th>
              <th className="flex-1">Status</th>
              <th className="w-40">Opsi</th>
            </tr>
          </thead>
          <tbody className="cursor-pointer">
            {sessionInstance?.questions?.map((value, index) => {
              const labelJawaban = ["A", "B", "C", "D", "E"];
              const indexJawaban = value.question.answers.findIndex(
                (answer) => answer.id == value.answer?.id
              );
              return (
                <ListItemJawaban
                  key={index}
                  no={index + 1}
                  label={labelJawaban[indexJawaban]}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="text-center pb-3">
        <h1 className="font-['Poppins'] text-[15px] mt-[15px]">
          Waktu tersisa: 24 menit
        </h1>
        <Button
          className="bg-base-300 border-none hover:bg-base-300 mt-[15px]"
          onClick={KembaliUjian}
        >
          Kembali ke Ujian
        </Button>
        <br />
        <Button className="border-none mt-[15px]">Finish Ujian</Button>
      </div>
    </div>
  );
}

type ListItemJawabanProps = {
  no: number;
  label?: string | undefined;
};

const ListItemJawaban = (props: ListItemJawabanProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const jumpQuestion = (no: number) => {
    navigate(`/exam/session?q=${no}&instance=${searchParams.get("instance")}`);
  };
  return (
    <tr>
      <td className={`${props.label ? "" : "bg-red-500 text-white"}`}>
        {props.no}
      </td>
      <td className={`${props.label ? "" : "bg-red-500 text-white"}`}>
        {props.label ? props.label : ""}
      </td>
      {props.label ? (
        <td>tersimpan</td>
      ) : (
        <td className="bg-red-500 text-white">tidak tersimpan</td>
      )}
      <td
        className={`${props.label ? "" : "bg-red-500 text-white"}`}
        onClick={() => jumpQuestion(props.no)}
      >
        ubah
      </td>
    </tr>
  );
};
