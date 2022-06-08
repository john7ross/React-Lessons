import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducer/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer/messagesReducer";
import {createLogger} from "redux-logger/src";
import {userReducer} from "./reducers/userReducer/userReducer";
import thunk from "redux-thunk";

const confirmDeleteMessage = store => next => action => {
    const delay = action?.meta?.delay;
    if(!delay) {
        return next(action);
    }

    const timeOut = setTimeout(() => {
        next(action);
        window.confirm("Are you really want to delete this message?")
    }, delay);

   return () => clearTimeout(timeOut);
};

const logger = createLogger({
    diff: true,
    collapsed: true
});

export const store = createStore(combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    users: userReducer}
    ), applyMiddleware(thunk, confirmDeleteMessage, logger)
);