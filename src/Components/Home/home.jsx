import React, { Component } from "react";
import Question from "../Question/question";
import QuestionDetails from "../QuestionDetails/question-details";
import QuestionResult from "../QuestionResult/question-result";
import { Redirect } from "react-router-dom";

//tasks
import { GetAllQuestions } from "../../Tasks/qustionTasks";
import { GetAllUsers } from "../../Tasks/userTasks";

import { Menu, Segment } from "semantic-ui-react";
import "./home.css";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";

//Redux Imports
import { connect } from "react-redux";

class Home extends Component {
  state = {
    activeItem: "unanswered",
    answeredQuesstions: [],
    unansweredQuestions: [],
  };
  componentDidMount() {
    this.props.GetAllQuestions();
    this.props.GetAllUsers();
  }

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

    console.log(this.props.allQuestions);

    this.state = { ...this.state, answeredQuestions, unansweredQuestions };
  };

  render() {
    const { activeItem } = this.state;

    if (!this.props.currentUser) {
      return <Redirect to="/login" />;
    }
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
                {this.state.unansweredQuestions.map((q) => (
                  <Question
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
                {this.state.answeredQuestions.map((q) => (
                  <Question
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
    GetAllQuestions: () => dispatch(GetAllQuestions()),
    GetAllUsers: () => dispatch(GetAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
