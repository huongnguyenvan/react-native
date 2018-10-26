import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, View } from 'react-native';
import * as Screens from './modules/screens';

const AppNavigator = StackNavigator({
    HOME: {
        screen: Screens.Home
    },
    STYLES: {
        screen: Screens.StyleDemo
    },
    COMPONENT: {
        screen: Screens.Components
    },
    PROPS: {
        screen: Screens.Props
    },
    RESTFUL: {
        screen: Screens.RestFul
    }
}, {
        headerMode: "screen"
    });

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
