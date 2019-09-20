import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Spinner } from 'react-bootstrap';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>;
            case false:
                return <Nav.Link href="/auth/google">Login with google</Nav.Link>;
            default:
                return [
                    <Nav.Link key="1" as={Link} to="/store">Store</Nav.Link>,
                    <Nav.Link key="3">Credits: { this.props.auth.credits }</Nav.Link>,
                    <Nav.Link key="4" as={Link} to="/surveys">Surveys</Nav.Link>,
                    <Nav.Link key="2" as={Link} to="/api/logout">Logout</Nav.Link>
                ]
        }
    }

    render() {
        console.log(this.props);
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to={ '/' }>Emaily</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                { this.renderContent() }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);