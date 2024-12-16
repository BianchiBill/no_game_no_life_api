export const FullView = ({ data, key }) => {
  const { name, image, original_name, birthday, gender, race, history } = data;


  return (
    <>
      <div className="bg-pink-900 h-full rounded-lg border-2 border-ngnl-border text-lg font-semibold text-gray-100 grid grid-cols-2" key={key}>
        <div className='flex'>
          <img
          className="bg-red-400 w-full h-full flex m-2 rounded-lg justify-center items-center content-center"
            src={image}
            alt={name}
            style={{
              width: "230px",
              height: "345px",
              objectFit: "fill",
            }}
          />
        </div>
        <div className="my-1 bg-white text-ngnl-dark-pink rounded-lg">
            <p className='flex'>{name}</p>
            <p className='flex'>{original_name}</p>
          <p className='flex'>{`${race}`}</p>
          <p className='flex'>{`${birthday}`}</p>
          <p className='flex'>{`${gender}`}</p>
          <br/>
          <p className='flex'>{`${history}`}</p>
        </div>
      </div>
    </>
  );
};
