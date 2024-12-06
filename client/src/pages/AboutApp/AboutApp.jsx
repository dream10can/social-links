import coding from "@/images/coding.png";
import linkdin from "@/images/linkedin.png";

function AboutApp() {
  return (
    <section>
      <div className="max-w-md text-center flex flex-col items-center md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-full">
        <h1 className="text-xl mt-6 md:text-[21px]">عن التطبيق</h1>
        <p className="mt-6 p-1 md:text-[21px] md:p-2">
          Social Links منصة عربيه تهدف لي تسهيل عملية جمع الروابط الخاصة بي
          المشهور او صاحب مشروع بشكل سهل{" "}
        </p>

        <img
          src={coding}
          alt="coding with laptop pic"
          className="w-72 h-60 mt-7 md:w-1/2 md:h-1/2"
        />

        <div className="flex flex-row-reverse">
          {" "}
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
      </div>
    </section>
  );
}

export default AboutApp;
