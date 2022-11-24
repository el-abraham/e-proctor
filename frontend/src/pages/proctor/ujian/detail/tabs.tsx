import { useEffect, useState } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";

export default function TabsDetailUjianGuru() {
  const [searchParams] = useSearchParams();
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (searchParams.get("tab")) {
      setActive(searchParams.get("tab")!);
    }
    return () => {
      setActive("");
    };
  }, []);

  return (
    <div className="tabs">
      <NavLink
        to={`/ujian/detail?q=${searchParams.get("q")}&tab=ujian`}
        className={
          ["", "ujian"].includes(active)
            ? "tab tab-bordered tab-active"
            : "tab tab-bordered"
        }
      >
        <div>Ujian</div>
      </NavLink>
      <NavLink
        to={`/ujian/detail?q=${searchParams.get("q")}&tab=questions`}
        className={
          active == "questions"
            ? "tab tab-bordered tab-active"
            : "tab tab-bordered"
        }
      >
        <div>Questions</div>
      </NavLink>
      <NavLink
        to={`/ujian/detail?q=${searchParams.get("q")}&tab=session`}
        className={
          active == "session"
            ? "tab tab-bordered tab-active"
            : "tab tab-bordered"
        }
      >
        <div>Session</div>
      </NavLink>
    </div>
  );
}
