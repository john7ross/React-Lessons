import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chatsSelector} from "../redux/reducers/chatsReducer/selectors";
import {deleteChats, deleteChatsWithMessages} from "../redux/actions/actions";

export const Chats = () => {
    const chats = useSelector(chatsSelector);
    const dispatch = useDispatch();
    const deleteChat = (id) => {
        dispatch(deleteChats(id));
        dispatch(deleteChatsWithMessages(id))
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