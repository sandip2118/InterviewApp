/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    Text,
} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('111111111111', this.props);
        return (
            <SafeAreaView>
                <Text>Home Screen</Text>
            </SafeAreaView>
        );
    }
};


export default Home;
