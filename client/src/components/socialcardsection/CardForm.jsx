/* eslint-disable react/prop-types */

import CardInput from "./CardInput";

function CardForm({ handleChangeLinks, cardLinksData }) {
  return (
    <div className="flex flex-col ">
      <h1 className="mt-4 md:text-xl lg:text-2xl">اكتب معلومات الروابط</h1>
      <form className="text-xs text-center  mt-2 lg:mt-8">
        {cardLinksData.map((formData, index) => {
          return (
            <CardInput
              key={index}
              inputName={formData.urlName}
              inputUrl={formData.urlLink}
              handleChangeLinks={handleChangeLinks}
              id={index}
            />
          );
        })}
      </form>
    </div>
  );
}

export default CardForm;
