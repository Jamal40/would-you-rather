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
  };
  usedQuestions = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  updateFromReduxState = () => {
    if (this.props.allQuestions) {
      let answeredQuestions = this.props.allQuestions.filter((q) => q.answer);
      let unansweredQuestions = this.props.allQuestions.filter(
        (q) => !q.answer
      );

      this.usedQuestions = {
        answeredQuestions: answeredQuestions.sort((f, s) => {
          return s.timestamp - f.timestamp;
        }),
        unansweredQuestions: unansweredQuestions.sort((f, s) => {
          return s.timestamp - f.timestamp;
        }),
      };
    }
  };

  render() {
    const { activeItem } = this.state;

    if (!this.props.currentUser._id) {
      this.props.AssignCameFromLink(this.props.location.pathname);
      return <Redirect to="/login" />;
    }

    this.updateFromReduxState();
    return this.props.allQuestions ? (
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
                    questionId={q._id}
                    firstOtion={q.optionOne}
                    secondOption={q.optionTwo}
                    questionAuthor={q.author}
                    key={q._id}
                  />
                ))}
              </Card.Group>
            </div>
          ) : (
            <div>
              <Card.Group className="home-questions-container">
                {this.usedQuestions.answeredQuestions.map((q) => (
                  <Question
                    questionId={q._id}
                    firstOtion={q.optionOne}
                    secondOption={q.optionTwo}
                    questionAuthor={q.author}
                    questionAnswer={q.answer}
                    key={q._id}
                  />
                ))}
              </Card.Group>
            </div>
          )}
        </Segment>
      </div>
    ) : (
      ""
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
