import { Route, Routes } from 'react-router-dom';
import './App.css'
import BankSoal from './pages/guru/bank-soal/BankSoal';
import BankSoalBuatPertanyaan from './pages/guru/bank-soal/BankSoalBuatPertanyaan';
import Daftar from './pages/umum/Daftar';
import DashboardGuru from './pages/guru/dashboard/DashboardGuru';
import Kategori from './pages/guru/bank-soal/Kategori';
import Login from './pages/umum/Login';
import TambahUjian from './pages/guru/dashboard/TambahUjian';
import TampilUjian from './pages/guru/dashboard/TampilUjian';
import UjianAnda from './pages/guru/ujian-anda/UjianAnda';
import UjianAndaQuestion from './pages/guru/ujian-anda/UjianAndaQuestion';
import UjianAndaQuestionLihat from './pages/guru/ujian-anda/UjianAndaQuestionLihat';
import UjianAndaSession from './pages/guru/ujian-anda/UjianAndaSession';
import UjianAndaUjian from './pages/guru/ujian-anda/UjianAndaUjian';
import DashboardSiswa from './pages/siswa/DashboardSiswa';
import UjianAndaUjianSiswa from './pages/siswa/ujian-anda/UjianAndaUjianSiswa';
import UjianAndaJadwalSiswa from './pages/siswa/ujian-anda/UjianAndaJadwalSiswa';
import UjianAndaSelesaiSiswa from './pages/siswa/ujian-anda/UjianAndaSelesaiSiswa';
import Pengaturan from './pages/siswa/Pengaturan';

function App() {
  return(
    <Routes>

      {/* ROUTE UNTUK ROLE UMUM */}
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/daftar' element={<Daftar/>}></Route>
      <Route path='/pengaturan' element={<Pengaturan/>}></Route>

      {/* ROUTE UNTUK ROLE GURU */}
      <Route path='/guru-dashboard' element={<DashboardGuru/>}></Route>
      <Route path='/guru-ujiananda' element={<UjianAnda/>}></Route>
      <Route path='/guru-tambahujian' element={<TambahUjian/>}></Route>
      <Route path='/guru-ujiananda-ujian' element={<UjianAndaUjian/>}></Route>
      <Route path='/guru-ujiananda-questions' element={<UjianAndaQuestion/>}></Route>
      <Route path='/guru-ujiananda-session' element={<UjianAndaSession/>}></Route>
      <Route path='/guru-ujiananda-question-lihat' element={<UjianAndaQuestionLihat/>}></Route>
      <Route path='/guru-tampilujian' element={<TampilUjian/>}></Route>
      <Route path='/guru-banksoal' element={<BankSoal/>}></Route>
      <Route path='/guru-kategori' element={<Kategori/>}></Route>
      <Route path='/guru-banksoal-buatpertanyaan' element={<BankSoalBuatPertanyaan/>}></Route>

      {/* ROUTE UNTUK ROLE SISWA */}
      <Route path='/siswa-dashboard' element={<DashboardSiswa/>}></Route>
      <Route path='/siswa-ujiananda-ujian' element={<UjianAndaUjianSiswa/>}></Route>
      <Route path='/siswa-ujiananda-jadwal' element={<UjianAndaJadwalSiswa/>}></Route>
      <Route path='/siswa-ujiananda-selesai' element={<UjianAndaSelesaiSiswa/>}></Route>

    </Routes>
  )
}

export default App
