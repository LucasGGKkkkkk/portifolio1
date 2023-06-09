import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import React from 'react';

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Mande-me seu email<br></br> e receba uma reposta</h3>
              {status === 'Enviando' && <Alert>Enviando...</Alert>}
              {status === 'Erro' && <Alert variant="danger">{message}</Alert>}
              {status === 'Sucesso' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}> 
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Endereço de email" />
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}