import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./login.css";
import "semantic-ui-css/semantic.min.css";

///react router
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

//Redux Imports
import { connect } from "react-redux";
import { authorizeUser } from "../../Actions/authorizeUserActions";
import { GetAllQuestions } from "../../Tasks/qustionTasks";
import { LogUserIn } from "../../Tasks/userTasks";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state.users = [];
    this.state.chosenUser = null;
  }
  state = {};
  users = {};

  handleChange = async (e, y) => {
    let chosenUser = this.props.allUsers.filter((u) => u._id === y.value)[0];
    this.setState({
      chosenUser: chosenUser,
    });
  };

  handleClick = () => {
    //this.props.logIn(this.state.chosenUser);
    const password = document.querySelector(".log-in-password").value;
    this.props.LogUserIn(this.state.chosenUser, password);
    this.props.GetAllQuestions(this.state.chosenUser._id);
  };

  componentDidMount() {}

  updateFromReduxState() {
    let usersArr = [];
    for (let u in this.props.allUsers) {
      usersArr.push({
        key: this.props.allUsers[u]._id,
        text: this.props.allUsers[u].name,
        value: this.props.allUsers[u]._id,
        image: { avatar: true, src: this.props.allUsers[u].avatarURL },
      });
    }

    this.users = usersArr;
  }

  render = () => {
    this.updateFromReduxState();

    if (this.props.currentUser._id) {
      const _path = this.props.currentUser?.link || "/";
      return <Redirect to={_path} />;
    }

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

        <Form className="log-in-password-container">
          <Form.Field>
            <input
              className="log-in-password"
              type="password"
              placeholder="password"
            />
          </Form.Field>
          {this.props.currentUser.error ? (
            <p className="log-in-validation">{this.props.currentUser.error}</p>
          ) : (
            ""
          )}
        </Form>
        <Button
          // as={Link}
          // to={this.props.currentUser?.link || "/"}
          disabled={!this.state.chosenUser}
          onClick={this.handleClick}
          color="green"
        >
          Sign in
        </Button>
        <p>
          Or if you don't have an account just{" "}
          <Link to="/users/add">create one</Link>
        </p>
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

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllQuestions: (data) => dispatch(GetAllQuestions(data)),
    logIn: (data) => dispatch(authorizeUser(data)),
    LogUserIn: (userData, password) => dispatch(LogUserIn(userData, password)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
