import { CONSTANTS } from "../actions";

const initial = {
    cards: [],
    error: null,
    loading: false,
}

const cardsReducer = (state = initial, action) => {
    switch (action.type) {
        case CONSTANTS.GET_CARD_LIST_REQUEST_START: {
            return { ...state, loading: true };
        }
        case CONSTANTS.GET_CARD_LIST_REQUEST_SUCCESS: {
            return { ...state, cards: action.data, loading: false };
        }
        case CONSTANTS.GET_CARD_LIST_REQUEST_ERROR: {
            return { ...state, error: action.error, loading: false };
        }
        default:
            return state;
    }
};

export default cardsReducer;