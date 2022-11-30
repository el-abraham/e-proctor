import {
  EyeIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Button from "../../../../components/forms/Button";
import Breadcrumbs from "../../../../components/others/Breadcrumbs";
import NamaUjian from "../../../../components/others/NamaUjian";
import SidebarGuru, {
  NavbarEnum,
} from "../../../../components/sidebar/SidebarGuru";
import useQuestionActions from "../../../../_actions/question.actions";
import useQuizActions from "../../../../_actions/quiz.actions";
import { GetQuestionsTypes } from "../../../../_api/question";
import Question from "../../../../_models/question.model";
import { listCategoryState } from "../../../../_state/category.state";
import { detailQuizState } from "../../../../_state/quiz.state";
import Header from "../../questions-bank/header";
import TabsDetailUjianGuru from "./tabs";

export default function DetailQuestionsGuru() {
  const detailQuiz = useRecoilValue(detailQuizState);
  const listCategory = useRecoilValue(listCategoryState);
  const questionActions = useQuestionActions();

  const [modalBankSoal, setModalBankSoal] = useState<boolean>(false);

  const closeModal = () => setModalBankSoal(false);
  const openModal = () => setModalBankSoal(true);

  useEffect(() => {
    if (listCategory == undefined) {
      questionActions.categories();
    }
  }, []);

  return (
    <div className="bg-[#EFF0F3] min-h-screen flex text-black">
      <input type="checkbox" id="trash-icon" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="trash-icon"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Hapus Question</h3>
          <p className="py-4">
            Apakah anda yakin ingin menghapus question ini?
          </p>
          <div className="modal-action">
            <label htmlFor="trash-icon" className="btn btn-primary">
              Ya
            </label>
            <label htmlFor="trash-icon" className="btn">
              Tidak
            </label>
          </div>
        </div>
      </div>

      {modalBankSoal ? <ModalFromBankSoal close={closeModal} /> : <div></div>}

      {/* SIDEBAR */}
      <SidebarGuru active={NavbarEnum.UJIANANDA} />

      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <Header />
        {/* <Breadcrumbs /> */}
        <div className="text-xs breadcrumbs font-['Roboto'] mt-[15px] mb-[20px] text-black">
          <ul>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Ujian Anda</a>
            </li>
            <li>Questions</li>
          </ul>
        </div>
        <NamaUjian title={detailQuiz?.title} />
        <TabsDetailUjianGuru />

        <p className="font-['Open Sans'] font-semibold text-sm my-[30px]">
          Total Pertanyaan: {detailQuiz?.questions?.length}
        </p>

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-primary m-1">
            <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
            <p className="my-auto text-xs">Question</p>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/guru-ujiananda-question-lihat"}>
                <PlusCircleIcon className="h-[20px] w-[20px] my-auto" />
                <p className="my-auto text-xs">Buat Pertanyaan Baru</p>
              </Link>
            </li>
            <li>
              {/* <label htmlFor="bank-soal"> */}
              <div onClick={openModal}>
                <PlusCircleIcon className="h-[20px] w-[20px] my-auto" />
                <p className="my-auto text-xs">Dari Bank Soal</p>
              </div>
              {/* </label> */}
            </li>
          </ul>
        </div>

        {detailQuiz?.questions?.length ? (
          <div className="overflow-x-auto font-['Roboto'] my-[30px]">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <td className="w-5">No</td>
                  <th>Soal</th>
                  <th className="w-36">Aksi</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {detailQuiz?.questions?.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{++index}</td>
                      <td>{value.name}</td>
                      <td className="flex gap-[15px]">
                        <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
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
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

type ModalFromBankSoalProps = {
  close: () => void;
};

const ModalFromBankSoal = (props: ModalFromBankSoalProps) => {
  const detailQuiz = useRecoilValue(detailQuizState);
  const quizActions = useQuizActions();
  const [category, setCategory] = useState<number>();
  const listCategory = useRecoilValue(listCategoryState);
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const [listQuestionTemp, setListQuestionTemp] = useState<Question[]>([]);

  const modalController = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isChecked) {
      setIsChecked(!isChecked);
      props.close();
    }
  };

  const categoryHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(parseInt(e.currentTarget.value));
  };

  const [listQuestion, setListQuestion] = useState<Question[] | undefined>(
    undefined
  );

  const checklistQuestionHandler = (
    event: ChangeEvent<HTMLInputElement>,
    question: Question
  ) => {
    if (event.currentTarget.checked) {
      setListQuestionTemp([...listQuestionTemp, question]);
    } else {
      setListQuestionTemp([
        ...listQuestionTemp.filter((value) => value.id != question.id),
      ]);
    }
  };

  const submitQuestion = async () => {
    if (listQuestionTemp.length) {
      quizActions.addQuestions(detailQuiz!, listQuestionTemp).then((value) => {
        if (value) {
          props.close();
        }
      });
    }
  };

  useEffect(() => {
    const getQuestions = async () => {
      const questions = await quizActions.questions({
        category: category!,
      });
      setListQuestion(questions);
    };
    if (category != undefined && category != 0) {
      getQuestions();
    }
    return () => {
      setListQuestion(undefined);
    };
  }, [category]);

  useEffect(() => {
    if (listCategory != undefined && listCategory.length) {
      setCategory(listCategory.at(0)!.id);
    }
  }, []);

  // useEffect(() => {
  //   console.log(listQuestion);
  // }, [listQuestion]);

  // useEffect(() => {
  //   console.log(listQuestionTemp);
  // }, [listQuestionTemp]);

  return (
    <div>
      <input
        checked={isChecked}
        onChange={modalController}
        type="checkbox"
        id="bank-soal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="bank-soal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Tambah Question dari Bank Soal</h3>
          <div className="block">
            {/* SELECT TAG */}
            <div className="dropdown flex w-full mt-5 items-center">
              <p className="font-semibold self-center mr-8">Pilih Kategori</p>
              <select
                onChange={categoryHandler}
                value={category}
                // ref={categoryRef}
                className="select select-sm rounded select-bordered flex-1 h-auto"
              >
                {listCategory?.map((value, index) => {
                  return (
                    <option key={index} value={value.id}>
                      {value.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mt-2">soal dipilih : {listQuestionTemp.length}</div>
            {/* TABLE */}
            <div className="overflow-x-auto font-['Roboto'] my-[30px]">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th className="w-10">
                      {/* <input
                        type="checkbox"
                        className="checkbox checkbox-xs rounded-none"
                      /> */}
                    </th>
                    <th className="flex-1">Soal</th>
                    <th className="w-36">Aksi</th>
                  </tr>
                </thead>

                <tbody className="text-sm">
                  {listQuestion?.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            defaultChecked={
                              listQuestionTemp.find((val) => val.id == value.id)
                                ? true
                                : false
                            }
                            type="checkbox"
                            className="checkbox checkbox-xs rounded-none"
                            onChange={(e) => checklistQuestionHandler(e, value)}
                          />
                        </td>
                        <td>{value.name}</td>
                        <td className="flex gap-[15px]">
                          <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* PAGING */}
            <div className="justify-between flex mb-8">
              <p className="font-['Open Sans'] text-sm self-center">
                <u>Show all</u>
              </p>
              <div className="btn-group">
                <button className="btn btn-md">1</button>
                <button className="btn btn-md btn-active">2</button>
                <button className="btn btn-md">3</button>
                <button className="btn btn-md">4</button>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <Button
              onClick={submitQuestion}
              htmlFor="bank-soal"
              className="btn-primary"
            >
              Tambah ke Ujian
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
