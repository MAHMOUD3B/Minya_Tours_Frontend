import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import RedeemCard from "../components/RedeemCard";
import { useEffect } from "react";
import { fetchRedeemCards } from "../RTK/Slices/APIs/redeem_cards";

const Redeem = () => {
  const dispatch = useDispatch();
  const redeemCards = useSelector((state) => state.redeemCards.cards);
  const popupStatus = useSelector((state) => state.popup.status);

  // fetch redeem cards in redeem page
  useEffect(() => {
    dispatch(fetchRedeemCards());
  }, []);

  return (
    <div className="bg-lightBage w-full min-h-[100vh]">
      <Navbar />
      <div className="p-10 pt-32 flex items-center h-full">
        <div className="row g-4 items-end">
          {redeemCards.map((card) => {
            return (
              <div key={card.id} className="col col-sm-12 col-md-6 col-lg-3">
                <RedeemCard redeemCardInfo={card} />
              </div>
            );
          })}
        </div>
      </div>
      {popupStatus && <Popup />}
    </div>
  );
};

export default Redeem;
