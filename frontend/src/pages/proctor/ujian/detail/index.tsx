import { useEffect } from "react";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import useQuizActions from "../../../../_actions/quiz.actions";
import { detailQuizState, listQuizState } from "../../../../_state/quiz.state";
import DetailUjianGuruIndex from "./detail";
import DetailQuestionsGuru from "./questions";
import DetailSessionsGuru from "./session";

export default function DetailUjianGuru() {
  const [searchParams] = useSearchParams();
  const quizActions = useQuizActions();
  const listQuiz = useRecoilValue(listQuizState);
  const [detailQuiz, setDetailQuiz] = useRecoilState(detailQuizState);

  if (searchParams.get("q") == null) {
    return <Navigate to={{ pathname: "/ujian" }} />;
  }

  useEffect(() => {
    const id = searchParams.get("q");
    if (listQuiz && listQuiz.length > 0) {
      listQuiz.forEach((value) => {
        if (value.id == parseInt(id!)) {
          setDetailQuiz(value);
          return;
        }
      });
    }

    return () => {
      setDetailQuiz(undefined);
    };
  }, [listQuiz]);

  useEffect(() => {
    if (listQuiz == undefined) {
      quizActions.quiz();
    }
  }, []);

  if (searchParams.get("tab") == "questions") {
    return <DetailQuestionsGuru />;
  } else if (searchParams.get("tab") == "session") {
    return <DetailSessionsGuru />;
  }
  return <DetailUjianGuruIndex />;
}
