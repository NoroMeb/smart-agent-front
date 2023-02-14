import * as React from 'react';
import { useNavigate } from "react-router-dom";

function LeftBar() {
    const navigate = useNavigate();
    return (
        <div>
            <div class="offcanvas offcanvas-start text-white custom-offcanvas " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" >


            </div>
        </div>
    );
}

export default LeftBar;