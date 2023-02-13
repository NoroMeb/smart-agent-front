import Header from "./Header/Header";
import LeftBar from "./NavBar/LeftBar";
import { Outlet } from 'react-router-dom';
import Videos from './pages/Videos';
import Grid from '@mui/material/Grid';



function Dashboard() {
    return (
        <Grid container >
            <LeftBar />
            <Outlet />
        </Grid>
    );
}

export default Dashboard;
