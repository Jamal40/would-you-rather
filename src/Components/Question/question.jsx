import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./question.css";
import "semantic-ui-css/semantic.min.css";
import { getUsers } from "../../assets/api";
export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state.users = {};
  }
  state = {};
  componentDidMount() {
    getUsers().then((users) => {
      this.setState({ users });
      console.log(users);
    });
  }
  render() {
    return (
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={this.state.users[this.props.questionAuthor]?.avatarURL}
          />
          <Card.Header>
            {this.state.users[this.props.questionAuthor]?.name} asks
          </Card.Header>
          <Card.Meta>Would you rather...</Card.Meta>
          <Card.Description>
            <ul className="question-ul">
              <li>{this.props.firstOtion}?</li>
              <li>{this.props.secondOption}?</li>
            </ul>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="orange">
              View Poll
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
