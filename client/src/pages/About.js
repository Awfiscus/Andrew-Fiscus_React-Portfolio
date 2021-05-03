import React from "react";
import { Container, List, Item } from "semantic-ui-react";
import "./About.css";

function About() {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  document.body.style = "background: aliceblue;";

  return (
    <>
      <Container>
        <Item>
          <Item.Image
            size="large"
            src="/images/Profile pic maybe (2).jpg"
            floated="left"
          />
          <Item.Content>
            <Item.Header as="h2">About Me</Item.Header>
            <Item.Description id="aboutDescription">
              Hello. I'm Andrew Fiscus. Thank you for taking the time to visit
              my page. I am currently working towards getting my bachelors in
              computer science from Colorado State Univerisity - Global Campus.
              I recently graduated from a full-stack bootcamp at Univerisity of
              Denver. During this time I am working as a junior developer.
              Currently I am based out of Denver, Colorado. If you like what you
              see under the portfolio tab contact me through the methods below.
            </Item.Description>

            <h2>Contact Me</h2>
            <Item.Extra>
              <List id="contactInfo">
                <List.Item>
                  <List.Icon name="users" />
                  <List.Content>
                    <a
                      href=""
                      onClick={() =>
                        handleClick(
                          `https://www.linkedin.com/in/andrew-fiscus-1bb3a4206/`
                        )
                      }
                    >
                      LinkedIn
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="github" />
                  <List.Content>
                    <a
                      onClick={() => handleClick(`https://github.com/Awfiscus`)}
                    >
                      Github
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="marker" />
                  <List.Content>Littleton, CO</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="phone" />
                  <List.Content>303-898-1134</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="mail" />
                  <List.Content>
                    <a href="mailto:awfiscus@comcast.net">
                      Awfiscus@comcast.net
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a
                      href=""
                      onClick={() =>
                        handleClick(
                          `https://docs.google.com/document/d/1H57__vOj2dL9kXxX8z83TjkEfZOeng3BmfeRkUClHkQ/edit?usp=sharing`
                        )
                      }
                    >
                      Resume
                    </a>
                  </List.Content>
                </List.Item>
              </List>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Container>
    </>
  );
}

export default About;
