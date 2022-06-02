import {combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducer/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer/messagesReducer";

export const store = createStore(combineReducers({
    chats: chatsReducer,
    messages: messagesReducer}
    )
);