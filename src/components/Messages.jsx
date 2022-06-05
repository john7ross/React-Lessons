import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {messagesSelector} from "../redux/reducers/messagesReducer/selectors";
import {useParams} from "react-router-dom";
import {addChats, addMessages, deleteMessages} from "../redux/actions/actions";

export const Messages = () => {
    const {chatIds} = useParams();
    const dispatch = useDispatch();
    const messages = useSelector(messagesSelector);
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const message = messages.filter((message) => {
        if(!chatIds)
            return true;
        return message.chatId ===+chatIds;
    });
    const deleteMessage = (id) => {
        dispatch(deleteMessages(id))
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
        dispatch(addMessages(mess));
        dispatch(addChats(chatAdd))
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
