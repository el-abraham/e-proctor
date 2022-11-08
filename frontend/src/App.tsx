import { Route, Routes } from 'react-router-dom';
import './App.css'
import BankSoal from './pages/BankSoal';
import BankSoalBuatPertanyaan from './pages/BankSoalBuatPertanyaan';
import Daftar from './pages/Daftar';
import DashboardGuru from './pages/DashboardGuru';
import Kategori from './pages/Kategori';
import Login from './pages/Login';
import TambahUjian from './pages/TambahUjian';
import TampilUjian from './pages/TampilUjian';
import UjianAnda from './pages/UjianAnda';
import UjianAndaQuestion from './pages/UjianAndaQuestion';
import UjianAndaQuestionLihat from './pages/UjianAndaQuestionLihat';
import UjianAndaSession from './pages/UjianAndaSession';
import UjianAndaUjian from './pages/UjianAndaUjian';

function App() {
  return(
    <Routes>
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
    </Routes>
  )
}

export default App
