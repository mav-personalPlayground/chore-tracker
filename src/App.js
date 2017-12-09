import React, { Component } from 'react';
import './App.css';

import AppBar  from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import { Grid, Row, Col } from 'react-material-responsive-grid';

import './toolbox/theme.css';
import theme from './toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import Logon from './logon/Logon';

class App extends Component {

  centerSizes = ['xs','sm','md','lg','xl'];

  render() {
    return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <AppBar title='Chore Tracker' leftIcon='menu' >
            <Navigation />
          </AppBar>
          <Grid fixed={'center'}>
            <Row>
              <Col><br /></Col>
            </Row>
            <Row center={this.centerSizes} >
                <Col>
                  <Logon />
                </Col>
            </Row>
          </Grid>
          
      </div>
    </ThemeProvider>
    );
  }
}

export default App;
