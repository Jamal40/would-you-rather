import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./question-details.css";
import "semantic-ui-css/semantic.min.css";

//Actions
import { assignCameFromLink } from "../../Actions/authorizeUserActions";

//tasks
import { AddAnswer } from "../../Tasks/qustionTasks";
import { GetAllUsers } from "../../Tasks/userTasks";

///react router
import { withRouter, Redirect } from "react-router";

//redux
import { connect } from "react-redux";

class QuestionDetails extends Component {
  render() {
    if (!this.props.currentUser.id) {
      this.props.AssignCameFromLink("/" /*this.props.location.pathname*/);
      return <Redirect to="/login" />;
    }

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
              <Button
                onClick={() => {
                  this.props.AddAnswer({
                    authedUser: this.props.currentUser.id,
                    qid: requiredQuestion.id,
                    answer: "optionOne",
                  });
                  this.props.GetAllUsers();

                  this.props.history.push(`/questions/${requiredQuestion.id}`);
                }}
                basic
                color="olive"
              >
                {requiredQuestion?.optionOne.text}
              </Button>
              <Button
                onClick={() => {
                  this.props.AddAnswer({
                    authedUser: this.props.currentUser.id,
                    qid: requiredQuestion.id,
                    answer: "optionTwo",
                  });
                  this.props.GetAllUsers();

                  this.props.history.push(`/questions/${requiredQuestion.id}`);
                }}
                basic
                color="teal"
              >
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

const mapDispatchToProps = (dispatch) => {
  return {
    AddAnswer: (data) => dispatch(AddAnswer(data)),
    GetAllUsers: () => dispatch(GetAllUsers()),
    AssignCameFromLink: (link) => dispatch(assignCameFromLink(link)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionDetails)
);
