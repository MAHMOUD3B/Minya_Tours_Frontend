

const DestinationCard = ({ info }) => {
  const IMG_BASE_URL = "./assets/images/";
  const { image, title } = info;

  return (
    <div className="rounded-xl border border-black overflow-hidden hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300">
      <div className="card w-full md:flex-row">
        <img
          className="card-img-top md:max-w-[400px]"
          src={`${IMG_BASE_URL}${image}`}
          alt={`Image of ${title}`}
        />
        <div className="card-body">
          <h5 className="card-title text-ovalGreen text-[24px] lg:text-[36px]">
            {title}
          </h5>

          {info.description && (
            <p className="card-text text-black text-[18px] lg:text-[22px]">
              {info.description}
            </p>
          )}
          {info.tips && (
            <ul className="px-5">
              {info.tips.map((tip, index) => {
                const value = Object.values(tip);
                return (
                  <li key={index} className="list-disc text-lg mb-3">
                    {value}
                  </li>
                );
              })}
            </ul>
          )}
          {info.landmarks && (
            <ul className="px-3">
              {info.landmarks.map((land, index) => {
                const { title, description } = land;

                return (
                  <li key={index} className="list-decimal font-bold text-broun">
                    <p>{title}</p>
                    <ul>
                      {description.map((descs, index) => {
                        const desc = Object.values(descs);
                        return (
                          <li
                            key={index}
                            className="list-disc list-inside font-normal text-black"
                          >
                            {desc}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
