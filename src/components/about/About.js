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
                            <p>Lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod 
                            ncidunt ut laoreet dolore magna 
                            aliquam erat volutpat. Ut wisi 
                            enim ad minim veniam, quis nostrud 
                            exerci taron ullamcorper suscipit 
                            loboris nisl ut aliquip ex ea 
                            commodo consequat. Duis autem vel 
                            eum iriure dolor in hendrerit in 
                            vulputate velit esse molestie.</p>
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        )
    }
}