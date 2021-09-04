import React, { Component } from "react";
import UserCard from "../UserCard/user-card";
import "./leaderboards.css";
import "semantic-ui-css/semantic.min.css";

//Actions
import { assignCameFromLink } from "../../Actions/authorizeUserActions";

//Tasks
import { GetLeaderboards } from "../../Tasks/userTasks";

//router
import { Redirect } from "react-router-dom";

//redux
import { connect } from "react-redux";

class Leaderboards extends Component {
  state = {};
  topUsers = [];
  componentDidMount() {
    this.props.GetLeaderboards();
  }

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
    if (!this.props.currentUser._id) {
      this.props.AssignCameFromLink(this.props.location.pathname);
      return <Redirect to="/login" />;
    }
    console.log(this.props.topUsers);
    // this.updateFromReduxState();
    return (
      <div>
        {this.props.topUsers?.map((user, index) => (
          <UserCard
            key={user._id}
            rank={index + 1}
            avatar={user.avatarURL}
            userName={user.name}
            answersCount={user.addedAnswersCount}
            createdQuestionsCount={user.addedQuestionsCount}
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
    topUsers: state.leaderboardsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AssignCameFromLink: (link) => dispatch(assignCameFromLink(link)),
    GetLeaderboards: () => dispatch(GetLeaderboards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboards);
