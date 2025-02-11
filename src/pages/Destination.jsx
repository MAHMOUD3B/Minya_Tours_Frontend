import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestination } from "../RTK/Slices/APIs/destination";

const Destination = () => {
  const dispatch = useDispatch();

  const { loading, destInfo } = useSelector((state) => state.destination);

  useEffect(() => {
    dispatch(fetchDestination());
  }, [dispatch]);

  return (
    <div className="bg-white w-full min-h-[100vh]">
      <Navbar />
      {loading ? (
        <p className="text-center py-28 text-[30px] text-ovalGreen">
          Loading content...
        </p>
      ) : (
        <div className="h-full">
          <div className="p-10 pt-32 flex items-center">
            <div className="row g-4">
              {destInfo.map((dest) => {
                return (
                  <div key={dest.id} className="col-12">
                    <DestinationCard info={dest} />
                  </div>
                );
              })}
            </div>
          </div>
          <Link
            to={"questions"}
            className="btn bg-darkRed text-white hover:bg-broun hover:text-lightYellow text-[18px] lg:text-[24px] block mx-auto mb-10 w-fit rounded-lg"
          >
            Questions
          </Link>
        </div>
      )}
    </div>
  );
};

export default Destination;
