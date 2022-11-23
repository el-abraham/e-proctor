import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard";
import DetailUjian from "./pages/detail-ujian";
import LoginPage from "./pages/login";
import BankSoal from "./pages/proctor/questions-bank";
import BankSoalBuatPertanyaan from "./pages/proctor/questions-bank/create";
import UjianSiswa from "./pages/siswa/ujian";
import DetailUjianSiswa from "./pages/siswa/ujian/detail";
import TestUjian from "./pages/siswa/ujian/ujian";
import Ujian from "./pages/ujian";
import UjianWrapper from "./pages/ujian-wrap";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<ProtectedRoute outlet={<Dashboard />} />} />

      <Route
        path="/ujian"
        element={<ProtectedRoute outlet={<UjianWrapper />} />}
      >
        <Route path="/ujian" element={<Ujian />} />
        <Route path="/ujian/detail" element={<DetailUjian />} />
      </Route>

      <Route
        path="/q/bank"
        element={<ProtectedRoute outlet={<BankSoal />} />}
      />
      <Route
        path="/q/bank/create"
        element={<ProtectedRoute outlet={<BankSoalBuatPertanyaan />} />}
      />
    </Routes>
  );
};

export default App;
