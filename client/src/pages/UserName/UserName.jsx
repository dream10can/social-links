import skystars from "@/images/skystars.jpg";
import skyblue from "@/images/skyblue-theme.jpg";
import skyOrange from "@/images/sky-orange-theme.jpg";
import playerTheme from "@/images/player.jpg";
import coffeeTheme from "@/images/cup-coffee.jpg";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import NotFound from "../NotFound/NotFound";

function UserName() {
  const { userNameId } = useParams();
  const { data: userData, isPending } = useQuery({
    queryKey: ["userDataTheme", userNameId],
    queryFn: async () => {
      const response = await fetch(
        `https://social-links-api.vercel.app/api/profileInfo/${userNameId}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      return data;
    },
  });

  const { data: linksData, isLoading: dataFetching } = useQuery({
    queryKey: ["linksData", userNameId],
    queryFn: async () => {
      const response = await fetch(
        `https://social-links-api.vercel.app/api/urlInfo/${userNameId}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      return data;
    },
  });

  return isPending || dataFetching ? (
    <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-t-blue-600 mt-2 top-1/2 right-1/2 absolute" />
  ) : !userData ? (
    <NotFound />
  ) : (
    <section className="relative">
      <img
        src={
          userData?.profile?.theme === "ثيم النجوم"
            ? skystars
            : userData?.profile.theme === "ثيم السماء"
            ? skyblue
            : userData?.profile?.theme === "ثيم الارض"
            ? skyOrange
            : userData?.profile?.theme === "ثيم رياضي"
            ? playerTheme
            : userData?.profile?.theme === "ثيم كوفي"
            ? coffeeTheme
            : ""
        }
        alt="theme pic"
        className={`${
          userData?.profile?.theme === "sportTheme" ||
          userData?.profile?.theme === "coffeeTheme"
            ? "object-cover"
            : "object-fill"
        } object-center w-screen h-screen`}
      />{" "}
      <div className="w-20 h-20 md:w-32 md:h-32  rounded-full mt-5 shadow-lg absolute top-0 left-0 right-0 m-auto">
        <img
          src={userData?.profile?.profilePic}
          alt={"profile pic"}
          className="rounded-full  w-20 h-20 object-cover md:w-32 md:h-32"
          loading="lazy"
        />
      </div>
      <h1
        className={`absolute top-32 ${
          userData?.profile?.theme === "ثيم كوفي" ? "text-black" : "text-white"
        } left-0 right-0 text-center text-xl md:mt-8 md:text-2xl lg:text-3xl lg:mt-10`}
      >
        {userData?.userName}
      </h1>
      <p
        className={`absolute top-40 ${
          userData?.profile?.theme === "ثيم كوفي" ? "text-black" : "text-white"
        } left-0 right-0 text-center p-2 md: mt-8 md:text-xl lg:text-2xl lg:mt-12`}
      >
        {userData?.profile?.bio}
      </p>{" "}
      <div className="absolute top-52 left-0 right-0 md:mt-6 lg:mt-9">
        {linksData.links?.map((data) => (
          <div
            key={data.id}
            className={`left-0 right-0 mt-3  m-auto w-64 h-8 md:w-72 md:h-9 border  rounded-xl ${
              userData?.profile?.theme === "ثيم كوفي"
                ? "text-black border-black"
                : "text-white"
            } flex flex-col items-center justify-center md:text-xl lg:w-2/6`}
          >
            <a href={data?.url} target="_blank ">
              {data?.name}
            </a>
          </div>
        ))}
      </div>{" "}
    </section>
  );
}

export default UserName;
