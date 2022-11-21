import { NavLink } from "react-router-dom";

export default function TabsSiswa() {
  return (
    <div className="tabs mt-[15px]">
      <NavLink
        to={"/ujian"}
        className={({ isActive }) =>
          isActive ? "tab tab-bordered tab-active" : "tab tab-bordered"
        }
      >
        <label>Ujian Anda</label>
      </NavLink>
      <NavLink
        to={"/siswa-ujiananda-jadwal"}
        className={({ isActive }) =>
          isActive ? "tab tab-bordered tab-active" : "tab tab-bordered"
        }
      >
        <label>Jadwal</label>
      </NavLink>
      <NavLink
        to={"/siswa-ujiananda-selesai"}
        className={({ isActive }) =>
          isActive ? "tab tab-bordered tab-active" : "tab tab-bordered"
        }
      >
        <label>Selesai</label>
      </NavLink>
    </div>
  );
}
