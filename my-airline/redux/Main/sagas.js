import { call, put } from "redux-saga/effects"
import {
    SET_AVAILABILITY
} from '../types';
import axios from 'axios';

export function* getDestinationAvailability(action) {
    try {
        const destinationPk = action.payload;
        const response = yield call(axios.get, `${process.env.NEXT_PUBLIC_BASE_HOST}/api/availability?destinationId=${destinationPk}`)
        yield put({type: SET_AVAILABILITY, payload: response.data.availability})
    } catch (error) {
        console.log(error);
    }
}