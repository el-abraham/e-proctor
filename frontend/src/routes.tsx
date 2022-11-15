
import React from 'react';


const DynamicDashboardAdminGuru = React.lazy(() => import('./pages\admin\DashboardAdminGuru'));
const DynamicDashboardAdminUsers = React.lazy(() => import('./pages\admin\DashboardAdminUsers'));
const DynamicAuthLogin = React.lazy(() => import('./pages\auth-login'));
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
const DynamicDashboardSiswa = React.lazy(() => import('./pages\siswa\dashboard\DashboardSiswa'));
const DynamicDetailUjianSiswa = React.lazy(() => import('./pages\siswa\ujian-anda\DetailUjianSiswa'));
const DynamicUjianAndaJadwalSiswa = React.lazy(() => import('./pages\siswa\ujian-anda\UjianAndaJadwalSiswa'));
const DynamicUjianAndaSelesaiSiswa = React.lazy(() => import('./pages\siswa\ujian-anda\UjianAndaSelesaiSiswa'));
const DynamicUjianAndaUjianSiswa = React.lazy(() => import('./pages\siswa\ujian-anda\UjianAndaUjianSiswa'));
const DynamicTestSoal = React.lazy(() => import('./pages\TestSoal'));
const DynamicUjianAnda = React.lazy(() => import('./pages\UjianAnda'));
const DynamicDaftar = React.lazy(() => import('./pages\umum\Daftar'));
const DynamicLogin = React.lazy(() => import('./pages\umum\Login'));
const DynamicPengaturan = React.lazy(() => import('./pages\umum\Pengaturan'));


export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: 'D:\admin\DashboardAdminGuru', element: <DynamicDashboardAdminGuru />, },
      { path: 'D:\admin\DashboardAdminUsers', element: <DynamicDashboardAdminUsers />, },
      { path: 'D:\auth-login', element: <DynamicAuthLogin />, },
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
      { path: 'D:\siswa\dashboard\DashboardSiswa', element: <DynamicDashboardSiswa />, },
      { path: 'D:\siswa\ujian-anda\DetailUjianSiswa', element: <DynamicDetailUjianSiswa />, },
      { path: 'D:\siswa\ujian-anda\UjianAndaJadwalSiswa', element: <DynamicUjianAndaJadwalSiswa />, },
      { path: 'D:\siswa\ujian-anda\UjianAndaSelesaiSiswa', element: <DynamicUjianAndaSelesaiSiswa />, },
      { path: 'D:\siswa\ujian-anda\UjianAndaUjianSiswa', element: <DynamicUjianAndaUjianSiswa />, },
      { path: 'D:\TestSoal', element: <DynamicTestSoal />, },
      { path: 'D:\UjianAnda', element: <DynamicUjianAnda />, },
      { path: 'D:\umum\Daftar', element: <DynamicDaftar />, },
      { path: 'D:\umum\Login', element: <DynamicLogin />, },
      { path: 'D:\umum\Pengaturan', element: <DynamicPengaturan />, },
    ]
  }
]

export const pages = [
  { route: 'D:\admin\DashboardAdminGuru' },
  { route: 'D:\admin\DashboardAdminUsers' },
  { route: 'D:\auth-login' },
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
  { route: 'D:\siswa\dashboard\DashboardSiswa' },
  { route: 'D:\siswa\ujian-anda\DetailUjianSiswa' },
  { route: 'D:\siswa\ujian-anda\UjianAndaJadwalSiswa' },
  { route: 'D:\siswa\ujian-anda\UjianAndaSelesaiSiswa' },
  { route: 'D:\siswa\ujian-anda\UjianAndaUjianSiswa' },
  { route: 'D:\TestSoal' },
  { route: 'D:\UjianAnda' },
  { route: 'D:\umum\Daftar' },
  { route: 'D:\umum\Login' },
  { route: 'D:\umum\Pengaturan' },
]
