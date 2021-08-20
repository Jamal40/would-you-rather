import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "./question-add.css";
import "semantic-ui-css/semantic.min.css";

//tasks
import { AddQuestion } from "../../Tasks/qustionTasks";

//Redux Imports
import { connect } from "react-redux";
import { withRouter } from "react-router";

class QuestionAdd extends Component {
  state = { firstOption: "", secondOption: "" };

  addQuestion = () => {
    const newQuestion = {
      optionOneText: this.state.firstOption,
      optionTwoText: this.state.secondOption,
      author: this.props.currentUser.id,
    };

    this.props.AddQuestion(newQuestion);

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
          Blue
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
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionAdd)
);
