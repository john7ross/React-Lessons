import './App.css';
import React, {useEffect, useRef, useState} from "react";
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {Link, Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import Home from './Home';
import Chats from './Chats';
import NotFound from "./NotFound";

function App() {
    const [messageList, setMessageList] = useState([]);
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [chatArray, setChatArray] = useState([]); //массив чатов

    let idCounter = messageList.length;
    const textfieldRef = useRef(null);

    useEffect(() => {
        textfieldRef.current?.focus();
        if (messageList.length > 0)
            setTimeout(() => alert("Message send"), 1500)
    }, [messageList]);

    return (
        <div className="App">
            <header>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/chats'>Chats</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
            </header>
                <TextField
                    id="outlined-helperText"
                    label="Author"
                    defaultValue="Example: Ivan"
                    helperText="Enter your name"
                    size="small"
                    onChange={(e) => setAuthor(e.target.value)}
                    inputRef={textfieldRef}/>
                <TextField
                    id="outlined-search"
                    label="Enter your message"
                    type="search"
                    size="small"
                    onChange={(e) => setMessage(e.target.value)}/>
                <Button
                    variant="contained"
                    endIcon={<SendIcon/>}
                    size="normal"
                    onClick={() => {
                        setMessageList([...messageList, {
                            author: author,
                            text: message,
                            id: idCounter
                        }]);
                        setChatArray([...chatArray, {
                            id: Math.random().toString(36).slice(2, 7), //не сам, спасибо stackoverflow
                            name: author
                        }])
                    }}>Send</Button>
                {messageList.map((item) =>
                    <p key={item.id}>Author: {item.author}<br/>Say: {item.text}</p>
                )}
            <Routes>
                <Route index exact path='/' element={<Home/>}/>
                <Route path='/chats' element={<Chats/>}/>
                <Route path='/chats/:chatId' element={<Chats props={chatArray}/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
