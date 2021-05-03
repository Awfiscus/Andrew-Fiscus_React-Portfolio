import React, { useState, useEffect } from "react";
import { Card, Icon, Header } from "semantic-ui-react";
import userProjects from "../projects.json";
import "./Portfolio.css";

function Portfolio() {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Header as="h2" icon textAlign="center">
        <Icon name="object group outline" circular />
        <Header.Content>Projects</Header.Content>
      </Header>
      <Card.Group id="cardGroup">
        {userProjects.map((project) => (
          <Card
            color="pink"
            id="projectCard"
            key={project.id}
            image={project.image}
            header={project.title}
            onClick={() => handleClick(project.link)}
            description={project.description}
          />
        ))}
      </Card.Group>
    </>
  );
}

export default Portfolio;
