import React, { Component } from 'react';

export default class EditToggle extends Component {
  render() {
    return (
      <select className="dropDownContainer ml0" onChange={this.props.update}>
        <option> Allow Edit </option>
        <option> Disable Edit </option>
      </select>
    )
  }
}