import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Styles from './styles';
import { Colors } from '../../../configs/style';
import { ViewItem } from './ViewItem'

export class Props extends React.Component {
    //Header ứng dụng (tùy chọn)
    static navigationOptions = ({ navigation }) => {
        return {
            title: "PROPS",
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
        this.state = {
            message: "",
            listData: [
                {
                    image: require('../../../assets/images/ios.png'),
                    title: "IOS"
                },
                {
                    image: require('../../../assets/images/android.png'),
                    title: "Android"
                },
                {
                    image: require('../../../assets/images/react-native.png'),
                    title: "React Native"
                }
            ]
        }
    }

    // onPressItem
    onPressItem(item, index) {
        this.setState({
            message: "Click item: " + index + " - title: " + item.title
        })
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.textMessage}>{this.state.message}</Text>
                <FlatList
                    style={Styles.containList}
                    data={this.state.listData}
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }

    /* Hiển thị chi tiết 1 item như thế nào */
    renderItem(item, index) {
        return (
            <ViewItem
                data={item} //Truyền item này qua ViewItem như một prop
                onPressItem={(itemPress) => { this.onPressItem(itemPress, index) }}    // truyền một hàm qua để bắt sự kiện click item
            />
        )
    }
}