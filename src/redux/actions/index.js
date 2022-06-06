import { api } from '../../data/api';

export const CONSTANTS = {
    USER_AUTH_REQUEST_START: "USER_AUTH_REQUEST_START",
    USER_AUTH_REQUEST_SUCCESS: "USER_AUTH_REQUEST_SUCCESS",
    USER_AUTH_REQUEST_ERROR: "USER_AUTH_REQUEST_ERROR",
    USER_REGISTER_REQUEST_START: "USER_REGISTER_REQUEST_START",
    USER_REGISTER_REQUEST_SUCCESS: "USER_REGISTER_REQUEST_SUCCESS",
    USER_REGISTER_REQUEST_ERROR: "USER_REGISTER_REQUEST_ERROR",
    LOGOUT: "LOGOUT",
    GET_CARD_LIST_REQUEST_START: "GET_CARD_LIST_REQUEST_START",
    GET_CARD_LIST_REQUEST_SUCCESS: "GET_CARD_LIST_REQUEST_SUCCESS",
    GET_CARD_LIST_REQUEST_ERROR: "GET_CARD_LIST_REQUEST_ERROR",
    GET_STATUSES_REQUEST_START: "GET_STATUSES_REQUEST_START",
    GET_STATUSES_REQUEST_SUCCESS: "GET_STATUSES_REQUEST_SUCCESS",
    GET_STATUSES_REQUEST_ERROR: "GET_STATUSES_REQUEST_ERROR",
    ADD_CARD_REQUEST_START: "ADD_CARD_REQUEST_START",
    ADD_CARD_REQUEST_SUCCESS: "ADD_CARD_REQUEST_SUCCESS",
    ADD_CARD_REQUEST_ERROR: "ADD_CARD_REQUEST_ERROR",
    UPDATE_CARD_REQUEST_START: "UPDATE_CARD_REQUEST_START",
    UPDATE_CARD_REQUEST_SUCCESS: "UPDATE_CARD_REQUEST_SUCCESS",
    UPDATE_CARD_REQUEST_ERROR: "UPDATE_CARD_REQUEST_ERROR",
    DELETE_CARD_REQUEST_START: "DELETE_CARD_REQUEST_START",
    DELETE_CARD_REQUEST_SUCCESS: "DELETE_CARD_REQUEST_SUCCESS",
    DELETE_CARD_REQUEST_ERROR: "DELETE_CARD_REQUEST_ERROR",

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

export const getCards = () => dispatch => {
    dispatch({ type: CONSTANTS.GET_CARD_LIST_REQUEST_START });
    return api.getCards()
        .then(({ data }) => {
            dispatch({
                type: CONSTANTS.GET_CARD_LIST_REQUEST_SUCCESS,
                data
            })
        })
        .catch(message => {
            dispatch({
                type: CONSTANTS.GET_CARD_LIST_REQUEST_ERROR,
                error: message,
            })
        })
}

export const getStatuses = () => dispatch => {
    dispatch({ type: CONSTANTS.GET_STATUSES_REQUEST_START });
    return api.getStatuses()
        .then(({ data }) => {
            dispatch({
                type: CONSTANTS.GET_STATUSES_REQUEST_SUCCESS,
                data
            })
        })
        .catch(message => {
            dispatch({
                type: CONSTANTS.GET_STATUSES_REQUEST_ERROR,
                error: message,
            })
        })
}

export const addCard = ({ title, status, description }) => dispatch => {
    dispatch({ type: CONSTANTS.ADD_CARD_REQUEST_START });
    return api.createCard({ title, status, description })
        .then(({ data }) => {
            dispatch({
                type: CONSTANTS.ADD_CARD_REQUEST_SUCCESS,
                data
            })
            dispatch(getCards());
        })
        .catch(message => {
            dispatch({
                type: CONSTANTS.ADD_CARD_REQUEST_ERROR,
                error: message,
            })
        })
}

export const deleteCard = ({ cardId }) => dispatch => {
    dispatch({ type: CONSTANTS.DELETE_CARD_REQUEST_START });
    return api.deleteCard({ cardId })
        .then(({ data }) => {
            dispatch({
                type: CONSTANTS.DELETE_CARD_REQUEST_SUCCESS,
                data
            })
            dispatch(getCards());
        })
        .catch(message => {
            dispatch({
                type: CONSTANTS.DELETE_CARD_REQUEST_ERROR,
                error: message,
            })
        })
}
export const updateCard = ({ cardId, title, status, description }) => dispatch => {
    dispatch({ type: CONSTANTS.UPDATE_CARD_REQUEST_START });
    return api.updateCard({ cardId, title, status, description })
        .then(({ data }) => {
            dispatch({
                type: CONSTANTS.UPDATE_CARD_REQUEST_SUCCESS,
                data
            })
            dispatch(getCards());
        })
        .catch(message => {
            dispatch({
                type: CONSTANTS.UPDATE_CARD_REQUEST_ERROR,
                error: message,
            })
        })
}