import React, {Component} from 'react';

import './ALService.scss'

import servicesData from '../../fixtures/servicesItems'

export default class ALServices extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: servicesData
        }
    }

    render() {
        return(
            <React.Fragment>
                <section id="al-services" style={{backgroundImage: 'url(https://picsum.photos/id/837/2000)'}}>
                    <div className="al-green-screen"></div>
                    <div className="al-services-title text-center">
                            <h1>Serviços</h1>
                        </div>
                        <div className="al-services-content">
                            <div className="container">
                                <div className="row justify-content-between text-center">
                                    {this.state.services.map((service) => {
                                        return (
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="d-flex">
                                                    <div className="al-service-card">
                                                        <div className="al-hexagon-wrap">
                                                            <div className="al-hexagon-img" style={{backgroundImage: 'url('+ service.image +')'}} ></div>
                                                        </div>
                                                        <div className="al-services-content">
                                                            <h3>{service.title}</h3>
                                                            <p>{service.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                </section>
            </React.Fragment>
        )
    }
} 