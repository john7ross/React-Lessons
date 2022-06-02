import {DELETE_CHAT, ADD_CHAT} from "../../actions/actionTypes";

const initialState = {
    chats: [
        {
        id: 0,
        name: 'Ivan'
    },
        {
            id: 1,
            name: 'Fedor'
        }
    ]
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_CHAT:
            return {
                ...state,
                chats: state.chats.filter(item => item.id !== action.payload)
            };
        case ADD_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload]
            };
        default:
            return state;
    }
}