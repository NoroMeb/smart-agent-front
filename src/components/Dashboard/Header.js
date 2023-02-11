import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';




function Header() {
    // const { account, activateBrowserWallet, deactivate } = useEthers()
    return (
        <Toolbar style={{ backgroundColor: "#272727" }} position="static">
            <Button >Connect</Button>
        </Toolbar>

    );
}

export default Header;