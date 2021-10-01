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

import { init } from '../../assets/js/utils';
import './App.css';

function App() {
    return (
        <main id="al-main" className="al-main">
            <Header />
            <MainCarousel />
            <About />
            <ALService />
            <Team />
            <ALPost />
            <Contact />
            <Gmap />
            <Footer />
            {init()}
        </main>
    )
}

export default App;