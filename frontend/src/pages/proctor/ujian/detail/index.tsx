import { useSearchParams } from "react-router-dom";
import DetailUjianGuru from "./detail";

export default function DetailUjian() {
  const [searchParams] = useSearchParams();

  if (searchParams.get("tab") == "ujian") {
    return <DetailUjianGuru />;
  } else if (searchParams.get("tab") == "question") {
    // return <Category />;
  } else if (searchParams.get("tab") == "session") {
    // return <Category />;
  }
}
