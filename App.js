import React, { Component } from "react";
//import Expo from "expo";
import HomeScreen from "./forms/Menus/index.js";
//import LoginScreen from "./forms/Menus/LoginScreen.js";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  render() {
    return <HomeScreen />;
  }
}
