
import React from 'react';


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
const DynamicDaftar = React.lazy(() => import('./pages\umum\Daftar'));
const DynamicLogin = React.lazy(() => import('./pages\umum\Login'));


export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
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
      { path: 'D:\umum\Daftar', element: <DynamicDaftar />, },
      { path: 'D:\umum\Login', element: <DynamicLogin />, },
    ]
  }
]

export const pages = [
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
  { route: 'D:\umum\Daftar' },
  { route: 'D:\umum\Login' },
]
