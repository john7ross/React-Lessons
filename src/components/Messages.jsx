import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {messagesSelector} from "../redux/reducers/messagesReducer/selectors";
import {useParams} from "react-router-dom";
import {ADD_CHAT, ADD_MESSAGE, DELETE_MESSAGE} from "../redux/actions/actionTypes";

export const Messages = () => {
    const {chatIds} = useParams();
    const dispatch = useDispatch();
    const messages = useSelector(messagesSelector);
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const message = messages.filter(() => {
        if(!chatIds)
            return true;
        return message.chatId ===+chatIds;
    });
    const deleteMessage = (id) => {
        dispatch({type: DELETE_MESSAGE, payload: id})
    };
    const addMessage = () => {
        const random = Math.random();
      const mess = {
          id: random,
          chatId: chatIds,
          author: inputAuthor,
          say: inputMessage
        };
        const chatAdd = {
            id: messages.length,
            name: inputAuthor
        };
        console.log(chatIds);
        dispatch({type: ADD_MESSAGE, payload: mess});
        dispatch({type: ADD_CHAT, payload: chatAdd})
    };
    return (
        <div>
            <input value={inputAuthor} onChange={(e) => setInputAuthor(e.target.value)}/>
            <input value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}/>
            <button onClick={addMessage}>Add message</button>
            {
                message.map((item) => {
                    return (
                            <div key={item.id}>
                                <p>{item.id}</p>
                                <p>{item.chatId}</p>
                                <p>{item.author}</p>
                                <p>{item.say}</p>
                                <button onClick={() => deleteMessage(item.id)}>Delete</button>
                            </div>
                        )
                })
            }
        </div>
    );
}
