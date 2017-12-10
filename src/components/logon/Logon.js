import  React, { Component } from 'react';

import logon from '../../_actions';

import { Card,  CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

import './Logon.css';



class Logon extends Component {
    constructor(props) {
        super(props);
        this.state= {
             username: 'aaa',
             password: 'asdasd'
        };
    };

    handleChange = (name, value) => {
        if (this.state[name] !== value)
            this.setState({...this.state, [name]: value});
    };

    render() {
        return (
            <Card style={{width: '350px'}}>
                <CardTitle
                    title="Logon" 
                    subtitle="Please login before starting" />
                <CardText>
                    <Input type='text' label='User' name='username' value={this.state.username} onChange={this.handleChange.bind(this, 'username')} />
                    <br /><Input type='text' label='Password' name='password' value={this.state.password} onChange={this.handleChange.bind(this, 'password')} />
                </CardText>
                <CardActions style={{justifyContent: 'flex-end'}}>
                    <Button raised primary label='Login' onClick={this.props.handleLogin(this.state.username, this.state.password)} />
                </CardActions>
            </Card>
        )
    }
}

export default Logon;