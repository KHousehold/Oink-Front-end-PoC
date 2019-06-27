import React, { Component } from "react";
import { Route } from 'react-router-dom'
import { hot } from "react-hot-loader";
import Header from './components/Header';
import Home from './components/Home';
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header></Header>
				<Route path="/" component={Home} />
			</div>
		);
	}
}

export default hot(module)(App);