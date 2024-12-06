import Heading from "../ui/Heading";
import ThemeCard from "./ThemeCard";
import { themeCardData } from "@/lib/utils";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function ThemeCardSection() {
  const title = "اختار ثيمك الخاص";
  return (
    <section className=" mt-16 text-center">
      <Heading title={title} />
      <div className="flex flex-col items-center mt-5 max-w-md md:grid md:grid-cols-3 md:gap-9 md:content-center md:max-w-3xl md:p-2 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-full lg:place-items-center">
        {themeCardData.map((data) => {
          return <ThemeCard key={data.id} data={data} />;
        })}
      </div>
      <Link to={"/register"}>
        {" "}
        <Button size="sm" className="bg-[#7966FA]  text-white mb-7 ">
          سجل الان
        </Button>
      </Link>
    </section>
  );
}

export default ThemeCardSection;
