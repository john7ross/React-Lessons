import React from 'react';
import {useParams} from "react-router-dom";

const Chats = ({messages}) => {
    const params = useParams();
    const prodId = params.id;
    const chatMessage = messages.find(p => p.id == prodId);
    if(chatMessage === undefined)
        return <h2>Messages List is empty</h2>;
    else
        return <h2>{chatMessage.text}</h2>;
};

export default Chats;