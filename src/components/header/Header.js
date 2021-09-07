import React, { Component } from 'react';

import NavTop from '../navtop/NavTop';
import MainMenu from '../mainmenu/MainMenu';


import './Header.css'

export default class Header extends Component {

    render() {
        return(
            <React.Fragment >
            <header>
                <NavTop />
            </header>
            <MainMenu />
            </React.Fragment>
        )
    }
}