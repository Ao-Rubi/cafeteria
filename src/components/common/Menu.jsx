import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap"
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar bg="danger" variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Cafeteria</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink end to="/" className="nav-item nav-link">Inicio</NavLink>
              <NavLink end to="/administrar" className="nav-item nav-link">Administrar</NavLink>
              <NavLink end to="/administrar/crear" className="nav-item nav-link">Crear</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
