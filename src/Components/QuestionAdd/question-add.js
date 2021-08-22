import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./question-add.css";
import "semantic-ui-css/semantic.min.css";

//Actions
import { assignCameFromLink } from "../../Actions/authorizeUserActions";

//tasks
import { AddQuestion } from "../../Tasks/qustionTasks";
import { GetAllUsers } from "../../Tasks/userTasks";

///react router
import { withRouter, Redirect } from "react-router";

//Redux Imports
import { connect } from "react-redux";

class QuestionAdd extends Component {
  state = { firstOption: "", secondOption: "" };

  addQuestion = () => {
    const newQuestion = {
      optionOneText: this.state.firstOption,
      optionTwoText: this.state.secondOption,
      author: this.props.currentUser.id,
    };

    this.props.AddQuestion(newQuestion);
    this.props.GetAllUsers();
    const inputs = document.querySelectorAll(".question-add-container input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    this.props.history.push("/");
  };

  firstOptionChanged = (e) => {
    this.setState({
      firstOption: e.target.value,
    });
  };
  secondOptionChanged = (e) => {
    this.setState({
      secondOption: e.target.value,
    });
  };

  render() {
    if (!this.props.currentUser.id) {
      this.props.AssignCameFromLink(this.props.location.pathname);
      return <Redirect to="/login" />;
    }
    return (
      <Form className="question-add-container">
        <h2>Would you rather...?</h2>
        <Form.Field>
          <label>First Option</label>
          <input
            onChange={this.firstOptionChanged}
            placeholder="First Option"
          />
        </Form.Field>
        <Form.Field>
          <label>Second Option</label>
          <input
            onChange={this.secondOptionChanged}
            placeholder="Second Option"
          />
        </Form.Field>
        <Button onClick={this.addQuestion} color="blue">
          Add
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.authUserReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddQuestion: (data) => dispatch(AddQuestion(data)),
    GetAllUsers: () => dispatch(GetAllUsers()),
    AssignCameFromLink: (link) => dispatch(assignCameFromLink(link)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionAdd)
);
