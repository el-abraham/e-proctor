import { Route, Routes } from "react-router-dom";
import "./App.css";
import BankSoal from "./pages/guru/bank-soal/BankSoal";
import BankSoalBuatPertanyaan from "./pages/guru/bank-soal/BankSoalBuatPertanyaan";
import Daftar from "./pages/umum/Daftar";
import DashboardGuru from "./pages/guru/dashboard/DashboardGuru";
import Kategori from "./pages/guru/bank-soal/Kategori";
import LoginPage from "./pages/umum/Login";
import TambahUjian from "./pages/guru/dashboard/TambahUjian";
import TampilUjian from "./pages/guru/dashboard/TampilUjian";
import UjianAnda from "./pages/guru/ujian-anda/UjianAnda";
import UjianAndaQuestion from "./pages/guru/ujian-anda/UjianAndaQuestion";
import UjianAndaQuestionLihat from "./pages/guru/ujian-anda/UjianAndaQuestionLihat";
import UjianAndaSession from "./pages/guru/ujian-anda/UjianAndaSession";
import UjianAndaUjian from "./pages/guru/ujian-anda/UjianAndaUjian";
import DashboardSiswa from "./pages/siswa/dashboard/DashboardSiswa";
import UjianAndaUjianSiswa from "./pages/siswa/ujian-anda/UjianAndaUjianSiswa";
import UjianAndaJadwalSiswa from "./pages/siswa/ujian-anda/UjianAndaJadwalSiswa";
import UjianAndaSelesaiSiswa from "./pages/siswa/ujian-anda/UjianAndaSelesaiSiswa";
import DetailUjian from "./components/DetailUjian";
import InSession from "./pages/InSession";
import TestSoal from "./pages/TestSoal";

import Pengaturan from "./pages/siswa/dashboard/Pengaturan";
import DetailUjianSiswa from "./pages/siswa/ujian-anda/DetailUjianSiswa";
import Login from "./pages/umum/Login";
import { AuthLogin } from "./pages/auth-login";
import UjianAndaAfterExam from "./pages/siswa/ujian-anda/UjianAndaAfterExam";

function App() {
  return (
    <>
      <Routes>
        {/* ROUTE UNTUK ROLE UMUM */}

        <Route path="/login" element={<Login />}></Route>
        <Route path="/daftar" element={<Daftar />}></Route>
        <Route path="/testing" element={<AuthLogin />}></Route>
      </Routes>

      <Routes>
        {/* ROUTE UNTUK ROLE GURU */}

        <Route path="/guru/dashboard" element={<DashboardGuru />}></Route>
        <Route path="/guru/ujian" element={<UjianAnda />}></Route>
        <Route path="/buat-ujian" element={<TambahUjian />}></Route>
        <Route path="/detail-ujian" element={<UjianAndaUjian />}></Route>
        <Route path="/detail-questions" element={<UjianAndaQuestion />}></Route>
        <Route path="/detail-session" element={<UjianAndaSession />}></Route>
        <Route
          path="/lihat-questions"
          element={<UjianAndaQuestionLihat />}
        ></Route>
        <Route path="/guru-tampilujian" element={<TampilUjian />}></Route>
        <Route path="/guru/bank-soal" element={<BankSoal />}></Route>
        <Route path="/guru/kategori" element={<Kategori />}></Route>
        <Route
          path="/guru/bank-soal/create-questions"
          element={<BankSoalBuatPertanyaan />}
        ></Route>
        <Route path="/guru/pengaturan" element={<Pengaturan />}></Route>
      </Routes>

      <Routes>
        {/* ROUTE UNTUK ROLE SISWA */}

        <Route path="/siswa/dashboard" element={<DashboardSiswa />}></Route>
        <Route path="/siswa/ujian" element={<UjianAndaUjianSiswa />}></Route>
        <Route path="/siswa/jadwal" element={<UjianAndaJadwalSiswa />}></Route>
        <Route
          path="/siswa/selesai"
          element={<UjianAndaSelesaiSiswa />}
        ></Route>
        <Route path="/selesai-ujian" element={<UjianAndaAfterExam />}></Route>

        {/* <Route path="/" element={<UA />} /> */}
        <Route path="/insession" element={<InSession />} />
        <Route path="/test-soal" element={<TestSoal />} />
        <Route path="/siswa/detail-ujian" element={<DetailUjianSiswa />} />

        <Route path="/siswa/pengaturan" element={<Pengaturan />}></Route>
      </Routes>
    </>
  );
}

export default App;
