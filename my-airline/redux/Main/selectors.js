import { initialState } from "./reducer";
import { createSelector } from "reselect";

/**
 * Main state entity
 * @param state
 * @returns {*|{cities: [], availability: []}}
 */
const mainEntity = state => state.main || initialState;

/**
 * Select city list from main entity
 * @returns cities[]
 */
export const selectCities = createSelector(
    mainEntity,
    main => main.cities
)

/**
 * Select availability list from main entity
 * @returns availability[]
 */
export const selectAvailability = createSelector(
    mainEntity,
    main => main.availability
)

/**
 * Get reservation total
 * @returns Int
 */
export const selectTotal = createSelector(
    mainEntity,
    main => {
        let total = 0;
        main.reservations.forEach(reservation => {
            total += reservation.price
        })
        return total;
    }
)

/**
 * Have reservations ?
 * @returns Boolean
 */
export const haveReservations = createSelector(
    mainEntity,
    main => (main.reservations.length > 0)
)

/**
 * Get actual selected reservations
 * @returns reservations[]
 */
export const selectReservations = createSelector(
    mainEntity,
    main => main.reservations
)