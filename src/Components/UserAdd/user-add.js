import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./user-add.css";
import "semantic-ui-css/semantic.min.css";

//Actions
import { assignCameFromLink } from "../../Actions/authorizeUserActions";

//tasks
import { AddUser } from "../../Tasks/userTasks";

///react router
import { withRouter, Redirect } from "react-router";

//Redux Imports
import { connect } from "react-redux";

class UserAdd extends Component {
  selectedAvatar = null;
  addUser = () => {
    const newUser = {
      name: this.state.userName,
      password: this.state.password,
      avatarURL: this.selectedAvatar.src,
    };

    this.props.AddUser(newUser);
  };

  userNameChanged = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };
  passwordChanged = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleAvatarChosen = (e) => {
    this.selectedAvatar?.classList.remove("selected");
    this.selectedAvatar = e.target;
    this.selectedAvatar.classList.add("selected");
  };

  render() {
    if (
      this.props.allUsers?.length &&
      this.props.allUsers
        ?.map((u) => u.name)
        .includes(this.state?.userName || "") > 0
    ) {
      return <Redirect to="/login" />;
    }

    return (
      <Form className="question-add-container">
        <h2>New User</h2>
        {this.props.currentUser.error ? (
          <p className="log-in-validation">{this.props.allUsers.msg}</p>
        ) : (
          ""
        )}
        <Form.Field>
          <label>Name </label>
          <input onChange={this.userNameChanged} placeholder="Name" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input onChange={this.passwordChanged} placeholder="Password" />
        </Form.Field>

        <Form.Field>
          <label>Avatar</label>
          <div className="user-add-avatars-container">
            <img
              onClick={this.handleAvatarChosen}
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png"
            />
            <img
              onClick={this.handleAvatarChosen}
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/45.png"
            />
            <img
              onClick={this.handleAvatarChosen}
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/10.png"
            />
            <img
              onClick={this.handleAvatarChosen}
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png"
            />
            <img
              onClick={this.handleAvatarChosen}
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/11.png"
            />
            <img
              onClick={this.handleAvatarChosen}
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/11.png"
            />
            <img
              onClick={this.handleAvatarChosen}
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/4.png"
            />
            <img
              onClick={this.handleAvatarChosen}
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/4.png"
            />
            <img
              onClick={this.handleAvatarChosen}
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/80.png"
            />
            <img
              onClick={this.handleAvatarChosen}
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/80.png"
            />
            <img
              onClick={this.handleAvatarChosen}
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/100.png"
            />
            <img
              onClick={this.handleAvatarChosen}
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/100.png"
            />
          </div>
        </Form.Field>
        <Button onClick={this.addUser} color="blue">
          Add
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.authUserReducer, allUsers: state.userReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddUser: (data) => dispatch(AddUser(data)),
    AssignCameFromLink: (link) => dispatch(assignCameFromLink(link)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserAdd)
);
