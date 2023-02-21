import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

const PromoEvent = () => {
  return (
    <section className="promo-event" id="promo-event">
      <div className="ellipse"></div>
      <div className="promo-event__body">
        <Container>
          <Row>
            <Col>
              <h1 className="promo-event__header">Форум Microsoft</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={7}>
              <div className="promo-event__subheader">
                «Finance industry trust in AI and IT-Security»
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={9} xl={9} xxl={9}>
              <div className="promo-event__descr">
                Масштабная кибератака и устаревшее оборудование может привести к
                потере клиентов, ухудшить отношения с партнёрами и учредителями,
                а невыполнение требований законодательства может привести к
                существенным штрафам и даже к блокировке ресурсов
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="promo-event__registration">
                Узнайте как этого избежать, регистрируйтесь на наш форум
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <button className="main-btn">регистрация</button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default PromoEvent;
