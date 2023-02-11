import { useEthers, account, activateBrowserWallet, deactivate } from "@usedapp/core";
import { Button } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { purple } from "@mui/material/colors";
function Dashboard() {
    const { account, activateBrowserWallet, deactivate } = useEthers()

    const theme = createTheme({
        palette: {
            primary: {
                main: '#15E700',
            },
            secondary: {
                main: '#15E700',
            },
        },
    });
    return (
        <div>
            <div>
                {account && <Button variant="contained" onClick={deactivate} >{account}</Button>}
                {!account && <Button variant="contained" onClick={() => activateBrowserWallet()} size="small">Connect</Button>}
            </div>
        </div>
    )
}

export default Dashboard;
