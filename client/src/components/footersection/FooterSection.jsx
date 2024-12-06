import linkdin from "@/images/linkedin.png";
import logo from "@/images/social-logo.png";
function FooterSection() {
  return (
    <section className=" h-full">
      <img src={logo} alt="Logo" className="w-52 h-52 mx-auto" />

      <div className="flex flex-row-reverse items-center justify-center mt-5 h-full max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-full mx-auto">
        <p className="md:text-base lg:text-lg">Created by AbdDev</p>
        <a
          href="https://www.linkedin.com/in/abdullah-faisal-%E2%80%8B%F0%9F%92%BB%E2%80%8B-570203206/"
          className="cursor:pointer ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkdin} alt="linedin" />
        </a>
      </div>
    </section>
  );
}

export default FooterSection;
