import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Col, Row, Card } from "react-bootstrap";
import axios from "axios";
import Spinner from "./Spinner";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://pro.alphadevteam.com/api/tz/speakers")
      .then((res) => setSpeakers(res.data.response), setIsLoading(false))
      .catch(() => setIsError(true));
  }, []);

  return (
    <section className="speakers" id="speakers">
      <Container>
        <Row>
          <Col>
            <div className="speakers__header">Спикеры нашего форума</div>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} xl={3} xxl={3}>
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            <h2>Sorry, something is wrong</h2>
          ) : (
            speakers.map((speaker, index) => {
              return (
                <Col key={index}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={speaker.photo_url} />
                    <Card.Body>
                      <Card.Title>{speaker.name}</Card.Title>
                      <div className="speakers__line"></div>
                      <Card.Text>{speaker.description}</Card.Text>
                      <a href="#" className="speakers__more-detail">
                        Подробнее
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Speakers;
