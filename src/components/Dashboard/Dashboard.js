import Header from "./Header/Header";
import LeftBar from "./LeftBar/LeftBar";
import { Outlet } from 'react-router-dom';
import { useState } from "react";
function Dashboard() {

    const [account, setAccount] = useState();
    function updateAccount(value) {
        setAccount(value);
    }
    // console.log(account);


    return (

        <div class="container-fluid ">
            <div class="row max-width" >
                <Header updateAccount={updateAccount} />
            </div>
            <div class="row max-width" style={{ backgroundColor: "#5b616a", height: "100vh" }}>
                <div class="col-lg-2 left-fixed" >
                    <LeftBar />
                </div>

                <div class="col-12 col-lg ms-auto main-scroll d-flex align-items-center justify-content-center mt-4" >
                    <Outlet context={account} />
                </div>
            </div>
        </div >

    );
}

export default Dashboard;
