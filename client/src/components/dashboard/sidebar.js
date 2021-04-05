import React from "react";
import { NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "./sidebar.scss";

function Sidebar(props) {
    const location = window.location.pathname.split('/')[1];

    const activeHandler = (val) => {
        props.setActive(val)
    }

    return (
        <Container className="dashboard-navbar__wrapper" fluid>
            <Navbar bg="dark" variant="dark" expand="sm" className="flex-lg-column dashboard-navbar">
                <Navbar.Brand href="/">Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={props.active} onSelect={(selectedKey) => activeHandler(selectedKey)} className="mr-auto flex-lg-column">
                    <Nav.Link eventKey="products">Products</Nav.Link>
                    <Nav.Link eventKey="orders">Orders</Nav.Link>
                    <Nav.Link eventKey="settings">Setting</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Sidebar;