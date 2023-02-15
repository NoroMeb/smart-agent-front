import * as React from 'react';
import { useNavigate } from "react-router-dom";

function LeftBar() {
    const navigate = useNavigate();
    return (
        <div>
            <div class="offcanvas offcanvas-start text-white custom-offcanvas " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" >
                <nav class="navbar-dark mt-4">
                    <ul class="navbar-nav">



                        <li class='py-2'>
                            <a class="nav-link px-3 active " role="button" onClick={() => { navigate('/dashboard/add-collaboration'); }}>
                                <span class="me-2"><i class='fas fa-plus'></i></span>

                                <span>New Collaboration</span>
                            </a>
                        </li>
                        <li class='py-2'>
                            <a class="nav-link px-3 active " role="button" onClick={() => { navigate('/dashboard/collaborations'); }}>
                                <span class="me-2"><i class='far fa-handshake'></i></span>

                                <span>Collaborations</span>
                            </a>
                        </li>


                        <li class='py-2'>
                            <a class="nav-link px-3 active" role="button" onClick={() => { navigate('/dashboard/videos'); }}>
                                <span class="me-2"><i class='fab fa-youtube'></i></span>
                                <span>Videos</span>
                            </a>
                        </li>

                    </ul>
                </nav>

            </div>
        </div>
    );
}

export default LeftBar;