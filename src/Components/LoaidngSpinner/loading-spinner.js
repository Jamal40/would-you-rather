import React, { Component } from "react";
import "./loading-spinner.css";
import "semantic-ui-css/semantic.min.css";

class LoadingSpinner extends Component {
  render = () => (
    <div class="ui segment loading-spinner-container">
      <div class="ui active dimmer">
        <div class="ui massive text loader">Loading</div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
