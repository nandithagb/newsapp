import "./App.css";

import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import New from "./components/New"

export default class App extends Component {
  
  render() {
    return (
      <div>
       <Navbar/>
       <New/>
      </div>
    )
  }
}

