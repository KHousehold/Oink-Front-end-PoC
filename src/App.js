import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom'
import { hot } from "react-hot-loader";
import { makeStyles } from '@material-ui/styles';
import Header from './components/Header';
import Home from './components/Home';
import Expenses from './components/expenses/Expenses';
import LoginForm from "./components/authComponents/LoginForm";
import RegistrationForm from './components/authComponents/RegistrationForm';
import { checkToken } from './repositories/AuthRepository';
import "./css/App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			auth: false
		}
	}
	componentDidMount() {
		if (checkToken()) {
			this.setState({ auth: true });
		}
		window.addEventListener('updateToken', this.handleTokenChange);
	}
	componentWillUnmount() {
		window.removeEventListener('updateToken', this.handleTokenChange);
	}

	handleTokenChange = () => {
		if (localStorage.userToken.length > 0) {
			this.setState({ auth: true });
		}
	}

	render() {
		return (
			<div className="container">
				<Header auth={this.state.auth}></Header>
				<Route path="/" exact component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/expenses" component={Expenses} />
				<Route path="/login" component={LoginForm} />
				<Route path="/register" component={RegistrationForm} />
			</div>
		);
	}
}

export default hot(module)(App);