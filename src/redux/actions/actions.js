import {
    ADD_CHAT,
    ADD_MESSAGE,
    DELETE_CHAT,
    DELETE_MESSAGE,
    DELETE_MESSAGE_WITH_CHAT,
    ERROR,
    LOAD_USERS, LOADING
} from "./actionTypes";

export const deleteMessages = (id) => ({
    type: DELETE_MESSAGE, payload: id, meta: {
            delay: 1500
        }
});

export const addMessages = (mess) => ({
    type: ADD_MESSAGE, payload: mess
});


export const addChats = (chat) => ({
    type: ADD_CHAT, payload: chat
});

export const deleteChats = (chatId) => ({
 type: DELETE_CHAT, payload: chatId
});

export const deleteChatsWithMessages = (chatId) => ({
    type: DELETE_MESSAGE_WITH_CHAT, payload: chatId
});

export const loadUsersAction = (data) => ({
    type: LOAD_USERS, payload: data
});

export const loadingAction = () => ({
    type: LOADING
});

export const errorAction = (e) => ({
    type: ERROR, payload: e
});