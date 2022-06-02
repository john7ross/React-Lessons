import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chatsSelector} from "../redux/reducers/chatsReducer/selectors";
import {DELETE_CHAT, DELETE_MESSAGE_WITH_CHAT} from "../redux/actions/actionTypes";

export const Chats = () => {
    const chats = useSelector(chatsSelector);
    const dispatch = useDispatch();
    const deleteChat = (id) => {
        dispatch({type: DELETE_CHAT, payload: id})
        dispatch({type: DELETE_MESSAGE_WITH_CHAT, payload: id})
    };

    return (
        <div>
            {chats.map((item) => {
                return (
                    <div key={item.id}>
                        <Link to={`/messages/${item.id}`}>
                            ID {item.id} NAME {item.name}
                        </Link>
                    <button onClick={() => deleteChat(item.id)}>Delete chat</button>
                    </div>
                    )
            })
        }
        </div>
    )
};