// Code ControlledInput Component Here

import React, { Component } from "react";

export default class ControlledInput extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  // Having controlled components is much more scalable
  // If our form changed to have numerous fields, the handleSubmit event handler would not change at all. The entirity of the form data is stored in the state object
  handleSubmit = event => {
    event.preventDefault();
    this.sendFormDataSomewhere(this.state);
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          // Sets the initial value prop to whatever state is
          value={this.state.value}
          // On change rerenders the component with handleChange callback that once again sets the value prop to event.targe.value
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
