/* eslint-disable react/prop-types */
import { AuthContext } from "@/context/AuthContext";
import linkdin from "@/images/linkedin.png";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

function MobileMenu({ isOpen, handleClick }) {
  const { currentUser } = useContext(AuthContext);
  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }

  useEffect(() => {
    disableScroll();
  }, [handleClick]);

  return (
    isOpen && (
      <>
        <section className="bg-white w-full absolute top-0 flex flex-col h-full z-10 ">
          <button
            className="self-start  text-black text-3xl mr-3 mt-5"
            onClick={handleClick}
          >
            &#10005;
          </button>

          <nav
            className="flex flex-col items-center text-black gap-5 text-xl 
                py-8"
          >
            {!currentUser ? (
              <>
                <NavLink
                  to="/login"
                  className="ml-2 cursor:pointer"
                  dir="rtl"
                  onClick={handleClick}
                >
                  تسجيل دخول
                </NavLink>

                <NavLink
                  to="/register"
                  className="ml-2 cursor:pointer"
                  dir="rtl"
                  onClick={handleClick}
                >
                  تسجيل
                </NavLink>
                <NavLink
                  to="/admin"
                  className="ml-2 cursor:pointer"
                  dir="rtl"
                  onClick={handleClick}
                >
                  لوحة التحكم
                </NavLink>
                <NavLink
                  to="/AboutApp"
                  className="ml-2 cursor:pointer"
                  dir="rtl"
                  onClick={handleClick}
                >
                  عن التطبيق
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="ml-2 cursor:pointer"
                  dir="rtl"
                  onClick={handleClick}
                >
                  تسجيل دخول
                </NavLink>

                <NavLink
                  to="/register"
                  className="ml-2 cursor:pointer"
                  dir="rtl"
                  onClick={handleClick}
                >
                  تسجيل
                </NavLink>
                <NavLink
                  to="/admin"
                  className="ml-2 cursor:pointer"
                  dir="rtl"
                  onClick={handleClick}
                >
                  لوحة التحكم
                </NavLink>
                <NavLink
                  to="/AboutApp"
                  className="ml-2 cursor:pointer"
                  dir="rtl"
                  onClick={handleClick}
                >
                  عن التطبيق
                </NavLink>
              </>
            )}

            <div className="flex flex-row-reverse justify-center items-center gap-x-1">
              <p className="mt-8">created By AbdDev</p>
              <a
                href="https://www.linkedin.com/in/abdullah-faisal-%E2%80%8B%F0%9F%92%BB%E2%80%8B-570203206/"
                className="cursor:pointer"
                target="_blank"
                rel="developer Profile"
              >
                <img src={linkdin} alt="linkedin" className="mt-8" />
              </a>
            </div>
          </nav>
        </section>
      </>
    )
  );
}

export default MobileMenu;
