import { CONSTANTS } from "../actions";

const initial = {
    statuses: [],
    error: null,
    loading: false,
}

const statucesReducer = (state = initial, action) => {
    switch (action.type) {
        case CONSTANTS.GET_STATUSES_REQUEST_START: {
            return { ...state, loading: true };
        }
        case CONSTANTS.GET_STATUSES_REQUEST_SUCCESS: {
            return { ...state, statuses: action.data, loading: false };
        }
        case CONSTANTS.GET_STATUSES_REQUEST_ERROR: {
            return { ...state, error: action.error, loading: false };
        }
        default:
            return state;
    }
};

export default statucesReducer;

