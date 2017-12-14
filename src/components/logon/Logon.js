import  React, { Component } from 'react';
import { connect } from 'react-redux';

import { dispatchLogin, logon } from '../../_actions';

import { Card,  CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

import './Logon.css';



class Logon extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.logon = props.logon.bind(this.state.username, this.state.password)
    };

    handleChange(name, value) {
        this.setState({ [name]: value})
    }

    render() {
        const {username, password} = this.state;

        return (
            <Card style={{width: '350px'}}>
                <CardTitle
                    title="Logon" 
                    subtitle="Please login before starting" />
                <CardText>
                    <Input type='text' label='User' name='username' value={username} onChange={this.handleChange.bind(this, 'username')} />
                    <br /><Input type='password' label='Password' name='password' value={password} onChange={this.handleChange.bind(this, 'password')} />
                </CardText>
                <CardActions style={{justifyContent: 'flex-end'}}>
                    <Button raised primary label='Login' onClick={this.logon} />
                </CardActions>
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      logon: () => {
        dispatch(logon(ownProps.username, ownProps.password))
      }
    }
  }

export default connect(null, mapDispatchToProps )(Logon);