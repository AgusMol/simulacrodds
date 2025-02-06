import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <>
        <Navbar bg="primary" data-bs-theme="white">
        <Container>
        <Navbar.Brand as={Link} to="/">Cine</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/peliculas">Inicio</Nav.Link> {/* Usamos Link para evitar recargar la página */}
            <Nav.Link as={Link} to="/peliculas/registrar">Registrar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
}