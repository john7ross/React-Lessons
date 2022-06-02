import {ADD_MESSAGE, DELETE_MESSAGE, DELETE_MESSAGE_WITH_CHAT} from "../../actions/actionTypes";

const initialState = {
    messages: [
        {
            id: 0,
            chatId: 0,
            author: "Ivan",
            say: "Hi"
        },
        {
            id: 1,
            chatId: 1,
            author: "Fedor",
            say: "Good morning"
        },
        {
            id: 2,
            chatId: 0,
            author: "Andrey",
            say: "Hello"
        }
    ]
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(item => item.id !== action.payload)
            };
        case DELETE_MESSAGE_WITH_CHAT:
            return {
                ...state,
                messages: state.messages.filter(item => item.chatId !== action.payload)
            };
        default:
            return state;
    }
}