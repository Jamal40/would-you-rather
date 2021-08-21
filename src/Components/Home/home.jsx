import React, { Component } from "react";
import Question from "../Question/question";
import { Redirect } from "react-router-dom";

import { Menu, Segment } from "semantic-ui-react";
import "./home.css";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";

//Actions
import { assignCameFromLink } from "../../Actions/authorizeUserActions";

//Redux Imports
import { connect } from "react-redux";

class Home extends Component {
  state = {
    activeItem: "unanswered",
    answeredQuesstions: [],
    unansweredQuestions: [],
  };
  usedQuestions = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  updateFromReduxState = () => {
    let answeredQuestions = [];
    for (let questionId in this.props.currentUser.answers) {
      answeredQuestions.push(this.props.allQuestions[questionId]);
    }

    let unansweredQuestions = [];
    for (let questioonId in this.props.allQuestions) {
      if (!answeredQuestions.map((q) => q.id).includes(questioonId)) {
        unansweredQuestions.push(this.props.allQuestions[questioonId]);
      }
    }

    this.usedQuestions = {
      answeredQuestions,
      unansweredQuestions,
    };
  };

  render() {
    const { activeItem } = this.state;

    if (!this.props.currentUser.id) {
      this.props.AssignCameFromLink(this.props.location.pathname);
      return <Redirect to="/login" />;
    }

    console.log("unreachable");

    this.updateFromReduxState();
    return (
      <div className="home-container">
        <Menu pointing>
          <Menu.Item
            className="home-item"
            name="answered"
            active={activeItem === "answered"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            className="home-item"
            name="unanswered"
            active={activeItem === "unanswered"}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Segment>
          {activeItem === "unanswered" ? (
            <div>
              <Card.Group className="home-questions-container">
                {this.usedQuestions.unansweredQuestions.map((q) => (
                  <Question
                    questionId={q.id}
                    firstOtion={q.optionOne.text}
                    secondOption={q.optionTwo.text}
                    questionAuthor={q.author}
                    key={q.id}
                  />
                ))}
              </Card.Group>
            </div>
          ) : (
            <div>
              <Card.Group className="home-questions-container">
                {this.usedQuestions.answeredQuestions.map((q) => (
                  <Question
                    questionId={q.id}
                    firstOtion={q.optionOne.text}
                    secondOption={q.optionTwo.text}
                    questionAuthor={q.author}
                    key={q.id}
                  />
                ))}
              </Card.Group>
            </div>
          )}
        </Segment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
