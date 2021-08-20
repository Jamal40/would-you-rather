import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./question.css";
import "semantic-ui-css/semantic.min.css";

///react router
import { withRouter } from "react-router-dom";

//Redux Imports
import { connect } from "react-redux";

class Question extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  componentDidMount() {}

  handleClick = (e) => {
    if (!this.props.currentUser.answers[this.props.questionId]) {
      this.props.history.push(`/questions/answer/${this.props.questionId}`);
    }
  };
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
            <Button onClick={this.handleClick} basic color="orange">
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

export default withRouter(connect(mapStateToProps)(Question));
