import React from "react";
import { Icon, Table } from "semantic-ui-react";

function Skills() {
  return (
    <>
      <Table celled structured unstackable style={{ margin: "10px" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">Name</Table.HeaderCell>

            <Table.HeaderCell rowSpan="2">Commits</Table.HeaderCell>
            <Table.HeaderCell colSpan="5">Languages</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>JavaScript</Table.HeaderCell>
            <Table.HeaderCell>CSS</Table.HeaderCell>
            <Table.HeaderCell>HTML</Table.HeaderCell>
            <Table.HeaderCell>Other</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Turn That Frown Upside Down</Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell textAlign="right">56.1%</Table.Cell>
            <Table.Cell textAlign="center">14.9%</Table.Cell>
            <Table.Cell>29.0%</Table.Cell>
            <Table.Cell>0%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Traveler's Best Friend Weather Report</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell textAlign="right">58.6%</Table.Cell>
            <Table.Cell textAlign="center">6.9%</Table.Cell>
            <Table.Cell>34.5%</Table.Cell>
            <Table.Cell>0%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Single Day Workday Schedular</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell textAlign="right">36.1%</Table.Cell>
            <Table.Cell textAlign="center">16.4%</Table.Cell>
            <Table.Cell>47.5%</Table.Cell>
            <Table.Cell>0%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Have Fun Eating Some Burgers</Table.Cell>
            <Table.Cell>15</Table.Cell>
            <Table.Cell textAlign="right">74.3%</Table.Cell>
            <Table.Cell textAlign="center">6.9%</Table.Cell>
            <Table.Cell>0%</Table.Cell>
            <Table.Cell>18.8%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Daily Horoscope And Chat</Table.Cell>
            <Table.Cell>9</Table.Cell>
            <Table.Cell textAlign="right">59.1%</Table.Cell>
            <Table.Cell textAlign="center">5.5%</Table.Cell>
            <Table.Cell>0%</Table.Cell>
            <Table.Cell>35.4%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Only Pets</Table.Cell>
            <Table.Cell>15</Table.Cell>
            <Table.Cell textAlign="right">82.8%</Table.Cell>
            <Table.Cell textAlign="center">11.8%</Table.Cell>
            <Table.Cell>5.4%</Table.Cell>
            <Table.Cell>0%</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default Skills;
