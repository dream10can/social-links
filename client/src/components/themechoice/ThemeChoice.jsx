/* eslint-disable react/prop-types */
import profilePic from "@/images/profile-pic.jpg";
import { Button } from "../ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function ThemeChoice({ image, name }) {
  const queryClient = useQueryClient();
  const { mutate: updateTheme, isPending } = useMutation({
    mutationFn: async (updateData) => {
      const response = await fetch(
        "https://social-links-api.vercel.app/api/profileInfo/updateTheme",
        {
          method: "PUT",
          body: JSON.stringify(updateData),
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userDataTheme"]);
      toast.success("تم تحديث الثيم");
    },
  });
  function handleThemeUpdate(name) {
    updateTheme({ theme: name });
  }
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-5 mt-5">
        {" "}
        <img
          src={image}
          alt={name}
          className="object-center w-52 h-[400px] rounded-md shadow-lg xl:w-72 xl:h-[450px]"
          loading="lazy"
        />
        <div className="w-20 h-20  rounded-full mt-5 shadow-lg absolute top-0 right-16 xl:right-24">
          <img
            src={profilePic}
            alt={"profile image"}
            className="rounded-full  w-20 h-20 object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <p>{name}</p>
      <Button
        size="sm"
        className="bg-[#7966FA]  text-white mt-4 text-xs w-16 "
        disabled={isPending}
        onClick={() => {
          handleThemeUpdate(name);
        }}
      >
        اختر الثيم
      </Button>
    </div>
  );
}

export default ThemeChoice;
