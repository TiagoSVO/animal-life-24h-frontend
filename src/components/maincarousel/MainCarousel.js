import React, { Component } from 'react';
import './MainCarousel.css';
import dataCarousel from '../../fixtures/carouselItems';

export default class MainCarousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            carouselItems: dataCarousel
        }
    }

    render() {
        let carouselItems = this.state.carouselItems
        return(
            <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {carouselItems.map((item, i) => {
                        return(
                            <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to={i} className={item.id === carouselItems[0].id ? 'active' : ''} aria-current="true" aria-label={'Slide '+ item.id}></button>
                        )
                    })}
                </div>
                <div className="carousel-inner">
                    {carouselItems.map((item, i) => {
                        return(
                            <div className={'carousel-item ' + (item.id === carouselItems[0].id ? 'active' : '')} style={{backgroundColor: '#333', backgroundImage: 'url('+item.image+')'}}>
                                <div className="carousel-caption">
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}