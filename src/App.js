import "./App.css";

import React, { Component } from 'react'

export default class App extends Component {
  c='john';
  render() {
    return (
      <div>
        Hello my first class based project {this.c}
      </div>
    )
  }
}

