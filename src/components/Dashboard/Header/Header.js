import * as React from 'react';
import { useEthers } from '@usedapp/core';
import { useEffect } from 'react';

export function Header(props) {

    const { activateBrowserWallet, account, deactivate } = useEthers();


    useEffect(() => {
        props.updateAccount(account);

    }, []);

    return (


        <nav class="navbar navbar-dark  ms-auto fixed-top navbar-dashboard">
            {/* <nav class="navbar navbar-dark  ms-auto fixed-top "> */}

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
                {account ? (
                    <button type="button" class="btn btn-primary custom-button" onClick={deactivate}>
                        {account.substring(0, 7)}...
                    </button>
                ) : (
                    <button type="button" class="btn btn-primary custom-button"
                        onClick={() => activateBrowserWallet()}
                    >
                        Connect
                    </button>
                )}

            </div>
        </nav>

    );

}

export default Header;