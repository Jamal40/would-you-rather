import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import "./login.css";
import { getUsers } from "../../assets/api";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state.users = [];
  }
  state = {};

  handleChange(e, y) {
    console.log(y.value);
  }
  handleClick() {}
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
      <Button onClick={this.handleClick} color="green">
        Sign in
      </Button>
    </div>
  );
}

export default Login;
