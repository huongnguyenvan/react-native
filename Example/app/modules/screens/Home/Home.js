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
import Lan from "../../../configs/language";

export class Home extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: Lan.t('APP_NAME').toUpperCase(),
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
        console.log("ABCD");
        this.props.navigation.navigate("STYLES")
    }

    render() {
        return (
            <View style={Styles.container}>
                <TouchableOpacity style={Styles.btnStyle} onPress={() => this.onPressStyle()}>
                    <Text style={Styles.textVersion}>STYLES</Text>
                </TouchableOpacity>

            </View>
        );
    }
}