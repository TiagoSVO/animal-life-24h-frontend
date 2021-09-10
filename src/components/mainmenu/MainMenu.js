import React, { Component } from 'react';
import './MainMenu.css';

import logo from '../../assets/imgs/logo_v1.png';

export default class MainMenu extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <nav className="al-main-menu navbar navbar-expand-sm sticky-top fixed-top navbar-light">
                    <div className="container">
                        <a className="navbar-brand al-brand" href="#">
                            <img className="img-fluid" src={logo} alt="logo Animal Life 24h" />
                        </a>
                        <div className="al-brand-title me-auto">
                            <span>Centro Avançado<br/>
                            de Especialidades Veterinárias</span>
                        </div>
                        <button className="ms-auto navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMainMenu" aria-controls="navbarMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarMainMenu">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Serviços</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Clínica</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Notícias</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Quem Somos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}