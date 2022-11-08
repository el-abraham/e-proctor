
import React from 'react';


const DynamicBankSoal = React.lazy(() => import('./pages\BankSoal'));
const DynamicBankSoalBuatPertanyaan = React.lazy(() => import('./pages\BankSoalBuatPertanyaan'));
const DynamicDaftar = React.lazy(() => import('./pages\Daftar'));
const DynamicDashboardGuru = React.lazy(() => import('./pages\DashboardGuru'));
const DynamicKategori = React.lazy(() => import('./pages\Kategori'));
const DynamicLogin = React.lazy(() => import('./pages\Login'));
const DynamicTambahUjian = React.lazy(() => import('./pages\TambahUjian'));
const DynamicTampilUjian = React.lazy(() => import('./pages\TampilUjian'));
const DynamicUjianAnda = React.lazy(() => import('./pages\UjianAnda'));
const DynamicUjianAndaQuestion = React.lazy(() => import('./pages\UjianAndaQuestion'));
const DynamicUjianAndaQuestionLihat = React.lazy(() => import('./pages\UjianAndaQuestionLihat'));
const DynamicUjianAndaSession = React.lazy(() => import('./pages\UjianAndaSession'));
const DynamicUjianAndaUjian = React.lazy(() => import('./pages\UjianAndaUjian'));


export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: 'D:\BankSoal', element: <DynamicBankSoal />, },
      { path: 'D:\BankSoalBuatPertanyaan', element: <DynamicBankSoalBuatPertanyaan />, },
      { path: 'D:\Daftar', element: <DynamicDaftar />, },
      { path: 'D:\DashboardGuru', element: <DynamicDashboardGuru />, },
      { path: 'D:\Kategori', element: <DynamicKategori />, },
      { path: 'D:\Login', element: <DynamicLogin />, },
      { path: 'D:\TambahUjian', element: <DynamicTambahUjian />, },
      { path: 'D:\TampilUjian', element: <DynamicTampilUjian />, },
      { path: 'D:\UjianAnda', element: <DynamicUjianAnda />, },
      { path: 'D:\UjianAndaQuestion', element: <DynamicUjianAndaQuestion />, },
      { path: 'D:\UjianAndaQuestionLihat', element: <DynamicUjianAndaQuestionLihat />, },
      { path: 'D:\UjianAndaSession', element: <DynamicUjianAndaSession />, },
      { path: 'D:\UjianAndaUjian', element: <DynamicUjianAndaUjian />, },
    ]
  }
]

export const pages = [
  { route: 'D:\BankSoal' },
  { route: 'D:\BankSoalBuatPertanyaan' },
  { route: 'D:\Daftar' },
  { route: 'D:\DashboardGuru' },
  { route: 'D:\Kategori' },
  { route: 'D:\Login' },
  { route: 'D:\TambahUjian' },
  { route: 'D:\TampilUjian' },
  { route: 'D:\UjianAnda' },
  { route: 'D:\UjianAndaQuestion' },
  { route: 'D:\UjianAndaQuestionLihat' },
  { route: 'D:\UjianAndaSession' },
  { route: 'D:\UjianAndaUjian' },
]
