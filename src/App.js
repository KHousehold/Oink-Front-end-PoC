import React, { Component } from "react";
import { Route } from 'react-router-dom'
import { hot } from "react-hot-loader";
import Header from './components/Header';
import Home from './components/Home';
import Expenses from './components/Expenses';
import LoginForm from "./components/LoginForm";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header></Header>
				<Route path="/" exact component={Home} />
				<Route path="/expenses" component={Expenses} />
				<Route path="/login" component={LoginForm} />
			</div>
		);
	}
}

export default hot(module)(App);