import React, { Component } from "react";
import UserCard from "../UserCard/user-card";
import "./leaderboards.css";
import "semantic-ui-css/semantic.min.css";

//router
import { Redirect } from "react-router-dom";

//redux
import { connect } from "react-redux";

class Leaderboards extends Component {
  state = {};
  topUsers = [];
  componentDidMount() {}

  updateFromReduxState() {
    const allUsers = [];

    for (let userId in this.props.allUsers) {
      allUsers.push(this.props.allUsers[userId]);
    }
    allUsers.sort((f, s) => {
      return (
        Object.keys(s.answers).length +
        s.questions.length -
        (Object.keys(f.answers).length + f.questions.length)
      );
    });

    this.topUsers = allUsers.slice(0, 3);
  }

  render() {
    if (!this.props.currentUser) {
      return <Redirect to="/login" />;
    }

    this.updateFromReduxState();
    return (
      <div>
        {this.topUsers.map((user, index) => (
          <UserCard
            key={user.id}
            rank={index + 1}
            avatar={user.avatarURL}
            userName={user.name}
            answersCount={Object.keys(user.answers).length}
            createdQuestionsCount={user.questions.length}
          />
        ))}
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

export default connect(mapStateToProps)(Leaderboards);
