/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CustomText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>{this.props.message}</Text>
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Welcome to Code 101 - React-native"
        }
    }

    render() {
        return (
            <CustomText message={this.state.message} /> 
        );
    }
}