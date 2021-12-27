import { combineReducers } from "redux";
// Reducers
import main from "./Main";
import reservation from "./Reservation";

const rootReducers = combineReducers({
    main,
    reservation,
})

export default rootReducers