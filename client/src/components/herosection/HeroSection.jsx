// import heroImage from "../../images/social-hero.svg";

import heroImage from "@/images/social-hero.svg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="p-3 relative mt-4">
      <div className="mx-auto max-w-md md:flex md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-full">
        <div className="md:mt-8">
          <h1 className="mt-8 font-bold text-center text-xl lg:text-2xl ">
            <strong className="text-[#7966FA]">Social Links</strong> منصة عربيه
            تجمع لك كل روابطك المهمه
          </h1>

          <p className="mt-3 text-center lg:mt-8 lg:text-xl">
            social links منصة عربيه تقدر تحفظ كل روابطك الخاصة في منصه واحدة
            بشكل مبسط وسهل , تخصيص ثيم خاص في صفحة الروابط الخاصة فيك , تخصيص
            صورة ملف التعريف
          </p>
        </div>

        <div className="text-center">
          <img
            src={heroImage}
            className="w-72 h-72 mx-auto mt-5 md:w-4/5 md:h-4/5"
          />

          <Link to={"/register"}>
            <Button size="sm" className={"bg-[#7966FA]  text-white md:mt-8"}>
              سجل الان
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
