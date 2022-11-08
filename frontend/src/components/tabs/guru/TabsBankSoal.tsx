import { NavLink } from "react-router-dom";

export default function TabsBankSoal() {
  return (
    <div className="tabs">
      <NavLink to={"/guru-banksoal"} className={({ isActive }) => isActive ? 'tab tab-bordered tab-active' : 'tab tab-bordered'}>
        <a>Bank Soal</a>
      </NavLink>
      <NavLink to={"/guru-kategori"} className={({ isActive }) => isActive ? 'tab tab-bordered tab-active' : 'tab tab-bordered'}>
        <a>Kategori</a>
      </NavLink>
    </div>
  );
}
