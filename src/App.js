import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Header from './Header';
import "./App.css";

class App extends Component{
  render(){
    return(
      <Header></Header>
    );
  }
}

export default hot(module)(App);