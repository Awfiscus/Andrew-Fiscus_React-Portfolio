import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Link to="/">
          <Menu.Item name="About" />
        </Link>
        <Link to="/portfolio">
          <Menu.Item name="Portfolio" />
        </Link>
        <Link to="/skills">
          <Menu.Item name="Language Breakdown" />
        </Link>
      </Menu>
    </Segment>
  );
}

export default Nav;
