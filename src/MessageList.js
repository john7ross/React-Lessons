import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function BasicList() {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
           <List>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemButton>
                            <ListItemText primary="Some Text"/>
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemButton>
                            <ListItemText primary="Another Text"/>
                        </ListItemButton>
                    </ListItem>
                </List>
        </Box>
    );
}