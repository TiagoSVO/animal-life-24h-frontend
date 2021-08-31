import React from 'react';
import { say_hello } from '../../assets/js/utils';
import './App.css';

import logo from '../../assets/imgs/logo_v1.png';

function App() {
    return (
        <React.Fragment>
            <nav className="al-top-nav-bar navbar navbar-expand-lg">
                <div className="container">
                    <div className="w-50">
                        <span className="nav-item me-2">
                            <i className="bi bi-telephone-fill" role="img" aria-label="Telefone"></i> (61) 3542-4076
                        </span>
                        <span className="nav-item m-2">
                            <i className="bi bi-whatsapp" role="img" aria-label="Whatsapp"></i> (61) 9.9685-3227
                        </span>
                    </div>
                    <div className="w-50 text-end">
                        <span className="nav-item m-2">
                            <i className="bi bi-envelope-fill" role="img" aria-label="Email - (61) 3542-4076"></i>
                        </span>
                        <span className="nav-item m-2">
                            <i className="bi bi-instagram" role="img" aria-label="Telefone - (61) 3542-4076"></i>
                        </span>
                        <span className="nav-item ms-2">
                            <i className="bi bi-youtube" role="img" aria-label="Telefone - (61) 3542-4076"></i>
                        </span>
                    </div>
                    
                </div>
            </nav>

            <nav className="al-main-menu navbar navbar-expand-sm sticky-top">
                <div className="container">
                    <a className="navbar-brand al-brand" href="#">
                        <img className="img-fluid" src={logo} alt="logo Animal Life 24h" />
                    </a>
                    <div className="ms-auto">
                        <div className="collapse navbar-collapse" id="navbarMainMenu">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
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
                    <button className="ms-auto navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMainMenu" aria-controls="navbarMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            

            <div>
                {say_hello()}
                <h1>Olá Mundo!</h1>
                <small>Agora com react.</small>
            </div>
        </React.Fragment>
    )
}

export default App;