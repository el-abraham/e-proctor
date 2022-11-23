import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

export default function TabsDetailUjianGuru() {
  const [searchParams] = useSearchParams();
  const [active, setActive] = useState("");

  useEffect(() => {
    if (searchParams.get("tab") == "ujian") {
      setActive("ujian");
    }

    return () => {
      setActive("");
    };
  }, []);
  return (
    <div className="tabs">
      <NavLink
        to={"/detailujian/ujian"}
        className={
          ["", "ujian"].includes(active)
            ? "tab tab-bordered tab-active"
            : "tab tab-bordered"
        }
      >
        <a>Ujian</a>
      </NavLink>
      <NavLink
        to={"/detailujian/questions"}
        className={
          ["", "questions"].includes(active)
            ? "tab tab-bordered tab-active"
            : "tab tab-bordered"
        }
      >
        <a>Questions</a>
      </NavLink>
      <NavLink
        to={"/detailujian/session"}
        className={
          ["", "session"].includes(active)
            ? "tab tab-bordered tab-active"
            : "tab tab-bordered"
        }
      >
        <a>Session</a>
      </NavLink>
    </div>
  );
}
