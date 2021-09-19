import React, { Component } from 'react';
import FooterMenu from '../footermenu/FooterMenu';

import './Footer.scss'

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <FooterMenu />
                <section id="al-footer" className="">
                    <div class="container">
                        <div class="d-flex align-items-center al-footer-wrap">
                            <div class="">© Animal Life 24h - Todos os direitos reservados.</div>
                            <div class="ms-auto">Desenvolvido por tiago.svo.dev</div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}