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

function App() {
  return(
    <Routes>
      {/* ROUTE UNTUK ROLE GURU */}
      <Route path='/dashboard' element={<DashboardGuru/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/daftar' element={<Daftar/>}></Route>
      <Route path='/ujiananda' element={<UjianAnda/>}></Route>
      <Route path='/tambahujian' element={<TambahUjian/>}></Route>
      <Route path='/ujiananda-ujian' element={<UjianAndaUjian/>}></Route>
      <Route path='/ujiananda-questions' element={<UjianAndaQuestion/>}></Route>
      <Route path='/ujiananda-session' element={<UjianAndaSession/>}></Route>
      <Route path='/ujiananda-question-lihat' element={<UjianAndaQuestionLihat/>}></Route>
      <Route path='/tampilujian' element={<TampilUjian/>}></Route>
      <Route path='/banksoal' element={<BankSoal/>}></Route>
      <Route path='/kategori' element={<Kategori/>}></Route>
      <Route path='/banksoal-buatpertanyaan' element={<BankSoalBuatPertanyaan/>}></Route>

      {/* ROUTE UNTUK ROLE SISWA */}
    </Routes>
  )
}

export default App
