import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./user-card.css";
import "semantic-ui-css/semantic.min.css";

export default class UserCard extends Component {
  render() {
    return (
      <div className="user-card-container">
        <div className="user-card-avatar">
          <img
            className="user-card-img"
            src="https://picsum.photos/100"
            alt=""
          />
        </div>
        <div className="user-card-stats">
          <p>Ahmed Ali</p>
          <div className="user-card-stats-item">
            <h4>Answered Questions:</h4>
            <h4>10</h4>
          </div>
          <div className="user-card-stats-item">
            <h4>Created Questions:</h4>
            <h4>10</h4>
          </div>
          <div className="user-card-stats-item user-card-score">
            <h4>Total Score:</h4>
            <h4>10</h4>
          </div>
        </div>
      </div>
    );
  }
}
