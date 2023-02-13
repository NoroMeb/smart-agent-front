import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';





function Header() {
    // const { account, activateBrowserWallet, deactivate } = useEthers()
    return (
        <div>
            <AppBar position='fixed' elevation={10}>
                <Toolbar>
                    Topbar
                </Toolbar>
            </AppBar >

        </div>
    );

}

export default Header;