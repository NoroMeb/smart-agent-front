import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { LeftBarListItems } from "./consts/LeftBarListItems";
import { LeftBarStyles } from './styles';
import { useNavigate } from "react-router-dom";
import { BorderAllRounded } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

function LeftBar() {
    const navigate = useNavigate();
    return (
        <nav>
            <Drawer
                sx={LeftBarStyles.drawer}
                variant="permanent"
                anchor="left"
                position="sticky"
            >
                <Toolbar />
                <Divider />
                <List>
                    {LeftBarListItems.map((item, index) => (
                        <ListItem key={item.id} disablePadding onClick={() => navigate(item.route)}>
                            <ListItemButton >
                                <ListItemIcon sx={LeftBarStyles.icons}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.label} sx={LeftBarStyles.item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
        </nav>
    );
}

export default LeftBar;