import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "./nav-bar.css";
import "semantic-ui-css/semantic.min.css";
import { Link, withRouter } from "react-router-dom";

//tasks
import { GetAllQuestions } from "../../Tasks/qustionTasks";
import { GetAllUsers } from "../../Tasks/userTasks";

//Redux Imports
import { connect } from "react-redux";

class NavBar extends Component {
  componentDidMount() {
    this.props.GetAllQuestions();
    this.props.GetAllUsers();
  }

  state = { activeItem: "" };
  handleItemClick = (e, { name }) => {
    if (name === "log-out") {
      this.props.logOut();
    }
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    this.props.history.listen((l, a) => {
      this.setState({
        activeItem: l.pathname,
      });
    });

    return (
      <Menu className="menu-container">
        <Menu.Item
          disabled={!this.props.currentUser.id}
          as={Link}
          to={this.props.currentUser.id ? "/" : "/login"}
          name="/"
          active={activeItem === "/"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          disabled={!this.props.currentUser.id}
          as={Link}
          to={this.props.currentUser.id ? "/questions/add" : "/login"}
          name="/questions/add"
          active={activeItem === "/questions/add"}
          onClick={this.handleItemClick}
        >
          New Question
        </Menu.Item>

        <Menu.Item
          disabled={!this.props.currentUser.id}
          as={Link}
          to={this.props.currentUser.id ? "/leaderboards" : "/login"}
          name="/leaderboards"
          active={activeItem === "/leaderboards"}
          onClick={this.handleItemClick}
        >
          Leaderboard
        </Menu.Item>

        {this.props.currentUser.id ? (
          <div className="user-container">
            <p className="welcome-msg">{this.props.currentUser.name}</p>
            <Menu.Item
              as={Link}
              to="/login"
              className="log-item"
              name="log-out"
              active={activeItem === "/login"}
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
            name="/login"
            active={activeItem === "/login"}
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
  return { currentUser: state.authUserReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllQuestions: () => dispatch(GetAllQuestions()),
    GetAllUsers: () => dispatch(GetAllUsers()),
    logOut: () =>
      dispatch({
        type: "LOG_USER_OUT",
      }),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
