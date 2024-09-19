import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#B3E5FC" }}>
    <Container>
      <Link to="/" style={{paddingRight : '3vw', fontSize : '20px'}} className="nav-link">조승혁 포토 폴리오</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="https://github.com/J-sh1" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="" height={'45vw'}/>
          </Nav.Link>
          <NavDropdown title="프로젝트" id="collapsible-nav-dropdown" style={{marginTop : '0.6vw'}}>
            <NavDropdown.Item target="_blank" href="https://github.com/J-sh1/shinrok">신록</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://github.com/J-sh1/final_k18">윌리를찾아라</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://github.com/J-sh1/g-cap">G-CAP</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
        <Link to="/join" className="nav-link">회원가입</Link>
        <Link to="/login" className="nav-link">로그인</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header