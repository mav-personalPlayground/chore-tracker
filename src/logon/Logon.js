import React, { Component } from 'react';
import './Logon.css';


import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card/Card';
import Button from 'react-toolbox/lib/button/Button';

class Logon extends Component {
    render() {
        return (
            <div>
                <Card style={{width: '350px'}}>
                    <CardTitle
                        title="Logon" />
                </Card>
            </div>
        )
    }
}

export default Logon;