import pageNotFound from "@/images/pageNotFound.png";

function NotFound() {
  return (
    <section>
      <div className="max-w-md flex flex-col items-center md:max-w-3xl xl:max-w-7xl 2xl:max-w-full">
        <h1 className="text-2xl text-center mt-12">الصفحة غير موجودة</h1>
        <img
          src={pageNotFound}
          alt="Page not Found"
          className="w-full h-2/3 md:w-2/3 xl:w-1/2"
        />
      </div>
    </section>
  );
}

export default NotFound;
