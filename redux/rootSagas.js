import { getDestinationAvailability } from "./Main/sagas";
import { takeLatest, all } from 'redux-saga/effects';
import { GET_AVAILABILITY } from './types'

export default function* rootSaga() {
    yield all([
        takeLatest('GET_AVAILABILITY', getDestinationAvailability)
    ])
}
