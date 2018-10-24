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

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.textVersion}>{"Current version 1.0"}</Text>
            </View>
        );
    }
}