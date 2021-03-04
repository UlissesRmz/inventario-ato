import React from "react";
import "./inventory.css";
import { Nav, Card, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Inventory() {

  return (
    <div className="inventory">
      <h1>Inventario</h1>
      <div className="row">
        <div className="col-12">
          <Card>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#link">
                <Nav.Item>
                  <Nav.Link href="#first">Entradas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Salidas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#disabled">Notas</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Modulo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
