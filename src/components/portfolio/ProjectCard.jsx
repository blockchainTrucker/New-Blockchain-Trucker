// import node module libraries
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
  return (
    <Card className="shadow-lg card-hover" style={{ width: 400 }}>
      <Link to={`${item.link}`}>
        <Card.Header>
          <div
            style={{
              height: "230px",
              alignContent: "center",
            }}>
            <Image fluid style={{ maxHeight: "190px" }} src={item.image} />
          </div>
        </Card.Header>
        <Card.Body>
          <div>
            <h3 className="text-inherit">{item.title}</h3>
            <p className="text-start text-dark"> {item.details} </p>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ProjectCard;
