import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import TaskDutyLogo from "../assets/icons/Task Duty logo.png";

const MyNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <img src={TaskDutyLogo} alt="" />
          <h3 className="m-0 fs-5">TaskDuty</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-end w-100">
            <Link
              className="text-decoration-none fw-semibold text-black"
              to="/new-task"
            >
              New Task
            </Link>
            <Link
              className="text-decoration-none fw-semibold text-black"
              to="/my-task"
            >
              My Task
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
