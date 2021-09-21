import React, { Component } from 'react';

import './FooterMenu.scss'
import logo from '../../assets/imgs/logo_v1.png';

export default class FooterMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section id="al-footer-menu">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div className="col d-block">
                            <div className="clearfix al-footer-menu-inner-col">
                                <img src={logo} className="al-footer-menu-logo"/>
                                <p> A nossa clínica dispõe de
                                    uma excelente estrutura
                                    para cuidar do seu melhor
                                    amigo. Contamos com
                                    uma equipe altamente
                                    qualificada que vai tratar
                                    do seu animal com muito
                                    carinho e profissionalismo.
                                </p>
                            </div>
                            <div className="clearfix al-footer-menu-inner-col-divider ">
                                <hr/>
                            </div>
                            <div className="al-footer-menu-inner-col">
                                <h5>Serviços</h5>
                                <ul>
                                    <li><a href="#">Clínica</a></li>
                                    <li><a href="#">Banho e Tosa</a></li>
                                    <li><a href="#">Produtos & Medicações</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="al-footer-menu-inner-col">
                                <h5>Navegação</h5>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Quem Somos</a></li>
                                    <li><a href="#">Serviços</a></li>
                                    <li><a href="#">Equipe</a></li>
                                    <li><a href="#">Notícias</a></li>
                                    <li><a href="#">Clínica</a></li>
                                    <li><a href="#">Contato</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="clearfix al-footer-menu-inner-col">
                                <h5>Contato</h5>
                                <p> Possuímos serviço de atendimento de
                                    emergência 24Hs e se você não puder
                                    trazer o seu animal, nós o pegamos para
                                    você. Cada espaço de nossa clínica foi
                                    pensado e montado exclusivamente
                                    para oferecer a você e ao seu animal a
                                    melhor experiência que vocês já vivenciaram 
                                    em uma clínica veterinária.
                                </p>
                                <br />
                                <h6>Atendimento</h6>
                                <p>Segunda-Feira a Domingo 24h</p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-telephone-fill" role="img" aria-label="Telefone"></i> (61) 3542-4076 | (61) 99685-3227
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-envelope-fill" role="img" aria-label="Email"></i> animallifecontato@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix al-footer-menu-inner-col-divider ">
                                <hr/>
                            </div>
                            <div className="al-footer-menu-inner-col">
                                <h5>MÍDIAS SOCIAIS</h5>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-instagram" role="img" aria-label="Instagram"></i> Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-youtube" role="img" aria-label="Youtube"></i> Youtube
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}