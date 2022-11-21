import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/login";
import UjianSiswa from "./pages/siswa/ujian";
import DetailUjianSiswa from "./pages/siswa/ujian/detail";
import TestUjian from "./pages/siswa/ujian/ujian";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedRoute outlet={<Dashboard />} />} />
      <Route path="/ujian" element={<ProtectedRoute outlet={<TestUjian />} />}>
        <Route
          path="/ujian"
          element={<ProtectedRoute outlet={<UjianSiswa />} />}
        />
        <Route
          path="/ujian/detail"
          element={<ProtectedRoute outlet={<DetailUjianSiswa />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
