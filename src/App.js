import './App.css';
import React, {useEffect, useRef, useState} from "react";
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {Link, Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import Home from './Home';
import Chats from './Chats';
import NotFound from "./NotFound";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FolderIcon from '@mui/icons-material/Folder';

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
            <nav style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: '30px',
                backgroundColor:'yellowgreen', minHeight: '60px', alignItems: 'center'}}>
                        <Link to='/'>Home</Link>
                        <Link to='/chats'>Chats</Link>
                        <Link to='/profile'>Profile</Link>
            </nav>
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
                <Route path='/chats/' element={<Chats messages={messageList}/>}>
                    <Route path=':id' element={<Chats messages={messageList}/>}/>
                </Route>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>

            <List subheader={<h3>Chats List</h3>} style={{maxWidth: '360px', backgroundColor:'greenyellow'}}>
            {chatArray.map((item) => {
        return(
            <>
                <Link to={`/chats/${chatArray.indexOf(item)}`}>
                <ListItem key={item.id} disablePadding>
                    <FolderIcon/>
                    <ListItemButton>
                        <ListItemText primary={<p> №{chatArray.indexOf(item)} Name: {item.name}</p>}
                                      secondary={<p>Chat Id: {item.id}</p>}/>
                    </ListItemButton>
                </ListItem>
                </Link>
                <Divider/>
            </>
        )
    })
}</List>
        </div>
    );
}

export default App;
