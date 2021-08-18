import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "./nav-bar.css";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
//Redux Imports
import { connect } from "react-redux";
import { logOut } from "../../Actions/logOut";

class NavBar extends Component {
  state = {};
  handleItemClick = (e, { name }) => {
    if (name == "log-out") {
      this.props.logOut();
    }
    this.setState({ activeItem: name });
  };
  componentDidMount() {
    console.log(localStorage.getItem(this.props.currentUser));
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Menu className="menu-container">
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/questions/add"
          name="new-question"
          active={activeItem === "new-question"}
          onClick={this.handleItemClick}
        >
          New Question
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/leaderboards"
          name="leaderboard"
          active={activeItem === "leaderboard"}
          onClick={this.handleItemClick}
        >
          Leaderboard
        </Menu.Item>

        {this.props.currentUser !== null ? (
          <div className="user-container">
            <p className="welcome-msg">{this.props.currentUser.name}</p>
            <Menu.Item
              as={Link}
              to="/login"
              className="log-item"
              name="log-out"
              active={activeItem === "log-out"}
              onClick={this.handleItemClick}
            >
              Log-out
            </Menu.Item>
          </div>
        ) : (
          <Menu.Item
            as={Link}
            to="/login"
            className="log-item"
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          >
            Login
          </Menu.Item>
        )}
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { currentUser: state.userReducer };
};

export default connect(mapStateToProps, { logOut })(NavBar);
