import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar  from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';

import './toolbox/theme.css';
import theme from './toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

class App extends Component {
  render() {
    return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <AppBar title='Chore Tracker' leftIcon='menu' >
            <Navigation />
          </AppBar>
        </div>
      </div>
    </ThemeProvider>
    );
  }
}

export default App;
