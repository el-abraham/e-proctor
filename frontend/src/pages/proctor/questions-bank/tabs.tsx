import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

export default function TabsBankSoal() {
  const [searchParams] = useSearchParams();
  const [active, setActive] = useState("");

  useEffect(() => {
    if (searchParams.get("tab") == "category") {
      setActive("category");
    }

    return () => {
      setActive("");
    };
  }, []);

  return (
    <div className="tabs">
      <NavLink
        to={"/q/bank?tab=questions"}
        className={
          ["", "questions"].includes(active)
            ? "tab tab-bordered tab-active"
            : "tab tab-bordered"
        }
      >
        <div>Bank Soal</div>
      </NavLink>
      <NavLink
        to={"/q/bank?tab=category"}
        className={
          active == "category"
            ? "tab tab-bordered tab-active"
            : "tab tab-bordered"
        }
      >
        <div>Kategori</div>
      </NavLink>
    </div>
  );
}
