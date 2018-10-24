import React from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Styles from './styles';
// import AppConfig from '../../../configs/config';
import { Colors } from '../../../configs/style';

export class Home extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "EXAMPLE",
            headerStyle: {
                backgroundColor: Colors.primary
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
                alignSelf: 'center'
            }
        };
    };

    constructor(props) {
        super(props);
        this.state = {};
    }


    onPressStyle() {
        this.props.navigation.navigate("STYLES")
    }

    onPressComponent() {
        this.props.navigation.navigate("COMPONENT")
    }

    render() {
        return (
            <View style={Styles.container}>
                <TouchableOpacity style={Styles.btnStyle} onPress={() => this.onPressStyle()}>
                    <Text style={Styles.textAction}>STYLES</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.btnStyle} onPress={() => this.onPressComponent()}>
                    <Text style={Styles.textAction}>COMPONENT</Text>
                </TouchableOpacity>

            </View>
        );
    }
}