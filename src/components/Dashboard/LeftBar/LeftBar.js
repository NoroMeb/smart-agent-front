import * as React from 'react';
import { useNavigate } from "react-router-dom";

function LeftBar() {
    const navigate = useNavigate();
    return (


        <div class=" col-sm-2 col-md-1 offcanvas offcanvas-start text-white custom-offcanvas " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"  >
            <nav class="navbar-dark mt-4">
                <ul class="navbar-nav">



                    <li class='py-2 li-left-bar'>
                        <a class="nav-link px-3 active " role="button" data-bs-dismiss="offcanvas" onClick={() => { navigate('/dashboard/add-collaboration'); }}>
                            <span class="me-2"><i class='fas fa-plus'></i></span>

                            <span style={{ marginLeft: '7px' }}>New Collaboration</span>
                        </a>
                    </li>
                    <li class='py-2 li-left-bar'>
                        <a class="nav-link px-3 active " role="button" data-bs-dismiss="offcanvas" onClick={() => { navigate('/dashboard/collaborations'); }}>
                            <span class="me-2"><i class='far fa-handshake'></i></span>

                            <span style={{ marginLeft: '1px' }}>Collaborations</span>
                        </a>
                    </li>


                    <li class='py-2 li-left-bar'>
                        <a class="nav-link px-3 active" role="button" data-bs-dismiss="offcanvas" >
                            <span class="me-2"><i class='fab fa-ethereum' style={{ fontSize: '18px' }}></i></span>
                            <span style={{ marginLeft: '8px' }}>Claim Owings</span>
                        </a>
                    </li>

                    <li class='py-2 li-left-bar'>
                        <a class="nav-link px-3 active" role="button" data-bs-dismiss="offcanvas" >
                            <span class="me-2"><i class='fas fa-trash' style={{ fontSize: '14px' }}></i></span>
                            <span style={{ marginLeft: '8px' }}>End Collaboration</span>
                        </a>
                    </li>
                    <li class='py-2  li-left-bar'>
                        <a class="nav-link px-3 active" role="button" data-bs-dismiss="offcanvas" onClick={() => { navigate('/dashboard/smart-contract'); }}>
                            <span class="me-2"><i class='fas fa-file-contract'></i></span>
                            <span style={{ marginLeft: '7px' }}>Smart Contract</span>
                        </a>
                    </li>

                </ul>
            </nav>

        </div>

    );
}

export default LeftBar;