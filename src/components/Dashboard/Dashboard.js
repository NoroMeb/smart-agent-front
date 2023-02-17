import Header from "./Header/Header";
import LeftBar from "./LeftBar/LeftBar";
import { Outlet } from 'react-router-dom';
import { useState } from "react";
function Dashboard() {

    const [account, setAccount] = useState();
    function updateMyProp(value) {
        setAccount(value);
    }
    // console.log(account);


    return (

        <div class="container-fluid ">
            <div class="row max-width" >
                <Header updateMyProp={updateMyProp} />
            </div>
            <div class="row max-width" style={{ backgroundColor: "#f68c8a", height: "100vh" }}>
                <div class="col-lg-2 left-fixed" >
                    <LeftBar />
                </div>

                <div class="col-12 col-lg ms-auto main-scroll d-flex align-items-center justify-content-center" >
                    <Outlet context={account} />
                </div>
            </div>
        </div >

    );
}

export default Dashboard;
