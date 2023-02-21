import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <section className="header">
      <div className="ellipse"></div>
      <div className="header__body">
        <Container>
          <Row>
            <Col>
              <div className="header__wrapper">
                <div className="logo">
                  <img src={logo} alt="logo" />
                  <div className="logo__wrapper">
                    <div className="logo__header">Security</div>
                    <div className="logo__subheader">Forum</div>
                  </div>
                </div>
                <div className="header__links">
                  <a href="#promo-event">О мероприятии</a>
                  <a href="#speakers">Спикеры</a>
                </div>
                <button className="main-btn">регистрация</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Header;
