import { CONSTANTS } from "../actions";

const initialCardData = {
    title: "",
    status: "",
    description: ""
}

const cardsReducer = (state = { initialCardData }, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_CARD: {
            const { text, listID, id } = action.payload;

            const newCard = {
                text,
                cardId: `card-${id}`,
                list: listID
            };

            return { ...state, [`card-${id}`]: newCard };
        }

        default:
            return state;
    }
};

export default cardsReducer;