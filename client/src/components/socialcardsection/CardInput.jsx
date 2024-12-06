/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

function CardInput({ handleChangeLinks, inputName, inputUrl, id }) {
  return (
    <div className="flex flex-row justify-center items-center ">
      <input
        type="text"
        value={inputName}
        onChange={handleChangeLinks}
        name="urlName"
        placeholder={inputName}
        className="text-right p-  placeholder:text-xs text-gray-900 h-7  rounded border-gray-200 border-[1px] outline-none focus:border-[#0a146a] mt-1 w-32 ml-4 md:w-44 md:text-sm md:h-8 lg:w-56 lg:text-[15px] lg:placeholder:text-[15px] lg:h-9 lg:mb-2"
        required={true}
        id={id}
      />
      <input
        type="text"
        value={inputUrl}
        name="urlLink"
        onChange={handleChangeLinks}
        placeholder={"أكتب رابط URL"}
        className="text-right p-1  placeholder:text-xs text-gray-900 h-7  rounded border-gray-200 border-[1px] outline-none focus:border-[#0a146a] mt-1 w-32 md:w-44 md:text-sm md:h-8 lg:w-56 lg:text-xl lg:placeholder:text-[15px] lg:h-9 lg:mb-2"
        required={true}
        id={id}
      />
    </div>
  );
}

export default CardInput;
