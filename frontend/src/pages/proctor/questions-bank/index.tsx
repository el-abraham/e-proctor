import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useQuestionActions from "../../../_actions/question.actions";
import Category from "./category";
import Question from "./question";

export default function BankSoal() {
  const [searchParams] = useSearchParams();

  if (searchParams.get("tab") == "category") {
    return <Category />;
  }
  return <Question />;
}
