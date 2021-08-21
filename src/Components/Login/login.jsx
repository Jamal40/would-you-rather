import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./login.css";
//Redux Imports
import { connect } from "react-redux";
import { authorizeUser } from "../../Actions/authorizeUserActions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state.users = [];
    this.state.chosenUser = null;
  }
  state = {};
  users = {};

  handleChange = async (e, y) => {
    let chosenUser = this.props.allUsers[y.value];

    this.setState({
      chosenUser: chosenUser,
    });
  };
  handleClick = () => {
    this.props.authorizeUser(this.state.chosenUser);
  };

  componentDidMount() {}

  updateFromReduxState() {
    let usersArr = [];
    for (let u in this.props.allUsers) {
      usersArr.push({
        key: this.props.allUsers[u].id,
        text: this.props.allUsers[u].name,
        value: this.props.allUsers[u].id,
        image: { avatar: true, src: this.props.allUsers[u].avatarURL },
      });
    }

    this.users = usersArr;
  }

  render = () => {
    this.updateFromReduxState();
    return (
      <div className="login-container">
        <h2>Welcome to our website</h2>
        <Dropdown
          className="login-drop-down"
          placeholder="Select Friend"
          fluid
          selection
          options={this.users}
          onChange={this.handleChange}
        />
        <Button
          as={Link}
          to={this.props.currentUser?.link || "/"}
          disabled={!this.state.chosenUser}
          onClick={this.handleClick}
          color="green"
        >
          Sign in
        </Button>
      </div>
    );
  };
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.authUserReducer,
    allQuestions: state.questionsReducer,
    allUsers: state.userReducer,
  };
};

export default connect(mapStateToProps, { authorizeUser })(Login);
