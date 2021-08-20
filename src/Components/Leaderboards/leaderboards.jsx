import React, { Component } from "react";
import UserCard from "../UserCard/user-card";
import "./leaderboards.css";
import "semantic-ui-css/semantic.min.css";
import { getUsers } from "../../assets/api";

export default class Leaderboards extends Component {
  state = { topUsers: [] };
  componentDidMount() {
    getUsers().then((users) => {
      const allUsers = [];
      let i = 1;
      for (let userId in users) {
        allUsers.push(users[userId]);
        i++;
      }
      allUsers.sort((f, s) => {
        return (
          Object.keys(s.answers).length +
          s.questions.length -
          (Object.keys(f.answers).length + f.questions.length)
        );
      });

      this.setState({
        topUsers: allUsers.slice(0, 3),
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.topUsers.map((user, index) => (
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
