import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./question-result.css";
import "semantic-ui-css/semantic.min.css";

//Actions
import { assignCameFromLink } from "../../Actions/authorizeUserActions";

///react router
import { withRouter, Redirect } from "react-router";

//redux
import { connect } from "react-redux";

class QuestionResult extends Component {
  render() {
    if (!this.props.currentUser.id) {
      this.props.AssignCameFromLink("/" /*this.props.location.pathname*/);
      return <Redirect to="/login" />;
    }

    const requiredQuestion =
      this.props.allQuestions[this.props.match.params.id];

    let votes1 = requiredQuestion?.optionOne.votes.length;
    let votes2 = requiredQuestion?.optionTwo.votes.length;
    let totalVotes = votes1 + votes2;

    return (
      <div className="question-results-main">
        <Card className="question-results-card-container">
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={this.props.allUsers[requiredQuestion?.author]?.avatarURL}
            />
            <Card.Header>
              {this.props.allUsers[requiredQuestion?.author]?.name} asks
            </Card.Header>
            <Card.Description>Would you rather...?</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic disabled color="green">
                {requiredQuestion?.optionOne.text}
                <br />
                <br />
                {`${votes1} vote/s => ${((votes1 * 100) / totalVotes).toFixed(
                  0
                )}%`}
              </Button>
              <Button disabled basic color="red">
                {requiredQuestion?.optionTwo.text}
                <br />
                <br />
                {`${votes2} vote/s => ${((votes2 * 100) / totalVotes).toFixed(
                  0
                )}%`}
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

const mapDispatchToProps = (dispatch) => {
  return {
    AssignCameFromLink: (link) => dispatch(assignCameFromLink(link)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionResult)
);
