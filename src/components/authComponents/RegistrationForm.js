import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOn from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import '../../css/RegistrationForm.css';
import { Button } from '@material-ui/core';
import { register } from '../../repositories/AuthRepository';

export default class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            repeatPass: '',
            showPassword: false,
            passError: false,
            regError: false
        }
        this.getError = this.getError.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleRepeatPassword(event) {
        const repeatPass = event.target.value;
        this.setState({ repeatPass });
        if (this.state.password !== repeatPass) {
            this.setState({ passError: true });
        } else {
            this.setState({ passError: false });
        }
    }

    handleClickShowPassword() {
        this.setState({ showPassword: !this.state.showPassword });
    }

    handleRegButtonClick() {
        debugger;
        register(this.state.email, this.state.password)
            .then((user) => {
                if (user) this.showDialog();
            })
            .catch(error => this.setState({ regError: true }))
    }

    getError() {
        let errorText = '';
        if (this.state.passError) {
            errorText = 'Passwords are not the same!'
        }
        if (this.state.regError) {
            errorText = 'User already exists!'
        }
        return (
            <Typography className='error-message'>{errorText}</Typography>
        )
    }

    render() {
        const error = this.getError();
        return (
            <div className='register-container'>
                <Container className="register-form">
                    <Typography variant="h4" align="center" className="register-header">
                        Register for Oink
                    </Typography>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="reg-email" className="input-label">Email</InputLabel>
                        <Input id="reg-email" className="input-text" required={true}
                            value={this.state.email}
                            onChange={(e) => this.handleEmailChange(e)}
                            classes={{
                                'input': 'input-text',
                                'underline': 'input-underline'
                            }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailIcon className="icon" />
                                </InputAdornment>
                            } />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="reg-pass" className="input-label">Password</InputLabel>
                        <Input className="input-text" required={true}
                            value={this.state.password}
                            type={this.state.showPassword ? 'text' : 'password'}
                            onChange={(e) => this.handlePasswordChange(e)}
                            error={this.state.passError}
                            classes={{
                                'input': 'input-text',
                                'underline': 'input-underline'
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="Toggle password visibility" onClick={(e) => this.handleClickShowPassword()}>
                                        {this.state.showPassword ? <VisibilityOn className="icon" /> : <VisibilityOff className="icon" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="reg-pass-rep" className="input-label">Repeat Password</InputLabel>
                        <Input className="input-text" required={true}
                            value={this.state.repeatPass}
                            type={this.state.showPassword ? 'text' : 'password'}
                            onChange={(e) => this.handleRepeatPassword(e)}
                            error={this.state.passError}
                            classes={{
                                'input': 'input-text',
                                'underline': 'input-underline'
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="Toggle password visibility" onClick={(e) => this.handleClickShowPassword()}>
                                        {this.state.showPassword ? <VisibilityOn className="icon" /> : <VisibilityOff className="icon" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {error}
                    <Button variant="outlined"
                        size="large" className="reg-button"
                        onClick={() => this.handleRegButtonClick()}
                    >Register</Button>
                </Container>
            </div>
        )
    }
}