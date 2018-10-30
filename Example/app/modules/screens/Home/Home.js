import React from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import Styles from './styles';
// import AppConfig from '../../../configs/config';
import { Colors } from '../../../configs/style';
import SCREENS from '../../../configs/screen';

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


    componentDidMount() {
        this.demoStorage();
    }

    onPressStyle() {
        this.props.navigation.navigate("STYLES")
    }

    onPressComponent() {
        this.props.navigation.navigate("COMPONENT")
    }

    onPressProps() {
        //Để đễ quản lý các màn hình ta đặt các tên màn hình vào một đối tượng và đưa nó ra config
        this.props.navigation.navigate(SCREENS.PROPS)
    }

    onPressRestFul() {
        this.props.navigation.navigate(SCREENS.RESTFUL)
    }


    //Hướng dẫn cách sử dụng Storage
    demoStorage() {
        //save key -> value
        AsyncStorage.setItem("language", "vi");
        AsyncStorage.getItem("language").then(result => {
            console.log(result) //return value: vi
        })
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

                <TouchableOpacity style={Styles.btnStyle} onPress={() => this.onPressProps()}>
                    <Text style={Styles.textAction}>PROPS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.btnStyle} onPress={() => this.onPressRestFul()}>
                    <Text style={Styles.textAction}>RESTful API</Text>
                </TouchableOpacity>

            </View>
        );
    }
}