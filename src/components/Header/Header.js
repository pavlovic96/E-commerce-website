import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <nav className="header-nav">
            <Col lg={9}>
              <Link to="/" className="logo">
                SHOP website LOGO
              </Link>
            </Col>
            <Col lg={3}>
              <ul className="nav-list">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-list-item isActive" : "nav-list-item"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? "nav-list-item isActive" : "nav-list-item"
                  }
                >
                  Shop
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? "nav-list-item isActive" : "nav-list-item"
                  }
                >
                  Contact us
                </NavLink>
                <NavLink
                  to="/your-cart"
                  className={({ isActive }) =>
                    isActive ? "nav-list-item isActive" : "nav-list-item"
                  }
                >
                  Your cart
                </NavLink>
              </ul>
            </Col>
          </nav>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
