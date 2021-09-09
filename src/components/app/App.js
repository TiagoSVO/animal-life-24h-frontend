import React from 'react';

import Header from '../header/Header';
import MainCarousel from '../maincarousel/MainCarousel';
import About from '../about/About';
import ALServices from '../alservices/ALServices';
import Team from '../team/Team';

import { init, say_hello } from '../../assets/js/utils';
import './App.css';

function App() {
    return (
        <React.Fragment>
            <Header />
            <MainCarousel />
            <About />
            <ALServices />
            <Team />
            <div>
                {init()}
                <h1>Olá Mundo!</h1>
                <small>Agora com react.</small>
            </div>
        </React.Fragment>
    )
}

export default App;