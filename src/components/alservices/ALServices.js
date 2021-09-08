import React, {Component} from 'react';

import './ALServices.scss'

export default class ALServices extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <section id="al-services" style={{backgroundImage: 'url(https://picsum.photos/id/837/2000)'}}>
                    <div className="al-green-screen"></div>
                    <div className="al-services-title text-center">
                            <h1>Serviços</h1>
                        </div>
                        <div className="al-services-content container">
                            <div className="d-flex justify-content-between text-center">
                                <div className="al-service-card">
                                    <div className="al-hexagon-wrap">
                                        <div className="al-hexagon-img" style={{backgroundImage: 'url(https://picsum.photos/id/87/200)'}} ></div>
                                    </div>
                                    <div className="al-services-content">
                                        <h3>Título</h3>
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
                                            vulputate velit esse molestie.
                                        </p>
                                    </div>
                                </div>
                                <div className="al-service-card">
                                    <div className="al-hexagon-wrap">
                                        <div className="al-hexagon-img" style={{backgroundImage: 'url(https://picsum.photos/id/87/200)'}} ></div>
                                    </div>
                                    <div className="al-services-content">
                                        <h3>Título</h3>
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
                                            vulputate velit esse molestie.
                                        </p>
                                    </div>
                                </div>
                                <div className="al-service-card">
                                    <div className="al-hexagon-wrap">
                                        <div className="al-hexagon-img" style={{backgroundImage: 'url(https://picsum.photos/id/87/200)'}} ></div>
                                    </div>
                                    <div className="al-services-content">
                                        <h3>Título</h3>
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
                                            vulputate velit esse molestie.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </React.Fragment>
        )
    }
} 