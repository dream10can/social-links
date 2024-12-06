import { AuthContext } from "@/context/AuthContext";
import { useContext, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import MainMenu from "../mainmenu/MainMenu";
import MobileMenu from "../mobilemenu/MobileMenu";
import logo from "@/images/social-logo.png";

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return !currentUser ? (
    <Navigate to={"/login"} />
  ) : (
    <>
      {" "}
      <header className="static top-0 z-10 shadow-lg  ">
        <div className="max-w-md flex flex-row-reverse justify-between items-center md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <Link to={"/"}>
            <img src={logo} alt="Social links Logo" className="w-28 h-28 " />
          </Link>
          <MainMenu handleClick={handleClick} />
        </div>
        {isOpen && <MobileMenu isOpen={isOpen} handleClick={handleClick} />}
      </header>
      <Outlet />
    </>
  );
}
export default RequireAuth;
