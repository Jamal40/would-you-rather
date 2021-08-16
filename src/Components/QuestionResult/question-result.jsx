import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./question-result.css";
import "semantic-ui-css/semantic.min.css";

export default class QuestionResult extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Image floated="right" size="mini" src="https://picsum.photos/200" />
          <Card.Header>Steve Sanders</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button disabled color="green">
              your choice
            </Button>
            <Button disabled basic color="red">
              choice 2
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
