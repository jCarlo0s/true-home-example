import {
    SET_CITIES
} from "../../types";

export const initialState = {
    cities: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITIES:
            return {
                ...state,
                cities: action.payload
            }
        default:
            return {...state}
    }
}

export default reducer