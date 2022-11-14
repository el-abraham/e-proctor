
import React from 'react';


const DynamicDashboard = React.lazy(() => import('./pages/Dashboard'));
const DynamicInSession = React.lazy(() => import('./pages/InSession'));
const DynamicPengaturan = React.lazy(() => import('./pages/Pengaturan'));
const DynamicTestSoal = React.lazy(() => import('./pages/TestSoal'));
const DynamicUjianAnda = React.lazy(() => import('./pages/UjianAnda'));
const DynamicSiswaDashboardSiswa = React.lazy(() => import('./pages/siswa/DashboardSiswa'));
const DynamicSiswaInSession = React.lazy(() => import('./pages/siswa/InSession'));
const DynamicSiswaPengaturan = React.lazy(() => import('./pages/siswa/Pengaturan'));
const DynamicSiswaTestSoal = React.lazy(() => import('./pages/siswa/TestSoal'));
const DynamicUmumDaftar = React.lazy(() => import('./pages/umum/Daftar'));
const DynamicUmumLogin = React.lazy(() => import('./pages/umum/Login'));
const DynamicGuruBankSoalBankSoal = React.lazy(() => import('./pages/guru/bank-soal/BankSoal'));
const DynamicGuruBankSoalBankSoalBuatPertanyaan = React.lazy(() => import('./pages/guru/bank-soal/BankSoalBuatPertanyaan'));
const DynamicGuruBankSoalKategori = React.lazy(() => import('./pages/guru/bank-soal/Kategori'));
const DynamicGuruDashboardDashboardGuru = React.lazy(() => import('./pages/guru/dashboard/DashboardGuru'));
const DynamicGuruDashboardTambahUjian = React.lazy(() => import('./pages/guru/dashboard/TambahUjian'));
const DynamicGuruDashboardTampilUjian = React.lazy(() => import('./pages/guru/dashboard/TampilUjian'));
const DynamicGuruUjianAndaUjianAnda = React.lazy(() => import('./pages/guru/ujian-anda/UjianAnda'));
const DynamicGuruUjianAndaUjianAndaQuestion = React.lazy(() => import('./pages/guru/ujian-anda/UjianAndaQuestion'));
const DynamicGuruUjianAndaUjianAndaQuestionLihat = React.lazy(() => import('./pages/guru/ujian-anda/UjianAndaQuestionLihat'));
const DynamicGuruUjianAndaUjianAndaSession = React.lazy(() => import('./pages/guru/ujian-anda/UjianAndaSession'));
const DynamicGuruUjianAndaUjianAndaUjian = React.lazy(() => import('./pages/guru/ujian-anda/UjianAndaUjian'));
const DynamicSiswaUjianAndaUjianAndaJadwalSiswa = React.lazy(() => import('./pages/siswa/ujian-anda/UjianAndaJadwalSiswa'));
const DynamicSiswaUjianAndaUjianAndaSelesaiSiswa = React.lazy(() => import('./pages/siswa/ujian-anda/UjianAndaSelesaiSiswa'));
const DynamicSiswaUjianAndaUjianAndaUjianSiswa = React.lazy(() => import('./pages/siswa/ujian-anda/UjianAndaUjianSiswa'));


export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '/Dashboard', element: <DynamicDashboard />, },
      { path: '/InSession', element: <DynamicInSession />, },
      { path: '/Pengaturan', element: <DynamicPengaturan />, },
      { path: '/TestSoal', element: <DynamicTestSoal />, },
      { path: '/UjianAnda', element: <DynamicUjianAnda />, },
      { path: '/siswa/DashboardSiswa', element: <DynamicSiswaDashboardSiswa />, },
      { path: '/siswa/InSession', element: <DynamicSiswaInSession />, },
      { path: '/siswa/Pengaturan', element: <DynamicSiswaPengaturan />, },
      { path: '/siswa/TestSoal', element: <DynamicSiswaTestSoal />, },
      { path: '/umum/Daftar', element: <DynamicUmumDaftar />, },
      { path: '/umum/Login', element: <DynamicUmumLogin />, },
      { path: '/guru/bank-soal/BankSoal', element: <DynamicGuruBankSoalBankSoal />, },
      { path: '/guru/bank-soal/BankSoalBuatPertanyaan', element: <DynamicGuruBankSoalBankSoalBuatPertanyaan />, },
      { path: '/guru/bank-soal/Kategori', element: <DynamicGuruBankSoalKategori />, },
      { path: '/guru/dashboard/DashboardGuru', element: <DynamicGuruDashboardDashboardGuru />, },
      { path: '/guru/dashboard/TambahUjian', element: <DynamicGuruDashboardTambahUjian />, },
      { path: '/guru/dashboard/TampilUjian', element: <DynamicGuruDashboardTampilUjian />, },
      { path: '/guru/ujian-anda/UjianAnda', element: <DynamicGuruUjianAndaUjianAnda />, },
      { path: '/guru/ujian-anda/UjianAndaQuestion', element: <DynamicGuruUjianAndaUjianAndaQuestion />, },
      { path: '/guru/ujian-anda/UjianAndaQuestionLihat', element: <DynamicGuruUjianAndaUjianAndaQuestionLihat />, },
      { path: '/guru/ujian-anda/UjianAndaSession', element: <DynamicGuruUjianAndaUjianAndaSession />, },
      { path: '/guru/ujian-anda/UjianAndaUjian', element: <DynamicGuruUjianAndaUjianAndaUjian />, },
      { path: '/siswa/ujian-anda/UjianAndaJadwalSiswa', element: <DynamicSiswaUjianAndaUjianAndaJadwalSiswa />, },
      { path: '/siswa/ujian-anda/UjianAndaSelesaiSiswa', element: <DynamicSiswaUjianAndaUjianAndaSelesaiSiswa />, },
      { path: '/siswa/ujian-anda/UjianAndaUjianSiswa', element: <DynamicSiswaUjianAndaUjianAndaUjianSiswa />, },
    ]
  }
]

export const pages = [
  { route: '/Dashboard' },
  { route: '/InSession' },
  { route: '/Pengaturan' },
  { route: '/TestSoal' },
  { route: '/UjianAnda' },
  { route: '/siswa/DashboardSiswa' },
  { route: '/siswa/InSession' },
  { route: '/siswa/Pengaturan' },
  { route: '/siswa/TestSoal' },
  { route: '/umum/Daftar' },
  { route: '/umum/Login' },
  { route: '/guru/bank-soal/BankSoal' },
  { route: '/guru/bank-soal/BankSoalBuatPertanyaan' },
  { route: '/guru/bank-soal/Kategori' },
  { route: '/guru/dashboard/DashboardGuru' },
  { route: '/guru/dashboard/TambahUjian' },
  { route: '/guru/dashboard/TampilUjian' },
  { route: '/guru/ujian-anda/UjianAnda' },
  { route: '/guru/ujian-anda/UjianAndaQuestion' },
  { route: '/guru/ujian-anda/UjianAndaQuestionLihat' },
  { route: '/guru/ujian-anda/UjianAndaSession' },
  { route: '/guru/ujian-anda/UjianAndaUjian' },
  { route: '/siswa/ujian-anda/UjianAndaJadwalSiswa' },
  { route: '/siswa/ujian-anda/UjianAndaSelesaiSiswa' },
  { route: '/siswa/ujian-anda/UjianAndaUjianSiswa' },
]
