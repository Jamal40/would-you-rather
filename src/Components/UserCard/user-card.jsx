import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./user-card.css";
import "semantic-ui-css/semantic.min.css";

export default class UserCard extends Component {
  render() {
    return (
      <div className="user-card-container">
        <p className="user-card-rank">{this.props.rank}</p>
        <div className="user-card-avatar">
          <img className={"user-card-img"} src={this.props.avatar} alt="" />
        </div>
        <div className="user-card-stats">
          <p>{this.props.userName}</p>
          <div className="user-card-stats-item">
            <h4>Answered Questions:</h4>
            <h4>{this.props.answersCount}</h4>
          </div>
          <div className="user-card-stats-item">
            <h4>Created Questions:</h4>
            <h4>{this.props.createdQuestionsCount}</h4>
          </div>
          <div className="user-card-stats-item user-card-score">
            <h4>Total Score:</h4>
            <h4>
              {this.props.answersCount + this.props.createdQuestionsCount}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
