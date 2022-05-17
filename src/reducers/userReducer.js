import { CONSTANTS } from "../actions";
import { setUserData, getUserData, removeUserData } from '../data/storage';

const initialState = {
    loading: false,
    user: getUserData(),
    error: null
}
const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.USER_AUTH_REQUEST_START: {

            return { ...state, loading: true };
        }
        case CONSTANTS.USER_AUTH_REQUEST_SUCCESS: {
            setUserData(action.data.user);
            return { ...state, user: action.data.user, loading: false };
        }
        case CONSTANTS.USER_AUTH_REQUEST_ERROR: {
            return { ...state, error: true, loading: false };
        }
        case CONSTANTS.USER_REGISTER_REQUEST_START: {
            return { ...state, loading: true };
        }
        case CONSTANTS.USER_REGISTER_REQUEST_SUCCESS: {
            setUserData(action.data.user);
            return { ...state, user: action.data.user, loading: false };
        }
        case CONSTANTS.USER_REGISTER_REQUEST_ERROR: {
            return { ...state, error: true, loading: false };
        }
        case CONSTANTS.LOGOUT: {
            removeUserData();
            return { ...state, user: null };
        }
        default:
            return state;
    }
};

export default userReduser;