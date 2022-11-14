import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

type SoalType = {
  id: number;
  text: string;
  jawaban: JawabanType[];
  answer: JawabanType | undefined;
};

type JawabanType = {
  id: number;
  text: string;
  status: boolean;
};

export default function InSession() {
  const [soal, setSoal] = useState<SoalType[]>([
    {
      id: 1,
      text: "Seseorang melakukan pengukuran tebal buku tulis dengan jangka sorong. Hasil pengukurannya adalah 5,24 mm. Dengan memperhitungkan kesalahan mutlak, pembacaan dari hasil pengukuran tersebut dapat dituliskan menjadi ....",
      jawaban: [
        {
          id: 1,
          text: "(5,24 + 0,01) mm",
          status: false,
        },
        {
          id: 2,
          text: "(5,24 + 0,05) mm",
          status: true,
        },
        {
          id: 3,
          text: "5,24 + 0,1) mm",
          status: false,
        },
        {
          id: 4,
          text: "(5,24 + 0,5) mm",
          status: false,
        },
        {
          id: 5,
          text: "(5,24 + 1) mm",
          status: false,
        },
      ],
      answer: undefined,
    },
    {
      id: 2,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, optio?",
      jawaban: [
        {
          id: 1,
          text: "(5,24 + 0,01) mm",
          status: false,
        },
        {
          id: 2,
          text: "(5,24 + 0,05) mm",
          status: true,
        },
        {
          id: 3,
          text: "5,24 + 0,1) mm",
          status: false,
        },
        {
          id: 4,
          text: "(5,24 + 0,5) mm",
          status: false,
        },
        {
          id: 5,
          text: "(5,24 + 1) mm",
          status: false,
        },
      ],
      answer: undefined,
    },
  ]);

  const [currentSoal, setCurrentSoal] = useState(soal[0]);

  const selectJawaban = (id: number, jawabanIndex: number) => {
    const updateSoal = soal.map((value) => {
      if (value.id != id) return value;
      value.answer = value.jawaban.at(jawabanIndex)!;
      return value;
    });
    setSoal(updateSoal);
  };

  const changeCurrentSoal = (no: number) => {
    setCurrentSoal(soal[no]);
  };

  const nextSoal = () => {
    const currentSoalIndex = soal.indexOf(currentSoal);
    if (currentSoalIndex < soal.length - 1) {
      changeCurrentSoal(currentSoalIndex + 1);
    }
  };

  const prevSoal = () => {
    const currentSoalIndex = soal.indexOf(currentSoal);
    if (currentSoalIndex > 0) {
      changeCurrentSoal(currentSoalIndex - 1);
    }
  };

  return (
    <div className="bg-[#EFF0F3] w-full h-full min-h-screen">
      <div className="container pt-[60px] mx-auto">
        <div className="flex space-x-10">
          <div className="flex-1">
            <h1 className="font-['Poppins'] font-semibold text-2xl">
              Ujian Linguistik
            </h1>
            <div className="mt-5 card w-full bg-white rounded-md shadow-md text-sm">
              <div className="card-body py-3 px-5">
                Ujian ini dimonitor oleh pengawas. Mohon kerjakan ujian ini
                dengan baik.
              </div>
            </div>

            <div className="mt-5 mb-5 pb-3 card w-full bg-white rounded-md shadow-md">
              <div className="card-body py-3 px-5">
                <div className="border-b border-black p-2">
                  <h3>Soal 1</h3>
                </div>

                <CurrentSoalItem soal={currentSoal} onSelect={selectJawaban} />

                <div className="mt-5 px-2 flex justify-between">
                  <div
                    className={`flex py-3 px-5 rounded-md shadow-[0_0_3px_rgba(0,0,0,0.15)] items-center cursor-pointer`}
                    onClick={prevSoal}
                  >
                    Soal sebelumnya
                  </div>
                  <div
                    className={`flex py-3 px-5 rounded-md shadow-[0_0_3px_rgba(0,0,0,0.15)] items-center cursor-pointer`}
                    onClick={nextSoal}
                  >
                    Soal selanjutnya
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[310px]">
            <div>
              <span className="countdown font-mono text-2xl">
                <span style={{ "--value": 10 }}></span>:
                <span style={{ "--value": 24 }}></span>:
                <span style={{ "--value": 48 }}></span>
              </span>
            </div>
            <div className="mt-5 mb-5 pb-3 card w-full bg-white rounded-md shadow-md">
              <div className="card-body py-3 px-5">
                <div className="border-b border-black p-2">
                  <h3>Daftar Soal</h3>
                </div>
                <div className="mt-2">
                  <div className="grid grid-cols-5 gap-4">
                    {soal.map((value, index) => {
                      const no = index + 1;
                      return (
                        <ItemDaftarSoal
                          key={index}
                          selected={value.id == currentSoal.id}
                          number={no}
                          onClick={() => changeCurrentSoal(index)}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="bg-[#FCC666] py-[6px] px-5 rounded text-sm shadow-[0_0_3px_rgba(0,0,0,0.20)]">
                      Finish
                    </div>
                    <div className="border border-black rounded p-2">
                      <ChevronRightIcon className="w-4 h-4 text-black stroke-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type CurrentSoalProps = {
  soal: SoalType;
  onSelect: (id: number, jawabanIndex: number) => void;
};

const CurrentSoalItem = ({ soal, onSelect }: CurrentSoalProps) => {
  const labelJawaban = ["A", "B", "C", "D", "E"];

  return (
    <Fragment>
      <p className="pt-5 px-2 leading-relaxed">{soal.text}</p>

      <div className="mt-5 px-2 space-y-7">
        {soal.jawaban.map((value, index) => {
          return (
            <div
              key={index}
              className={`flex w-full px-5 py-3 ${
                soal.answer != undefined
                  ? soal.answer.id == value.id
                    ? "bg-base-300 text-white"
                    : "bg-white"
                  : "bg-white"
              } rounded-md drop-shadow-[0_0_3px_rgba(0,0,0,0.15)] items-center cursor-pointer`}
              onClick={() => onSelect(soal.id, index)}
            >
              <label
                className={`border ${
                  soal.answer != undefined
                    ? soal.answer.id == value.id
                      ? "border-white"
                      : "border-black"
                    : "border-black"
                } rounded-md flex w-6 h-6 place-content-center text-sm`}
              >
                {labelJawaban.at(index)}
              </label>
              <p className="ml-5">{value.text}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

type ItemDaftarSoalProps = {
  number: number;
  answered?: boolean;
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const ItemDaftarSoal = (props: ItemDaftarSoalProps) => {
  const align =
    props.number % 5 > 1
      ? "justify-self-center"
      : props.number % 5 == 0
      ? "justify-self-end"
      : "";
  return (
    <div
      onClick={props.onClick}
      className={`flex ${align} ${
        props.selected && "bg-base-300 text-white"
      } place-content-center items-center rounded-md w-9 h-12 border border-black cursor-pointer`}
    >
      {props.number}
    </div>
  );
};
