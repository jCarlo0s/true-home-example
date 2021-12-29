import {
    SET_CITIES,
    SET_AVAILABILITY,
    SET_RESERVATION,
    CLEAR_RESERVATIONS,
} from "../types";
import {HYDRATE} from 'next-redux-wrapper';

export const initialState = {
    cities: [],
    availability: [],
    reservations: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITIES:
            return {
                ...state,
                cities: action.payload.cities
            }
        case HYDRATE:
            return {
                ...state,
                ...action.payload.main,
            };
        case SET_AVAILABILITY:
            return {
                ...state,
                availability: action.payload
            }
        case SET_RESERVATION:
            const reservations = state.reservations;
            reservations.push(action.payload)
            return {
                ...state,
                reservations: reservations
            }
        case CLEAR_RESERVATIONS:
            return {
                ...state,
                availability: [],
                reservations: []
            }
        default:
            return {...state}
    }
}

export default reducer