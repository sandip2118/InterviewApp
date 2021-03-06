/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StatusBar,
} from 'react-native';
import Navigation from './src/index';

class App extends Component {

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </>
    );
  }
};

export default App;
