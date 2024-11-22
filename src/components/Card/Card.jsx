export const Card = ({ data }) => {
  const { name, image, original_name, birthday, gender, race } = data;

  const flexCenter = 'flex justify-center'

  return (
    <>
      <div className="bg-pink-900 h-full rounded-lg border-2 border-ngnl-border text-lg uppercase font-semibold text-gray-100">
        <p className={flexCenter}>{name}</p>
        <p className={flexCenter}>{original_name}</p>
        <div className={flexCenter}>
          <img
          className="m-2"
            src={image}
            alt={name}
            style={{
              width: "230px",
              height: "345px",
              objectFit: "fill",
            }}
          />
        </div>
        <div className="my-1">
          <p className={flexCenter}>{`- ${race} -`}</p>
          <p className={flexCenter}>{`- ${gender} -`}</p>
        </div>
      </div>
    </>
  );
};
