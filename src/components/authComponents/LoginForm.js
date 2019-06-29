import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import '../../css/LoginForm.css';
import { login } from '../../repositories/AuthRepository';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            email: '',
            password: ''
        }

    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleLogin() {
        login(this.state)
            .then((userToken) => {
                if (userToken.token.length > 0) {
                    debugger;
                    const event = new CustomEvent('updateToken', { bubbles: true });
                    window.dispatchEvent(event);
                    this.props.history.push('/');
                }
            });
    }

    render() {
        return (
            <div className='login-container'>
                <Container className='login-form'>
                    <Typography variant="h4" align="center" className="login-header">Login to Oink</Typography>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="email" className="input-label">Email</InputLabel>
                        <Input className="input-text" required={true} id="email"
                            value={this.state.email}
                            onChange={(e) => this.handleEmailChange(e)}
                            classes={{
                                'input': 'input-text',
                                'underline': 'input-underline'
                            }} />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="password" className="input-label">Password</InputLabel>
                        <Input className="input-text" required={true} id="password"
                            type="password"
                            value={this.state.password}
                            onChange={(e) => this.handlePasswordChange(e)}
                            classes={{
                                'input': 'input-text',
                                'underline': 'input-underline'
                            }}
                        />
                    </FormControl>
                    <Button variant="outlined" size="large" className="login-button" onClick={() => this.handleLogin()}>Login</Button>
                </Container>
            </div>
        )
    }
}