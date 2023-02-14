import Header from "./Header/Header";
import LeftBar from "./LeftBar/LeftBar";
import { Outlet } from 'react-router-dom';



function Dashboard() {
    return (
        <div>
            <Header />
            <LeftBar />
            <Outlet />
        </div>
    );
}

export default Dashboard;
