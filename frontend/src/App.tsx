import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard";
import DetailUjian from "./pages/detail-ujian";
import LoginPage from "./pages/login";
import BankSoal from "./pages/proctor/questions-bank";
import BankSoalBuatPertanyaan from "./pages/proctor/questions-bank/create";
import TambahUjian from "./pages/proctor/ujian/create";
import DetailUjianGuruIndex from "./pages/proctor/ujian/detail/detail";
import DetailQuestionsGuru from "./pages/proctor/ujian/detail/questions";
import DetailSessionsGuru from "./pages/proctor/ujian/detail/session";
import Session from "./pages/session";

import AfterExam from "./pages/session/after-exam";
import PreExam from "./pages/session/pre-exam";
import Pengaturan from "./pages/siswa/pengaturan";

import JadwalUjianSiswa from "./pages/siswa/ujian/jadwal";
import SelesaiUjianSiswa from "./pages/siswa/ujian/selesai";
import Ujian from "./pages/ujian";
import UjianWrapper from "./pages/ujian-wrap";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<ProtectedRoute outlet={<Dashboard />} />} />

      <Route path="/ujian/selesai" element={<SelesaiUjianSiswa />} />
      <Route path="/ujian/jadwal" element={<JadwalUjianSiswa />} />

      <Route
        path="/ujian"
        element={<ProtectedRoute outlet={<UjianWrapper />} />}
      >
        <Route path="/ujian" element={<Ujian />} />
        <Route path="/ujian/detail" element={<DetailUjian />} />
        <Route path="/ujian/create" element={<TambahUjian />} />
        {/* <Route path="/ujian/detail/ujian" element={<DetailUjianGuruIndex />} /> */}
        {/* <Route
          path="/ujian/detail/questions"
          element={<DetailQuestionsGuru />}
        /> */}
        {/* <Route path="/ujian/detail/session" element={<DetailSessionsGuru />} /> */}
      </Route>

      <Route
        path="/q/bank"
        element={<ProtectedRoute outlet={<BankSoal />} />}
      />
      <Route
        path="/q/bank/create"
        element={<ProtectedRoute outlet={<BankSoalBuatPertanyaan />} />}
      />

      <Route
        path="/exam/session"
        element={<ProtectedRoute outlet={<Session />} />}
      />
      <Route
        path="/exam/session/pre"
        element={<ProtectedRoute outlet={<PreExam />} />}
      />

      <Route path="/pengaturan" element={<Pengaturan />} />

      <Route path="/exam/session/finish" element={<AfterExam />} />
    </Routes>
  );
};

export default App;
