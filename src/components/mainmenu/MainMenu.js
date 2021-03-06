import React, { Component } from 'react';
import './MainMenu.scss';

import logo from '../../assets/imgs/logo.png';

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
                            <h1>Centro Avançado<br/>
                            de Especialidades Veterinárias</h1>
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
                                    <a className="nav-link" href="#al-about">Quem Somos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#al-services">Serviços</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Clínica</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#al-team">Equipe</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#al-news">Notícias</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#al-contact">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}