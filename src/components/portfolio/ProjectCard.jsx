// import node module libraries
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
  const CategoryColors = (category) => {
    switch (category) {
      case "School Project":
        return "kingsland";
      case "Personal Project":
        return "primary";
      case "Example":
        return "secondary";
      default:
        return "primary";
    }
  };

  return (
    <Card className="shadow-lg mx-4 h-100">
      <Link to={`${item.link}`}>
        <Image
          fluid
          width={""}
          variant="top"
          src={item.image}
          className="rounded-top-md"
        />

        {/* Card body  */}
        <Card.Body>
          <span
            className={`fs-5 fw-semi-bold d-block mb-3 text-${CategoryColors(
              item.category
            )}`}
          >
            {item.category}
          </span>
          <h3 className="text-inherit">{item.title}</h3>
          <p className="text-inherit"> {item.details} </p>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ProjectCard;
