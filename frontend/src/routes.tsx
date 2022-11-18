
import React from 'react';


const DynamicAuthLogin = React.lazy(() => import('./pages\auth-login'));
const DynamicDashboard = React.lazy(() => import('./pages\Dashboard'));
const DynamicBankSoal = React.lazy(() => import('./pages\guru\bank-soal\BankSoal'));
const DynamicBankSoalBuatPertanyaan = React.lazy(() => import('./pages\guru\bank-soal\BankSoalBuatPertanyaan'));
const DynamicKategori = React.lazy(() => import('./pages\guru\bank-soal\Kategori'));
const DynamicDashboardGuru = React.lazy(() => import('./pages\guru\dashboard\DashboardGuru'));
const DynamicTambahUjian = React.lazy(() => import('./pages\guru\dashboard\TambahUjian'));
const DynamicTampilUjian = React.lazy(() => import('./pages\guru\dashboard\TampilUjian'));
const DynamicUjianAnda = React.lazy(() => import('./pages\guru\ujian-anda\UjianAnda'));
const DynamicUjianAndaQuestion = React.lazy(() => import('./pages\guru\ujian-anda\UjianAndaQuestion'));
const DynamicUjianAndaQuestionLihat = React.lazy(() => import('./pages\guru\ujian-anda\UjianAndaQuestionLihat'));
const DynamicUjianAndaSession = React.lazy(() => import('./pages\guru\ujian-anda\UjianAndaSession'));
const DynamicUjianAndaUjian = React.lazy(() => import('./pages\guru\ujian-anda\UjianAndaUjian'));
const DynamicInSession = React.lazy(() => import('./pages\InSession'));
const DynamicPengaturan = React.lazy(() => import('./pages\Pengaturan'));
const DynamicDashboardSiswa = React.lazy(() => import('./pages\siswa\dashboard\DashboardSiswa'));
const DynamicPengaturan = React.lazy(() => import('./pages\siswa\dashboard\Pengaturan'));
const DynamicDetailUjianSiswa = React.lazy(() => import('./pages\siswa\ujian-anda\DetailUjianSiswa'));
const DynamicUjianAndaAfterExam = React.lazy(() => import('./pages\siswa\ujian-anda\UjianAndaAfterExam'));
const DynamicUjianAndaJadwalSiswa = React.lazy(() => import('./pages\siswa\ujian-anda\UjianAndaJadwalSiswa'));
const DynamicUjianAndaSelesaiSiswa = React.lazy(() => import('./pages\siswa\ujian-anda\UjianAndaSelesaiSiswa'));
const DynamicUjianAndaUjianSiswa = React.lazy(() => import('./pages\siswa\ujian-anda\UjianAndaUjianSiswa'));
const DynamicTestSoal = React.lazy(() => import('./pages\TestSoal'));
const DynamicUjianAnda = React.lazy(() => import('./pages\UjianAnda'));
const DynamicDaftar = React.lazy(() => import('./pages\umum\Daftar'));
const DynamicLogin = React.lazy(() => import('./pages\umum\Login'));


export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: 'D:\auth-login', element: <DynamicAuthLogin />, },
      { path: 'D:\Dashboard', element: <DynamicDashboard />, },
      { path: 'D:\guru\bank-soal\BankSoal', element: <DynamicBankSoal />, },
      { path: 'D:\guru\bank-soal\BankSoalBuatPertanyaan', element: <DynamicBankSoalBuatPertanyaan />, },
      { path: 'D:\guru\bank-soal\Kategori', element: <DynamicKategori />, },
      { path: 'D:\guru\dashboard\DashboardGuru', element: <DynamicDashboardGuru />, },
      { path: 'D:\guru\dashboard\TambahUjian', element: <DynamicTambahUjian />, },
      { path: 'D:\guru\dashboard\TampilUjian', element: <DynamicTampilUjian />, },
      { path: 'D:\guru\ujian-anda\UjianAnda', element: <DynamicUjianAnda />, },
      { path: 'D:\guru\ujian-anda\UjianAndaQuestion', element: <DynamicUjianAndaQuestion />, },
      { path: 'D:\guru\ujian-anda\UjianAndaQuestionLihat', element: <DynamicUjianAndaQuestionLihat />, },
      { path: 'D:\guru\ujian-anda\UjianAndaSession', element: <DynamicUjianAndaSession />, },
      { path: 'D:\guru\ujian-anda\UjianAndaUjian', element: <DynamicUjianAndaUjian />, },
      { path: 'D:\InSession', element: <DynamicInSession />, },
      { path: 'D:\Pengaturan', element: <DynamicPengaturan />, },
      { path: 'D:\siswa\dashboard\DashboardSiswa', element: <DynamicDashboardSiswa />, },
      { path: 'D:\siswa\dashboard\Pengaturan', element: <DynamicPengaturan />, },
      { path: 'D:\siswa\ujian-anda\DetailUjianSiswa', element: <DynamicDetailUjianSiswa />, },
      { path: 'D:\siswa\ujian-anda\UjianAndaAfterExam', element: <DynamicUjianAndaAfterExam />, },
      { path: 'D:\siswa\ujian-anda\UjianAndaJadwalSiswa', element: <DynamicUjianAndaJadwalSiswa />, },
      { path: 'D:\siswa\ujian-anda\UjianAndaSelesaiSiswa', element: <DynamicUjianAndaSelesaiSiswa />, },
      { path: 'D:\siswa\ujian-anda\UjianAndaUjianSiswa', element: <DynamicUjianAndaUjianSiswa />, },
      { path: 'D:\TestSoal', element: <DynamicTestSoal />, },
      { path: 'D:\UjianAnda', element: <DynamicUjianAnda />, },
      { path: 'D:\umum\Daftar', element: <DynamicDaftar />, },
      { path: 'D:\umum\Login', element: <DynamicLogin />, },
    ]
  }
]

export const pages = [
  { route: 'D:\auth-login' },
  { route: 'D:\Dashboard' },
  { route: 'D:\guru\bank-soal\BankSoal' },
  { route: 'D:\guru\bank-soal\BankSoalBuatPertanyaan' },
  { route: 'D:\guru\bank-soal\Kategori' },
  { route: 'D:\guru\dashboard\DashboardGuru' },
  { route: 'D:\guru\dashboard\TambahUjian' },
  { route: 'D:\guru\dashboard\TampilUjian' },
  { route: 'D:\guru\ujian-anda\UjianAnda' },
  { route: 'D:\guru\ujian-anda\UjianAndaQuestion' },
  { route: 'D:\guru\ujian-anda\UjianAndaQuestionLihat' },
  { route: 'D:\guru\ujian-anda\UjianAndaSession' },
  { route: 'D:\guru\ujian-anda\UjianAndaUjian' },
  { route: 'D:\InSession' },
  { route: 'D:\Pengaturan' },
  { route: 'D:\siswa\dashboard\DashboardSiswa' },
  { route: 'D:\siswa\dashboard\Pengaturan' },
  { route: 'D:\siswa\ujian-anda\DetailUjianSiswa' },
  { route: 'D:\siswa\ujian-anda\UjianAndaAfterExam' },
  { route: 'D:\siswa\ujian-anda\UjianAndaJadwalSiswa' },
  { route: 'D:\siswa\ujian-anda\UjianAndaSelesaiSiswa' },
  { route: 'D:\siswa\ujian-anda\UjianAndaUjianSiswa' },
  { route: 'D:\TestSoal' },
  { route: 'D:\UjianAnda' },
  { route: 'D:\umum\Daftar' },
  { route: 'D:\umum\Login' },
]
