/* eslint-disable react/prop-types */

import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

function MainNav({ handleClick }) {
  const { currentUser } = useContext(AuthContext);
  function enableScroll() {
    document.body.classList.remove("stop-scrolling");
  }
  useEffect(() => {
    enableScroll();
  }, [handleClick]);

  return (
    <div>
      <button
        className="text-3xl cursor-pointer md:hidden text-black mr-3 "
        onClick={handleClick}
      >
        &#9776;
      </button>

      <nav className="hidden md:block space-x-4 text-xl ">
        {!currentUser ? (
          <>
            {" "}
            <NavLink
              to="/login"
              className={({ isActive }) => {
                return isActive ? "text-2xl ml-3 mr-5 " : "ml-3 mr-5 ";
              }}
              dir="rtl"
            >
              تسجيل دخول
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => {
                return isActive ? "text-2xl ml-2" : "ml-2";
              }}
              dir="rtl"
            >
              تسجيل
            </NavLink>
            <NavLink
              to="/AboutApp"
              className={({ isActive }) => {
                return isActive ? "text-2xl ml-2" : "ml-2";
              }}
              dir="rtl"
            >
              عن التطبيق
            </NavLink>{" "}
          </>
        ) : (
          <>
            <NavLink
              to="/admin"
              className={({ isActive }) => {
                return isActive ? "text-2xl ml-3 mr-4" : "ml-3 mr-4";
              }}
              dir="rtl"
            >
              لوحة التحكم
            </NavLink>
            <NavLink
              to="/AboutApp"
              className={({ isActive }) => {
                return isActive ? "text-2xl ml-3 mr-4" : "ml-3 mr-4";
              }}
              dir="rtl"
            >
              عن التطبيق
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
}

export default MainNav;

// {
//    <NavLink
//           to="/login"
//           className={({ isActive }) => {
//             return isActive ? "text-2xl ml-2" : "ml-2";
//           }}
//           dir="rtl"
//         >
//           تسجيل دخول
//         </NavLink>
//         <NavLink
//           to="/register"
//           className={({ isActive }) => {
//             return isActive ? "text-2xl ml-2" : "ml-2";
//           }}
//           dir="rtl"
//         >
//           تسجيل
//         </NavLink>
//         <NavLink
//           to="/admin"
//           className={({ isActive }) => {
//             return isActive ? "text-2xl ml-2" : "ml-2";
//           }}
//           dir="rtl"
//         >
//           لوحة التحكم
//         </NavLink>
// }
