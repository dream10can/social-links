import { Button } from "@/components/ui/button";
import logo from "@/images/social-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import toast from "react-hot-toast";

function Register() {
  const userName = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const { mutate, data, isError, isPending } = useMutation({
    mutationFn: async (newUser) => {
      const response = await fetch(
        "https://social-links-api.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      );

      const data = await response.json();

      return data;
    },
    onSuccess: (data) => {
      if (data.message.includes("created")) {
        toast.success("user Created Please login");
        navigate("/login");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      userName: userName.current.value,
      email: email.current.value,
      password: password.current.value,
    });
  };

  return (
    <>
      <section>
        <div className="max-w-[320px] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-full">
          <div className=" text-center mt-24">
            <h1 className="text-2xl md:text-[26px] font-semibold">
              نورتنا في منصة social Links
            </h1>
          </div>

          <form
            className="flex flex-col items-center gap-4 mt-6 "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="أكتب أسم المستخدم"
              name="userName"
              className="p-2 text-sm placeholder:text-xs rounded border-gray-200 outline-none border-[1px] focus:border-gray-900 lg:w-[350px]"
              ref={userName}
            />
            <input
              type="email"
              placeholder="أكتب أميلك"
              name="email"
              className="p-2 text-sm placeholder:text-xs rounded border-gray-200 outline-none border-[1px] focus:border-gray-900 lg:w-[350px]"
              ref={email}
            />

            <input
              type="password"
              placeholder="أكتب رقمك السري"
              className="p-2 text-sm placeholder:text-xs rounded border-gray-200 outline-none border-[1px] focus:border-gray-900 lg:w-[350px]"
              name="password"
              ref={password}
            />

            {data?.message && (
              <p className="text-red-600 text-xs md:text-[15px]">
                {data?.message}
              </p>
            )}
            {isError && (
              <p className="text-red-600 text-xs">
                there is Error Please try Again
              </p>
            )}

            <Link to={"/login"} className="text-xs md:text-[15px]">
              هل لديك حساب في منصة social Links ?
            </Link>
            <Button
              disabled={isPending}
              size="sm"
              className={"bg-[#7966FA]  text-white mt-1"}
            >
              تسجيل
            </Button>
            <img src={logo} alt="Logo" className="w-40 h-40 mx-auto" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
