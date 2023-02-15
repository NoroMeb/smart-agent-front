import Header from "./Header/Header";
import LeftBar from "./LeftBar/LeftBar";
import { Outlet } from 'react-router-dom';
import HeaderTest from "./Header/HeaderTest";


function Dashboard() {
    return (
        // <div>
        //     <Header />
        //     <LeftBar />
        //     <Outlet />
        // </div>



        // <div class="container-fluid text-center">
        <div class="container-fluid ">
            <div class="row max-width" >
                <div class="col" style={{ backgroundColor: "yellow" }}>
                    <Header />
                </div>
            </div>




            <div class="row max-width no-gutters" >
                <div class="col-2" style={{ backgroundColor: "violet" }}>

                </div>
                <div class="col" style={{ backgroundColor: "green" }}>
                    <Outlet />
                </div>
            </div>
        </div>

    );
}

export default Dashboard;
