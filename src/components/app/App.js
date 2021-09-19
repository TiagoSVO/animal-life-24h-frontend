import React from 'react';

import Header from '../header/Header';
import MainCarousel from '../maincarousel/MainCarousel';
import About from '../about/About';
import ALService from '../alservice/ALService';
import Team from '../team/Team';
import ALPost from '../alpost/ALPost';
import Contact from '../contact/Contact';
import Gmap from '../gmap/Gmap';
import Footer from '../footer/Footer';

import { init, say_hello } from '../../assets/js/utils';
import './App.css';

function App() {
    return (
        <React.Fragment>
            <Header />
            <MainCarousel />
            <About />
            <ALService />
            <Team />
            <ALPost />
            <Contact />
            <Gmap />
            <Footer />
            <div>
                {init()}
                <h1>Olá Mundo!</h1>
                <small>Agora com react.</small>
            </div>
        </React.Fragment>
    )
}

export default App;