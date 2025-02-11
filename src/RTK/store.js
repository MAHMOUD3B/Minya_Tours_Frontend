import { configureStore } from "@reduxjs/toolkit";
import pointsReducer from "./Slices/points";
import popupReducer from "./Slices/popup";
// APIs
import redeemCardsReducer from "./Slices/APIs/redeem_cards";
import destinationReducer from "./Slices/APIs/destination";
import questionsReducer from "./Slices/APIs/questions";
import ticketsReducer from "./Slices/APIs/tickets";

const store = configureStore({
  reducer: {
    points: pointsReducer,
    popup: popupReducer,
    // APIs
    redeemCards: redeemCardsReducer,
    destination: destinationReducer,
    questions: questionsReducer,
    tickets: ticketsReducer,
  },
});
export default store;
