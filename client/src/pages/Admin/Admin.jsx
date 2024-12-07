import { Button } from "@/components/ui/button";
import ThemeChoice from "@/components/themechoice/ThemeChoice";
import { themeChoices } from "@/lib/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import UploadWidget from "@/components/uploadwidget/UploadWidget";
import { Link } from "react-router-dom";

function Admin() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const bio = useRef();
  const [avatar, setAvatar] = useState([]);

  const link1 = useRef();
  const linkName1 = useRef();

  const link2 = useRef();
  const linkName2 = useRef();

  const link3 = useRef();
  const linkName3 = useRef();

  const link4 = useRef();
  const linkName4 = useRef();

  const { data: userData, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const response = await fetch(
        "https://social-links-api.vercel.app/api/profileInfo",
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await response.json();

      return data;
    },
  });

  const {
    mutate: updateBio,
    data: updateUserData,
    isPending: isPendingUpdate,
  } = useMutation({
    mutationFn: async (updateData) => {
      const response = await fetch(
        "https://social-links-api.vercel.app/api/profileInfo",
        {
          method: "PUT",
          body: JSON.stringify(updateData),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      const data = await response.json();

      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["userData"]);
    },
    onError: (err) => console.log(err),
  });

  function handleUpdateProfile(e) {
    e.preventDefault();

    updateBio({ bio: bio.current.value, profilePic: avatar[0] });

    console.log("update");
  }

  const { mutate: logOut, isPending: isPendingLogOut } = useMutation({
    mutationFn: async () => {
      const response = await fetch(
        "https://social-links-api.vercel.app/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await response.json();

      return data;
    },

    onSuccess: (data) => {
      if (data.message.includes("Successful")) {
        updateUser(null);
        navigate("/");
        toast.success("تم تسجيل الخروج");
      }
    },
    onError: (err) => console.log(err),
  });

  function handleLogOut() {
    logOut();
  }

  const { mutate: createLinks, isPending: isPendingLinks } = useMutation({
    mutationFn: async (createData) => {
      const response = await fetch(
        "https://social-links-api.vercel.app/api/urlInfo",
        {
          method: "POST",
          body: JSON.stringify(createData),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const data = await response.json();
      return data;
    },
    onSuccess: (data) => {
      if (data.message === "please write links") {
        toast.error(data.message);
      } else {
        queryClient.invalidateQueries(["linksData"]);
        toast.success(data.message);
      }
    },
  });

  function handleSubmitLink(e) {
    e.preventDefault();

    createLinks([
      { name: linkName1.current.value, url: link1.current.value },
      { name: linkName2.current.value, url: link2.current.value },
      { name: linkName3.current.value, url: link3.current.value },
      { name: linkName4.current.value, url: link4.current.value },
    ]);
  }

  console.log();

  return (
    <section>
      <div className="max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-full">
        <div className="text-center mt-8">
          <Link
            to={`/page/${currentUser?.userInfo?.userName}`}
            className="text-base font-bold text-green-600 md:text-xl"
          >
            الصفحة الرئيسية لي اللينكات جاهزة أضغط هنا
          </Link>

          <h1 className="text-xl mt-5 md:text-[21px]">
            مرحبا فيك {currentUser?.userInfo?.userName}
          </h1>
        </div>

        <div className="w-32 h-32 rounded-full  mx-auto mt-5 ">
          <img
            className="object-fill rounded-full w-32 h-32 shadow-lg"
            src={
              avatar[0]
                ? avatar[0]
                : userData?.profile?.profilePic
                ? userData?.profile?.profilePic
                : ""
            }
          />
        </div>

        <div className="text-center flex flex-col items-center">
          {" "}
          {isPendingUpdate || isLoading ? (
            <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-t-blue-600 mt-2" />
          ) : (
            userData && (
              <p className=" p-3 md:text-xl">{userData?.profile?.bio}</p>
            )
          )}
        </div>
        <div className="flex flex-row gap-4 justify-center">
          <UploadWidget
            uwConfig={{
              cloudName: "dvqkafnnc",
              uploadPreset: "sociallinks",
              multiple: false,
              maxImageFileSize: 2000000,
              folder: "profilePic",
            }}
            setState={setAvatar}
          />
          <Button
            size="sm"
            className="bg-red-600  text-white mt-4 text-xs "
            onClick={handleLogOut}
            disabled={isPendingLogOut}
          >
            تسجيل خروج
          </Button>
        </div>

        <form className="flex flex-col items-center mt-8">
          <textarea
            type="text"
            placeholder="اكتب Bio الخاص فيك"
            className="w-3/4  rounded-sm outline-none border-[1px] border-gray-[200] focus:border-gray-900 p-1 text-xs md:text-[17px]"
            cols={32}
            rows={3}
            name="bio"
            ref={bio}
          />

          {updateUserData?.message && (
            <p className="text-red-600 text-xs mt-2 md:text-[15px]">
              {updateUserData?.message}
            </p>
          )}
          <Button
            size="sm"
            className="bg-[#7966FA]  text-white mt-4 text-xs w-16 "
            onClick={handleUpdateProfile}
            disabled={isPendingUpdate}
          >
            حفظ
          </Button>
        </form>

        <div className="flex flex-col items-center mt-7">
          <h2 className="md:text-xl lg:text-[21px]">
            اكتب Social Links الخاص فيك
          </h2>

          <form>
            <div className="flex flex-row items-center">
              <input
                type="text"
                name="urlName"
                className="text-right p-1  placeholder:text-xs md:placeholder:text-[13px] text-gray-900 h-7  rounded border-gray-200 border-[1px] outline-none 
              focus:border-gray-900 mt-3 w-32 ml-2 text-xs md:w-52 md:h-8 md:text-[15px] lg:w-64"
                placeholder="اكتب اسم الرابط"
                ref={linkName1}
              />
              <input
                type="text"
                name="urlLink"
                placeholder={"أكتب رابط URL"}
                className="text-right p-1  placeholder:text-xs text-gray-900 h-7 md:placeholder:text-[13px]  rounded border-gray-200 border-[1px] outline-none 
              focus:border-gray-900 mt-3 w-32 text-xs md:w-52 md:h-8 md:text-[15px] lg:w-64 "
                ref={link1}
              />
            </div>
            <div className="flex flex-row items-center">
              <input
                type="text"
                name="urlName"
                className="text-right p-1  placeholder:text-xs text-gray-900 h-7 md:placeholder:text-[13px]  rounded border-gray-200 border-[1px] outline-none 
              focus:border-gray-900 mt-3 w-32 ml-2 text-xs md:w-52 md:h-8 md:text-[15px] lg:w-64"
                placeholder="اكتب اسم الرابط"
                ref={linkName2}
              />
              <input
                type="text"
                name="urlLink"
                placeholder={"أكتب رابط URL"}
                className="text-right p-1  placeholder:text-xs text-gray-900 h-7 md:placeholder:text-[13px] rounded border-gray-200 border-[1px] outline-none 
              focus:border-gray-900 mt-3 w-32 text-xs md:w-52 md:h-8 md:text-[15px] lg:w-64"
                ref={link2}
              />
            </div>
            <div className="flex flex-row items-center">
              <input
                type="text"
                name="urlName"
                className="text-right p-1  placeholder:text-xs text-gray-900 h-7 md:placeholder:text-[13px] rounded border-gray-200 border-[1px] outline-none 
              focus:border-gray-900 mt-3 w-32 ml-2 text-xs md:w-52 md:h-8 md:text-[15px] lg:w-64"
                placeholder="اكتب اسم الرابط"
                ref={linkName3}
              />
              <input
                type="text"
                name="urlLink"
                placeholder={"أكتب رابط URL"}
                className="text-right p-1  placeholder:text-xs text-gray-900 h-7 md:placeholder:text-[13px]  rounded border-gray-200 border-[1px] outline-none 
              focus:border-gray-900 mt-3 w-32 text-xs md:w-52 md:h-8 md:text-[15px] lg:w-64"
                ref={link3}
              />
            </div>
            <div className="flex flex-row items-center">
              <input
                type="text"
                name="urlName"
                className="text-right p-1  placeholder:text-xs text-gray-900 h-7 md:placeholder:text-[13px]  rounded border-gray-200 border-[1px] outline-none 
              focus:border-gray-900 mt-3 w-32 ml-2 text-xs md:w-52 md:h-8 md:text-[15px] lg:w-64"
                placeholder="اكتب اسم الرابط"
                ref={linkName4}
              />
              <input
                type="text"
                name="urlLink"
                placeholder={"أكتب رابط URL"}
                className="text-right p-1  placeholder:text-xs text-gray-900 h-7 md:placeholder:text-[13px]  rounded border-gray-200 border-[1px] outline-none 
              focus:border-gray-900 mt-3 w-32 text-xs md:w-52 md:h-8 md:text-[15px] lg:w-64"
                ref={link4}
              />
            </div>
          </form>

          <Button
            size="sm"
            className="bg-[#7966FA]  text-white mt-4 text-xs w-16 "
            onClick={handleSubmitLink}
            disabled={isPendingLinks}
          >
            حفظ
          </Button>
        </div>

        <h3 className="text-center mt-24 md:text-xl">اختر الثيم الخاص فيك</h3>

        <div className="md:grid md:grid-cols-3 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-full ">
          {" "}
          {themeChoices.map((data) => {
            return (
              <ThemeChoice key={data.id} image={data.image} name={data.name} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Admin;
