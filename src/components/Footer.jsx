import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import logo from "../images/logo.png";
import vk from "../icons/vk.svg";
import facebook from "../icons/facebook.svg";
import telegram from "../icons/telegram.svg";
import instagram from "../icons/instagram.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="ellipse"></div>
      <div className="footer__body">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
              <div className="logo">
                <img src={logo} alt="logo" />
                <div className="logo__wrapper">
                  <div className="logo__header">Security</div>
                  <div className="logo__subheader">Forum</div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
              <div className="footer__wrapper-links">
                <div className="footer__official-info">
                  <ul>
                    <li>Политика конфиденциальности</li>
                    <li>Публичная оферта</li>
                    <li>
                      <a href="tel:+79121234567">+7 912 123-45-67</a>
                    </li>
                    <li>
                      <a href="mailto:about@microsoftforum.com">
                        about@microsoftforum.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer__navbar">
                  <ul>
                    <li>o мероприятии</li>
                    <li>темы</li>
                    <li>расписание</li>
                    <li>спикеры</li>
                    <li>контакты</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
              <div className="footer__social">
                <div>
                  <a href="#">
                    <img src={vk} alt="vk" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src={facebook} alt="facebook" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src={instagram} alt="instagram" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src={telegram} alt="telegram" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
