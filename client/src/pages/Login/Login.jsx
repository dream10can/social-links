import { Button } from "@/components/ui/button";
import logo from "@/images/social-logo.png";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
function Login() {
  const { updateUser } = useContext(AuthContext);
  const userName = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { mutate, data, isError, isPending } = useMutation({
    mutationFn: async (newUser) => {
      const response = await fetch(
        "https://social-links-nu-flame.vercel.app/api/auth/login",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      );

      const data = await response.json();

      return data;
    },
    onSuccess: (data) => {
      if (data.message.includes("created")) {
        updateUser(data);

        navigate("/Admin");
        toast.success("نورتنا Welcome");
      }
    },
  });

  function handleLogin(e) {
    e.preventDefault();

    mutate({
      userName: userName.current.value,
      password: password.current.value,
    });
  }

  return (
    <>
      <section>
        <div className="max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-full ">
          <div className=" text-center mt-24">
            <h1 className="text-2xl font-semibold md:text-[26px] ">اهلا فيك</h1>
          </div>

          <form
            className="flex flex-col items-center gap-4 mt-6  "
            onSubmit={handleLogin}
          >
            <input
              type="text"
              placeholder="أكتب أسم المستخدم"
              name="userName"
              className="p-2 text-sm placeholder:text-xs rounded border-gray-200 outline-none border-[1px] focus:border-gray-900 lg:w-[350px]"
              required={true}
              ref={userName}
            />

            <input
              type="password"
              placeholder="أكتب رقمك السري"
              className="p-2 text-sm placeholder:text-xs rounded border-gray-200 outline-none border-[1px] focus:border-gray-900 lg:w-[350px]"
              name="password"
              required={true}
              ref={password}
            />

            {data?.message && (
              <p className="text-red-600 text-xs md:text-[15px]">
                {data?.message}
              </p>
            )}
            {isError && (
              <p className="text-red-600 text-xs md:text-[15px]">
                there is Error Please try Again
              </p>
            )}
            <Link to={"/register"} className="text-xs md:text-[15px]">
              ليس لديك حساب سجل الأن؟
            </Link>
            <Button
              disabled={isPending}
              size="sm"
              className={"bg-[#7966FA]  text-white mt-1"}
            >
              تسجيل دخول
            </Button>
            <img src={logo} alt="Logo" className="w-40 h-40 mx-auto" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
