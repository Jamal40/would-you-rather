import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./question.css";
import "semantic-ui-css/semantic.min.css";

//Redux Imports
import { connect } from "react-redux";

class Question extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  componentDidMount() {}
  render() {
    return (
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={this.props.allUsers[this.props.questionAuthor]?.avatarURL}
          />
          <Card.Header>
            {this.props.allUsers[this.props.questionAuthor]?.name} asks
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.authUserReducer,
    allQuestions: state.questionsReducer,
    allUsers: state.userReducer,
  };
};

export default connect(mapStateToProps)(Question);
