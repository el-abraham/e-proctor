import { NavLink } from "react-router-dom";

export default function Tabs(){

    return(
        <div className="tabs">
            <NavLink to={"/ujiananda-ujian"} className={({ isActive }) => isActive ? 'tab tab-bordered tab-active' : 'tab tab-bordered'}>
                <a>Ujian</a> 
            </NavLink>
            <NavLink to={"/ujiananda-questions"} className={({ isActive }) => isActive ? 'tab tab-bordered tab-active' : 'tab tab-bordered'}>
                <a>Questions</a> 
            </NavLink>
            <NavLink to={"/ujiananda-session"} className={({ isActive }) => isActive ? 'tab tab-bordered tab-active' : 'tab tab-bordered'}>
                <a>Session</a>
            </NavLink>
        </div>
    );
}