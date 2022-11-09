import { NavLink } from "react-router-dom";

export default function TabsUjianAnda(){

    return(
        <div className="tabs">
            <NavLink to={"/guru-ujiananda-ujian"} className={({ isActive }) => isActive ? 'tab tab-bordered tab-active' : 'tab tab-bordered'}>
                <a>Ujian</a> 
            </NavLink>
            <NavLink to={"/guru-ujiananda-questions"} className={({ isActive }) => isActive ? 'tab tab-bordered tab-active' : 'tab tab-bordered'}>
                <a>Questions</a> 
            </NavLink>
            <NavLink to={"/guru-ujiananda-session"} className={({ isActive }) => isActive ? 'tab tab-bordered tab-active' : 'tab tab-bordered'}>
                <a>Session</a>
            </NavLink>
        </div>
    );
}