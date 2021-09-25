import React, {Component} from 'react';
import './NavTop.scss';

export default class NavTop extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <nav className="al-top-nav-bar navbar navbar-expand-lg d-none d-md-flex">
                <div className="container">
                    <div className="w-50">
                        <span className="nav-item me-2">
                            <i className="bi bi-telephone-fill" role="img" aria-label="Telefone"></i> (61) 3542-4076
                        </span>
                        <span className="nav-item m-2">
                            <a href="https://wa.me/5561996853227"><i className="bi bi-whatsapp" role="img" aria-label="Whatsapp"></i> (61) 9.9685-3227 </a>
                        </span>
                    </div>
                    <div className="w-50 text-end">
                        <span className="nav-item m-2">
                            <i className="bi bi-envelope-fill" role="img" aria-label="Email"></i>
                        </span>
                        <span className="nav-item m-2">
                            <a href="https://www.instagram.com/animallife24h/"><i className="bi bi-instagram" role="img" aria-label="Instagram"></i></a>
                        </span>
                        <span className="nav-item ms-2">
                            <a href="https://www.youtube.com/channel/UCgDi63POKCY6MzlytsfbfHw"><i className="bi bi-youtube" role="img" aria-label="Youtube"></i></a>
                        </span>
                    </div>
                    
                </div>
            </nav>
        )
    }
}