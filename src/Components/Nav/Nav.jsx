import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  const navStyle = {
    backgroundColor: "rgba(0,0,0,0)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgb(255, 255, 255)",
    background: `linear-gradient(0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 80%
    )`,
    height: "12vh",
  };
  const pinderStyle = {
    color: "white",
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "Lobster Two",
  };
  return (
    <Navbar style={navStyle}>
      <Container>
        <Navbar.Brand style={pinderStyle}>Pinder</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="danger" style={{ fontWeight: "700" }}>
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
