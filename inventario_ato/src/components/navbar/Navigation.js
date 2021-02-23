import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import { AccountCircleIcon } from "material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";

// RECUERDA CERRAR LOS ICNONOS CON < ICONO />
function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Inventario ATO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Inventario</Nav.Link>
            <Nav.Link href="#pricing">Modulos</Nav.Link>
            <NavDropdown title="Herramientas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Añadir modulo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Historial de movimientos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Informacion de modulo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <AccountCircleIcon /> Iniciar Sesion
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Gestion de usuario
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
