import { NavLink } from "react-router-dom";

export default function TabsSiswa() {
  return (
    <div className="tabs mt-[15px]">
      <NavLink
        to={"/siswa/ujian"}
        className={({ isActive }) =>
          isActive ? "tab tab-bordered tab-active" : "tab tab-bordered"
        }
      >
        <a>Ujian Anda</a>
      </NavLink>
      <NavLink
        to={"/siswa/jadwal"}
        className={({ isActive }) =>
          isActive ? "tab tab-bordered tab-active" : "tab tab-bordered"
        }
      >
        <a>Jadwal</a>
      </NavLink>
      <NavLink
        to={"/siswa/selesai"}
        className={({ isActive }) =>
          isActive ? "tab tab-bordered tab-active" : "tab tab-bordered"
        }
      >
        <a>Selesai</a>
      </NavLink>
    </div>
  );
}
