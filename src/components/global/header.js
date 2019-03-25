import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../../images/logo.png'

const Header = ({ siteTitle }) => (
  <header>
    <Navbar expand="sm" fixed="top">
      <Container>
        <img src={logo} alt="logo" />
        <Link className="navbar-brand" to="/">{siteTitle}</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/products/">Catalogue</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
