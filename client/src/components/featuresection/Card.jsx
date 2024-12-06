// eslint-disable-next-line react/prop-types
function Card({ title, description, image }) {
  return (
    <div className="bg-white w-60 h-72  mt-10 p-3 rounded-md flex flex-col  items-center shadow-lg">
      {title && (
        <div className="w-40 h-14 bg-[#EFF0EC] rounded-full p-1 flex flex-col items-center justify-center mt-10 shadow-md">
          <h2 className="text-[#70764D] ">{title}</h2>
        </div>
      )}
      {image && <img src={image} className="w-36 h-36  "></img>}
      <p className="mt-10 text-center text-sm font-bold">{description}</p>
    </div>
  );
}

export default Card;
