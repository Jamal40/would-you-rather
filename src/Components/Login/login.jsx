import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./login.css";
import { getUsers, getUserById } from "../../assets/api";
//Redux Imports
import { connect } from "react-redux";
import { authorizeUser } from "../../Actions/authorizeUserActions";

// async function getUserById(id) {
//   let users = await getUsers();
//   return users[id];
// }

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state.users = [];
    this.state.chosenUser = null;
  }
  state = {};

  handleChange = async (e, y) => {
    let chosenUser = await getUserById(y.value);

    this.setState({
      chosenUser: chosenUser,
    });
  };
  handleClick = () => {
    this.props.authorizeUser(this.state.chosenUser);
  };

  componentDidMount() {
    getUsers().then((users) => {
      let usersArr = [];
      for (let u in users) {
        usersArr.push({
          key: users[u].id,
          text: users[u].name,
          value: users[u].id,
          image: { avatar: true, src: users[u].avatarURL },
        });
      }
      this.setState({
        users: usersArr,
      });
    });
  }

  render = () => (
    <div className="login-container">
      <h2>Welcome to our website</h2>
      <Dropdown
        className="login-drop-down"
        placeholder="Select Friend"
        fluid
        selection
        options={this.state.users}
        onChange={this.handleChange}
      />
      <Button
        as={Link}
        to="/"
        disabled={!this.state.chosenUser}
        onClick={this.handleClick}
        color="green"
      >
        Sign in
      </Button>
    </div>
  );
}

export default connect(null, { authorizeUser })(Login);
