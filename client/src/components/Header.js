import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Header = () => {
  const common={
    marginRight:15,
    frontSize:17,
    letterSpacing:".5px"
  };

  const openYouTubeChannel = () => {
    window.open("https://www.youtube.com/channel/UCb1OMZMrWse9mrsRPwlk3Iw");
  };
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light" >
        <Container>
          <div>
            <h2 className="mt-2 h2_right" style={{ color: "Highlight" }}>
              <Nav.Link href="#home">Shourya Srivastava</Nav.Link>
            </h2>
          </div>

          <Nav className="">
            <div>
              <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
              <NavLink to="/About" className="text-decoration-none" style={common}>About</NavLink>
              <NavLink to="/Playlist" className="text-decoration-none" style={common}>Project</NavLink>
              <NavLink to="/Contact" className="text-decoration-none" style={common}>Contact</NavLink>
            </div>
            <div>
              <Button variant="danger" onClick={openYouTubeChannel}>
                Youtube
              </Button>{" "}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
