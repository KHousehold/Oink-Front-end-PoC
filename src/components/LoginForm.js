import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './LoginForm.css'

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className='login-container'>
                <Container className='login-form'>
                    <Typography variant="h4" align="center" className="login-header">Login to Oink</Typography>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="email" className="input-label">Email</InputLabel>
                        <Input className="input-text" required="true" id="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange} />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="password" className="input-label">Password</InputLabel>
                        <Input className="input-text" required="true" id="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange} />
                    </FormControl>
                </Container>
            </div>
        )
    }
}