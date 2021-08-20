import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./question-details.css";
import "semantic-ui-css/semantic.min.css";

///react router
import { withRouter } from "react-router";

//redux
import { connect } from "react-redux";

class QuestionDetails extends Component {
  render() {
    const requiredQuestion =
      this.props.allQuestions[this.props.match.params.id];

    return (
      <div className="question-details-main">
        <Card className="question-details-card-container">
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={this.props.allUsers[requiredQuestion?.author]?.avatarURL}
            />
            <Card.Header>
              {this.props.allUsers[requiredQuestion?.author]?.name} asks
            </Card.Header>

            <Card.Description>Would you rather...? </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="olive">
                {requiredQuestion?.optionOne.text}
              </Button>
              <Button basic color="teal">
                {requiredQuestion?.optionTwo.text}
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
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
export default withRouter(connect(mapStateToProps)(QuestionDetails));
