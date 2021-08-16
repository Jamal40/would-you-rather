import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "./question-add.css";
import "semantic-ui-css/semantic.min.css";

export default class QuestionAdd extends Component {
  render() {
    return (
      <Form className="question-add-container">
        <h2>Would you rather...?</h2>
        <Form.Field>
          <label>First Option</label>
          <input placeholder="First Option" />
        </Form.Field>
        <Form.Field>
          <label>Second Option</label>
          <input placeholder="Second Option" />
        </Form.Field>
        <Button color="blue">Blue</Button>
      </Form>
    );
  }
}
