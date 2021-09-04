import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./question-details.css";
import "semantic-ui-css/semantic.min.css";

//Actions
import { assignCameFromLink } from "../../Actions/authorizeUserActions";

//tasks
import { AddAnswer } from "../../Tasks/qustionTasks";

///react router
import { withRouter, Redirect } from "react-router";

//redux
import { connect } from "react-redux";

class QuestionDetails extends Component {
  render() {
    if (!this.props.currentUser._id) {
      this.props.AssignCameFromLink(this.props.location.pathname);
      return <Redirect to="/login" />;
    }

    //let cu = this.props.currentUser;
    const requiredQuestion = this.props.allQuestions?.filter(
      (q) => q._id == this.props.match.params.id
    )[0];
    if (requiredQuestion?.answer) {
      return <Redirect to={`/questions/${this.props.match.params.id}`} />;
    }

    if (
      !this.props.allQuestions
        .map((q) => q._id)
        .includes(this.props.match.params.id)
    ) {
      return <Redirect to={`/questions/${this.props.match.params.id}`} />;
    }

    return (
      <div className="question-details-main">
        <Card className="question-details-card-container">
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={requiredQuestion?.author.avatarURL}
            />
            <Card.Header>{requiredQuestion?.author.name} asks</Card.Header>

            <Card.Description>Would you rather...? </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                onClick={() => {
                  this.props.AddAnswer({
                    userId: this.props.currentUser._id,
                    questionId: requiredQuestion?._id,
                    answer: 1,
                  });

                  this.props.history.push(`/questions/${requiredQuestion?.id}`);
                }}
                basic
                color="olive"
              >
                {requiredQuestion?.optionOne}
              </Button>
              <Button
                onClick={() => {
                  this.props.AddAnswer({
                    userId: this.props.currentUser._id,
                    questionId: requiredQuestion?._id,
                    answer: 2,
                  });

                  this.props.history.push(`/questions/${requiredQuestion?.id}`);
                }}
                basic
                color="teal"
              >
                {requiredQuestion?.optionTwo}
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
    AssignCameFromLink: (link) => dispatch(assignCameFromLink(link)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionDetails)
);
