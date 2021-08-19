import React, { Component } from "react";
import Question from "../Question/question";
import QuestionDetails from "../QuestionDetails/question-details";
import QuestionResult from "../QuestionResult/question-result";
import { Redirect } from "react-router-dom";

import { Menu, Segment } from "semantic-ui-react";
import "./home.css";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";

//Redux Imports
import { connect } from "react-redux";

class Home extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    if (!this.props.currentUser) {
      return <Redirect to="/login" />;
    }
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

const mapStateToProps = (state) => {
  return { currentUser: state.userReducer };
};

export default connect(mapStateToProps)(Home);
