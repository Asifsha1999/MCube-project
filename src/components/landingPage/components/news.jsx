import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const News = (props) => {
  return (
    <div id="news" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>News</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={d.img} alt={d.title} className="news-image" />
                    <Card.Body>
                      <Card.Title>{d.title}</Card.Title>
                      <Card.Text>
                        {d.text}
                      </Card.Text>
                      <a href={d.button}>
                      <Button onClick={d.button} variant="primary">Read More</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
