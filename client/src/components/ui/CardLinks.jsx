/* eslint-disable react/prop-types */
import cardImage from "@/images/iphone12.jpg";
import CardUrl from "../socialcardsection/CardUrl";
function CardLinks({ cardLinksData }) {
  return (
    <div className="bg-[#E0E2D9] w-60 h-[500px] rounded-md shadow-lg flex flex-col items-center p-2 lg:w-72">
      <div className="w-20 h-20  rounded-full mt-10 shadow-lg">
        <img
          src={cardImage}
          alt="iphone case"
          className="rounded-full  w-20 h-20 object-fill"
        />
      </div>

      <h2 className="text-sm mt-3 text-[#0a146a] lg:text-[16px]  ">
        Teck Time
      </h2>
      <p className="text-xs mt-3 font-200 text-[#0a146a] lg:text-[14px]">
        متجر جوالات متخصص في iphone Cases
      </p>

      {cardLinksData.map((linksData) => {
        return (
          <CardUrl
            key={linksData.id}
            urlLink={linksData.urlLink}
            urlName={linksData.urlName}
            checked={linksData.show}
          />
        );
      })}
    </div>
  );
}

export default CardLinks;
