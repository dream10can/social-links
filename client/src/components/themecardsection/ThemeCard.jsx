/* eslint-disable react/prop-types */
// import ThemeCardLinks from "./ThemeCardLinks";

function ThemeCard({ data }) {
  return (
    <div className="relative mb-16">
      {" "}
      <img
        src={data.mainImage}
        alt={data.altName}
        className={`${data.imageSize} object-center w-60 h-[400px] rounded-md shadow-lg lg:w-72 lg:h-[450px]`}
        loading="lazy"
      />
      <div className="w-20 h-20  rounded-full mt-5 shadow-lg absolute top-0 right-20 lg:right-[100px]">
        <img
          src={data.profileImage}
          alt={data.altName}
          className="rounded-full  w-20 h-20 object-cover"
          loading="lazy"
        />
      </div>
      <div
        className={`text-center flex flex-col items-center ${
          data.themeColor == "black" ? `text-black` : `text-white`
        }`}
      >
        {" "}
        <h2 className="text-sm  absolute top-32 font-bold lg:text-[17px] ">
          {data.title}
        </h2>
        <p className="text-xs  font-200  absolute top-40 lg:text-[14px]">
          {data.bio}
        </p>
      </div>
      <div
        className={`flex flex-col items-center ${
          data.themeColor == "black" ? `text-black` : `text-white`
        }`}
      >
        {data.themeLinks.map((link) => {
          return (
            <div
              key={link.id}
              className={`${
                data.themeColor == "black" ? `border-black` : `border-white`
              }  border w-52 h-8  flex flex-col  justify-center  font-light ${
                data.themeName == "ثيم سوشال"
                  ? "rounded-xl bg-white text-black"
                  : data.themeName == "ثيم السماء"
                  ? "rounded-xl bg-white text-black"
                  : data.themeName == "ثيم الارض"
                  ? "rounded-xl bg-white text-black"
                  : "rounded-sm"
              } text-[13px] absolute lg:w-60 lg:text-[15px]
              ${link.top}`}
            >
              <a href="">{link.linkName}</a>
            </div>
          );
        })}
      </div>
      <h2 className="mt-4 font-bold">{data.themeName}</h2>
    </div>
  );
}

export default ThemeCard;
