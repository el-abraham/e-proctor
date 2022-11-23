import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard";
import DetailUjian from "./pages/detail-ujian";
import LoginPage from "./pages/login";
import BankSoal from "./pages/proctor/questions-bank";
import BankSoalBuatPertanyaan from "./pages/proctor/questions-bank/create";
import TambahUjian from "./pages/proctor/ujian/create";
import DetailUjianGuru from "./pages/proctor/ujian/detail/detail";
import DetailQuestionsGuru from "./pages/proctor/ujian/detail/questions";
import DetailSessionsGuru from "./pages/proctor/ujian/detail/session";
import Session from "./pages/session";
import AfterExam from "./pages/session/after-exam";
import UjianSiswa from "./pages/siswa/ujian";
import DetailUjianSiswa from "./pages/siswa/ujian/detail";
import JadwalUjianSiswa from "./pages/siswa/ujian/jadwal";
import SelesaiUjianSiswa from "./pages/siswa/ujian/selesai";
import TestUjian from "./pages/siswa/ujian/ujian";
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
        <Route path="/ujian/detail/ujian" element={<DetailUjianGuru />} />
        <Route
          path="/ujian/detail/questions"
          element={<DetailQuestionsGuru />}
        />
        <Route path="/ujian/detail/session" element={<DetailSessionsGuru />} />
      </Route>

      <Route
        path="/q/bank"
        element={<ProtectedRoute outlet={<BankSoal />} />}
      />
      <Route
        path="/q/bank/create"
        element={<ProtectedRoute outlet={<BankSoalBuatPertanyaan />} />}
      />
      <Route path="/exam/session" element={<Session />} />
      <Route path="/exam/session/finish" element={<AfterExam />} />
    </Routes>
  );
};

export default App;
