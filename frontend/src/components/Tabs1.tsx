import { NavLink } from "react-router-dom";

export default function Tabs1() {
  return (
    <div className="tabs">
      <NavLink to={"/banksoal"} className={({ isActive }) => isActive ? 'tab tab-bordered tab-active' : 'tab tab-bordered'}>
        <a>Bank Soal</a>
      </NavLink>
      <NavLink to={"/kategori"} className={({ isActive }) => isActive ? 'tab tab-bordered tab-active' : 'tab tab-bordered'}>
        <a>Kategori</a>
      </NavLink>
    </div>
  );
}
