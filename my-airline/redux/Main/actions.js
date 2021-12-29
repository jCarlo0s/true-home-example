import {
    SET_CITIES,
    GET_AVAILABILITY,
    SET_RESERVATION,
    CLEAR_RESERVATIONS
} from "../types";

/**
 * Set city list from api
 * @param payload
 * @returns {{payload, type: string}}
 */
export function setCities(payload) {
    return {
        type: SET_CITIES,
        payload
    }
}

/**
 * request availability for a destination
 * @param payload
 * @returns {{payload, type: string}}
 */
export function getAvailability(payload) {
    return {
        type: GET_AVAILABILITY,
        payload,
    }
}

/**
 * Set a selected reservation on the state, pending for confirmation
 * @param payload
 * @returns {{payload, type: string}}
 */
export function setReservation(payload) {
    return {
        type: SET_RESERVATION,
        payload
    }
}

/**
 * Clear all the selected reservations
 * @return {{type: string}}
 */
export function clearReservations() {
    return {
        type: CLEAR_RESERVATIONS,
    }
}