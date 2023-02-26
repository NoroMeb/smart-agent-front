import { useState } from "react";
import { Link } from "react-router-dom";
function NavBar() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    return (
        // <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top home-navbar" >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark  home-navbar" >
            <div class="container">
                <a class="navbar-brand home-navbar-brand" href="#">
                    Smart Agent
                </a>
                <button class="navbar-toggler" type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link  how-it-works" aria-current="page" href="#how-it-works-div">How it works</a>
                        </li>
                        <li class="nav-item">
                            <Link to={"/dashboard"} target="_blank"><a class="nav-link start-app" target="_blank">Start app</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

export default NavBar;