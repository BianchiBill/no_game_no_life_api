export const Card = ({data}) => {
  const {
    name,
    image,
    original_name,
    birthday,
    age = 0,
    gender,
    race = ' ',
    history,
    } = data



  return (
    <>
    <div className="m-4">
    <div className="bg-ngnl-pink w-full h-full rounded-lg border border-ngnl-border shadow-md flex flex-col">
      <h2 className="flex flex-col items-center content-center text-lg uppercase font-semibold text-ngnl-dark-pink">{name}</h2>
      <h2 className="flex flex-col items-center content-center text-lg uppercase font-semibold text-ngnl-dark-pink">{original_name}</h2>
      <div className="flex flex-col items-center content-center">
      <img src={image} alt={name} width="230" height='345' className="border-4 border-ngnl-border items-center object-cover" />
      </div>
      <h2 className="flex flex-col items-center content-center text-lg uppercase font-semibold text-ngnl-dark-pink">{race}</h2>
      <p className="text-gray-100 text-lg sm:text-base md:text-sm lg:text-base max-w-xs truncate px-3">{`History: ${history}`}</p>
      <p className="text-gray-100 text-lg sm:text-base md:text-sm lg:text-base max-w-xs truncate px-3">{`Gender: ${gender === undefined ? 'Unknown' : gender}`}</p>
      <p className="text-gray-100 text-lg sm:text-base md:text-sm lg:text-base max-w-xs truncate px-3">{`Birthday: ${birthday === undefined ? 'Unknown' : birthday}`}</p>
    </div>
    </div>
    </>
  );
}
