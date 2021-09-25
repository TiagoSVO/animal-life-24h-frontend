import React, { Component } from 'react';

import './About.scss'
import pegada from '../../assets/imgs/pegada.svg'

export default class About extends Component {

    render() {
        return(
            <React.Fragment >
            <section className="al-main-about" id="al-about">
                <div className="al-main-about-circles">
                    <span className="al-main-about-circle"></span>
                    <span className="al-main-about-circle"></span>
                </div>
                <div className="al-main-about-pegadas">
                    <span className="al-main-about-pegada" style={{backgroundImage: 'url("'+pegada+'")'}}></span>
                    <span className="al-main-about-pegada" style={{backgroundImage: 'url("'+pegada+'")'}}></span>
                    <span className="al-main-about-pegada" style={{backgroundImage: 'url("'+pegada+'")'}}></span>
                    <span className="al-main-about-pegada" style={{backgroundImage: 'url("'+pegada+'")'}}></span>
                </div>
                <div className="al-main-title d-flex flex-row justify-content-center align-items-center">
                    <span></span>
                    <span></span>
                    <h2>Quem Somos</h2>
                </div>
                <div className="container al-main-about-content d-flex flex-row justify-content-center align-items-center">
                    <div className="row gx-0">
                        <div className="col p-5">
                            <p>O Centro avançado de especialidades veterinárias animal life, 
                            inaugurado em Novembro de 2020, nasceu da ideia de reunir diversos 
                            profissionais com especialidades distintas, afim de promover 
                            tratamentos modernos e seguros para nossos pacientes. Aqui somos 
                            uma família, possuímos mais de 18 médicos veterinários que dedicam 
                            suas vidas para oferecer a melhor experiência no cuidado com seu pet, 
                            com a missão de promover a ética profissional, o bem-estar animal, 
                            muito carinho, amor e satisfação de nossos clientes.
                            </p>
                            <p>Nossos colaboradores possuem experiência nas diversas áreas de 
                            atuação além de serem habituados e treinados em lidar com nossos 
                            queridos Pets.</p>
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        )
    }
}