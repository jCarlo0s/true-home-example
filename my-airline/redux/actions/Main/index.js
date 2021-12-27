import {
    SET_CITIES
} from "../../types";

export function setCities(payload) {
    return {
        type: SET_CITIES,
        payload
    }
}