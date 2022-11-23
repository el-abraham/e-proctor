import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/login";
import BankSoal from "./pages/proctor/questions-bank";
import BankSoalBuatPertanyaan from "./pages/proctor/questions-bank/create";
import Session from "./pages/session";
import AfterExam from "./pages/session/after-exam";
import UjianSiswa from "./pages/siswa/ujian";
import DetailUjianSiswa from "./pages/siswa/ujian/detail";
import JadwalUjianSiswa from "./pages/siswa/ujian/jadwal";
import SelesaiUjianSiswa from "./pages/siswa/ujian/selesai";
import TestUjian from "./pages/siswa/ujian/ujian";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedRoute outlet={<Dashboard />} />} />
      <Route path="/ujian" element={<ProtectedRoute outlet={<TestUjian />} />}>
        <Route path="/ujian" element={<UjianSiswa />} />
        <Route path="/ujian/selesai" element={<SelesaiUjianSiswa />} />
        <Route path="/ujian/jadwal" element={<JadwalUjianSiswa />} />
        <Route path="/ujian/detail" element={<DetailUjianSiswa />} />
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
