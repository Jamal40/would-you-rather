import React, { Component } from "react";
import Question from "../Question/question";
import QuestionDetails from "../QuestionDetails/question-details";
import QuestionResult from "../QuestionResult/question-result";

import { Input, Menu, Segment } from "semantic-ui-react";
import "./home.css";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";

export default class Home extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

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
            name="unasnwered"
            active={activeItem === "unasnwered"}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Segment>
          {activeItem === "unasnwered" ? (
            <div>
              <Card.Group>
                <Question />
              </Card.Group>
            </div>
          ) : (
            <div>
              <Card.Group>
                <QuestionDetails />
                <QuestionResult />
              </Card.Group>
            </div>
          )}
        </Segment>
      </div>
    );
  }
}
