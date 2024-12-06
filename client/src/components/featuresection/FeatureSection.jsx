import Heading from "@/components/ui/Heading";
import Card from "./Card";
import { FeatureData } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { titleFeature } from "@/lib/utils";
import { Link } from "react-router-dom";

function FeatureSection() {
  return (
    <section className=" mt-20 bg-[#F3F3F1]">
      <div className="text-center pt-6">
        <Heading title={titleFeature} />
      </div>
      <div className="flex flex-col items-center max-w-md  md:flex-row md:gap-8 md:max-w-3xl md:mx-4 md:mt-4 lg:max-w-5xl lg:justify-center xl:max-w-7xl 2xl:max-w-full ">
        {FeatureData.map((data) => {
          return (
            <Card
              key={data.id}
              title={data.heading}
              description={data.description}
              image={data.image}
            />
          );
        })}
      </div>
      <div className="text-center mt-12 ">
        <Link to={"/register"}>
          <Button size="sm" className={"bg-[#7966FA]  text-white mb-5"}>
            سجل الان
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default FeatureSection;
