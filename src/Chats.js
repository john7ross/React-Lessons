import React from 'react';
import {useParams} from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DraftsIcon from "@mui/icons-material/Drafts";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const initialChats = [
    {
        name: "Chat1",
        messages: { text: "FirstMessage", author: "me" },
    },
    {
        name: "Chat2",
        messages: { text: "FirstMessageHereToo!", author: "not me" },
    }
];

const Chats = (chatsList) => {
    const {chatId} = useParams();
    if(!chatId) {
        return null;
    }
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                            <ListItemText primary={initialChats[chatId].name}/>
                    </ListItem>
                    <Divider/>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                            <ListItemText primary={initialChats[chatId].messages.text}/>
                    </ListItem>
                </List>
            </Box>
    );
};

export default Chats;