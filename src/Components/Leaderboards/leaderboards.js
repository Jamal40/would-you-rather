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

  render() {
    if (!this.props.currentUser._id) {
      this.props.AssignCameFromLink(this.props.location.pathname);
      return <Redirect to="/login" />;
    }
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
