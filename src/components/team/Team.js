import React, { Component } from "react";

import './Team.scss';

import laisPhoto from '../../assets/imgs/lais.jpg';
import harturPhoto from '../../assets/imgs/hartur.jpg';

export default class Team extends Component {
    render() {
        return(
            <section id="al-team">
                <div className="al-main-title d-flex flex-row justify-content-center align-items-center">
                    <span></span>
                    <span></span>
                    <h2>Equipe</h2>
                </div>
                <div className="al-team-people-wrap d-flex justify-content-between text-center">
                    <div className="al-team-person" style={{backgroundImage:"url("+laisPhoto+")"}}>
                        <div className="al-team-person-content">
                            <h3>Dra. Laís</h3>
                            <p>
                                Dra. Laís Dantas, médica 
                                veterinária faz parte da equipe Animal
                                Life em clínica médica e cirúrgica
                                de pequenos animais. Sua simpatia e 
                                dedicação com os animais é exemplar!
                            </p>
                            <p>
                                Venha conhecer nosso centro
                                veterinário, contamos com uma
                                equipe multidisciplinar para
                                melhor atendê-lo.
                            </p>
                        </div>
                    </div>
                    <div className="al-team-person" style={{backgroundImage:"url("+harturPhoto+")"}}>
                        <div className="al-team-person-content">
                            <h3>Dr. Hartur</h3>
                            <p>
                            Dr Hartur Nunes, médico veterinário 
                            especialista em anestesiologia de grandes, 
                            exóticos e pequenos animais. Possui 
                            experiência em clínica médica e
                            cirúrgica de pequenos animais
                            há mais 7 anos. Sua principal característica 
                            é realizar exame pré-anestésico 
                            em seus pacientes, onde é fundamental 
                            para ter um procedimento anestesico e
                            cirúrgico tranquilo.
                            </p>
                            <p>
                            Venha conhecer nosso centro
                            veterinário contamos com uma
                            equipe multidisciplinar para
                            melhor atendê-lo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}