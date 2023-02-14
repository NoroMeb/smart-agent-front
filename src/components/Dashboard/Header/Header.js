import * as React from 'react';

export function Header() {


    return (
        <nav class="navbar navbar-dark  ms-auto ">
            <div class="container-fluid">
                <a
                    class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
                    href="#"
                >Smart Agent</a>
                <button
                    class="navbar-toggler me-2 "
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                >
                    <i class="bi bi-list"></i>
                </button>
                <button type="button" class="btn btn-primary custom-button">Connect</button>

            </div>
        </nav>
    );

}

export default Header;