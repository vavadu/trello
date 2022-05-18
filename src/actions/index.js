import { api } from '../data/api';
import { removeUserData } from '../data/storage';

export const CONSTANTS = {
    USER_AUTH_REQUEST_START: "USER_AUTH_REQUEST_START",
    USER_AUTH_REQUEST_SUCCESS: "USER_AUTH_REQUEST_SUCCESS",
    USER_AUTH_REQUEST_ERROR: "USER_AUTH_REQUEST_ERROR",
    USER_REGISTER_REQUEST_START: "USER_REGISTER_REQUEST_START",
    USER_REGISTER_REQUEST_SUCCESS: "USER_REGISTER_REQUEST_SUCCESS",
    USER_REGISTER_REQUEST_ERROR: "USER_REGISTER_REQUEST_ERROR",
    LOGOUT: "LOGOUT",
    ADD_CARD: "ADD_CARD",
    DRAG_HAPPENED: "DRAG_HAPPENED",
    EDIT_CARD: "EDIT_CARD",
    DELETE_CARD: "DELETE_CARD",
};




export const login = ({ login, password }) => dispatch => {
    dispatch({ type: CONSTANTS.USER_AUTH_REQUEST_START });
    return api.login({ login, password })
        .then(({ data }) => {
            dispatch({
                type: CONSTANTS.USER_AUTH_REQUEST_SUCCESS,
                data,
            })
        })
        .catch(message => {
            dispatch({
                type: CONSTANTS.USER_AUTH_REQUEST_ERROR,
                error: message
            })
        })
}

export const register = ({ login, email, password }) => dispatch => {
    dispatch({ type: CONSTANTS.USER_REGISTER_REQUEST_START });
    return api.register({ login, email, password })
        .then(({ data }) => {
            dispatch({
                type: CONSTANTS.USER_REGISTER_REQUEST_SUCCESS,
                data,
            })
        })
        .catch(message => {
            dispatch({
                type: CONSTANTS.USER_REGISTER_REQUEST_ERROR,
                error: message,
            })
        })
}

export const logout = () => ({
    type: CONSTANTS.LOGOUT
});