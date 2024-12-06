import Heading from "@/components/ui/Heading";
import { titleCard } from "@/lib/utils";
import CardLinks from "../ui/CardLinks";
import CardForm from "./CardForm";
import { useState } from "react";
import { cardLinksData } from "@/lib/utils";

function SocialCardSection() {
  const [cardData, setCardData] = useState(cardLinksData);

  function handleChangeLinks(e) {
    const newCardData = cardData.map((items, i) => {
      if (parseInt(e.target.id) === i) {
        return {
          ...items,
          [e.target.name]: e.target.value,
        };
      } else {
        return items;
      }
    });

    return setCardData(newCardData);
  }
  return (
    <section className="text-center">
      <Heading title={titleCard} />
      <div className="flex flex-col items-center mt-5 max-w-md md:flex-row md:gap-9 md:items-center md:max-w-3xl md:justify-center lg:max-w-5xl lg:gap-16 xl:max-w-7xl 2xl:max-w-full">
        {" "}
        <CardLinks cardLinksData={cardData} />
        <CardForm
          handleChangeLinks={handleChangeLinks}
          cardLinksData={cardData}
        />
      </div>
    </section>
  );
}

export default SocialCardSection;
