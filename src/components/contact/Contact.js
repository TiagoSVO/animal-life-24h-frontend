import React, { Component } from 'react';

import './Contact.scss'

export default class Contact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section id="al-contact">
                <h2>Fale Conosco</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col al-contact-line-divider-right">
                            <div className="al-contact-content-wrap">
                                <form className="row g-3">
                                    <div className="col-12">
                                        <label for="alInputNome" className="form-label">Nome</label>
                                        <input type="text" className="form-control" id="alInputNome" />
                                    </div>
                                    <div className="col-12">
                                        <label for="alInputEmail" className="form-label">E-mail</label>
                                        <input type="email" className="form-control" id="alInputEmail" />
                                    </div>
                                    <div className="col-12">
                                        <label for="alInputTelefone" className="form-label">Telefone</label>
                                        <input type="text" className="form-control" id="alInputTelefone" />
                                    </div>
                                    <div className="col-12">
                                        <label for="alInputAssunto" className="form-label">Assunto</label>
                                        <input type="text" className="form-control" id="alInputAssunto" />
                                    </div>
                                    <div className="col-12">
                                        <label for="alInputAssunto" className="form-label">Assunto</label>
                                        <textarea rows="10" className="form-control" id="alInputAssunto" />
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn btn-light float-end">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <div className="al-contact-content-wrap d-grid">
                                    <div className="row al-contact-content-info">
                                        <div className="col">
                                            <p><strong>HORÁRIO DE ATENDIMENTO</strong></p>
                                            <p>Segunda a Domingo 24h</p>
                                        </div>
                                    </div>
                                    <div className="row al-contact-content-info">
                                        <div className="col">
                                            <p><strong>ENDEREÇO</strong></p>
                                            <p>Quadra QNJ 26 12, LOJA 01/02 Taguatinga Norte - Taguatinga/DF</p>
                                        </div>
                                    </div>
                                    <div className="row al-contact-content-info">
                                        <div className="col">
                                            <p><strong>TELEFONES</strong></p>
                                            <p>(61) 3542-4076 | (61) 99685-3227</p>
                                        </div>
                                    </div>
                                    <div className="row al-contact-content-info">
                                        <div className="col">
                                            <p><strong>E-MAIL</strong></p>
                                            <p>animallifecontato@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="row al-contact-content-info">
                                        <div className="col">
                                            <p><strong>REDES SOCIAIS</strong></p>
                                            <div className="al-contact-redes-sociais">
                                                <a target='_blank' href="https://wa.me/5561996853227"><i class="bi bi-whatsapp" role="img" aria-label="Telefone - (61) 3542-4076"></i></a>
                                                <a href="https://www.instagram.com/animallife24h/"><i className="bi bi-instagram" role="img" aria-label="Telefone - (61) 3542-4076"></i></a>
                                                <a href="https://www.youtube.com/channel/UCgDi63POKCY6MzlytsfbfHw"><i className="bi bi-youtube" role="img" aria-label="Telefone - (61) 3542-4076"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}