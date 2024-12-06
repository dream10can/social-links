/* eslint-disable react/prop-types */
function CardUrl({ urlLink, checked, urlName }) {
  return (
    checked && (
      <div className="border-[#0a146a]  border w-56 h-8 mt-5 flex flex-col  justify-center font-light rounded-sm text-[13px] lg:w-[235px]">
        <a target="_blank" href={urlLink} className="text-[16px]">
          {" "}
          {urlName}
        </a>
      </div>
    )
  );
}

export default CardUrl;
