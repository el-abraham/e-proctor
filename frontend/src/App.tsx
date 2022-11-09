import { Routes, Route } from "react-router-dom";
import DetailUjian from "./components/DetailUjian";
import InSession from "./pages/InSession";
import TestSoal from "./pages/TestSoal";
import UjianAnda from "./pages/UjianAnda";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UjianAnda />} />
      <Route path="/insession" element={<InSession />} />
      <Route path="/test-soal" element={<TestSoal />} />
      <Route path="/detail-ujian" element={<DetailUjian />} />
    </Routes>
  );
}

export default App;
