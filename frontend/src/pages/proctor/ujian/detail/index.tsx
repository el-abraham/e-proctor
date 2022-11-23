import DetailUjianGuru from "./detail-ujian";

const [searchParams] = useSearchParams();

if (searchParams.get("tab") == "ujian") {
  return <DetailUjianGuru />;
} else if (searchParams.get("tab") == "question") {
  return <Category />;
} else if (searchParams.get("tab") == "session") {
  return <Category />;
}
