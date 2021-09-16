import React, { Component } from "react";

import './ALPost.scss'

import alpostData from '../../fixtures/alpostsItems.js'

export default class ALPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataPosts: alpostData
        }
    }

    render() {
        return(
            <section id="al-posts">
                <div className="al-posts-title">
                    <h2>Últimas notícias</h2>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.dataPosts.map((post) => {
                            return(
                                <div className="col-12 col-md-4">
                                    olá
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}