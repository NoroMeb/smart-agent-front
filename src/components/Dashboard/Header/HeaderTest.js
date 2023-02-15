import * as React from 'react';
import { useEthers } from '@usedapp/core';

export function HeaderTest() {


    return (
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );

}

export default HeaderTest;