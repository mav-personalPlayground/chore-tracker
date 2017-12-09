import React, { Component } from 'react';
import './Logon.css';


import { Card,  CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';
import Link from 'react-toolbox/lib/link/Link';


class Logon extends Component {
    constructor(props) {
        super(props);
        this.state= { user:''};
    }


    render() {
        return (
            <Card style={{width: '350px'}}>
                <CardTitle
                    title="Logon" 
                    subtitle="Please login before starting" />
                <CardText>
                    <Input type='text' label='User' name='user' />
                    <br /><Input type='text' label='Password' name='password' />
                </CardText>
                <CardActions style={{justifyContent: 'flex-end'}}>
                    <Link label='Forgot Password' />
                    <Button raised primary label='Submit' />
                </CardActions>
            </Card>
        )
    }
}

export default Logon;