import React from 'react';
import { Image, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import Styles from './styles';
import { Colors } from '../../../configs/style';

export class Components extends React.Component {
    //Header ứng dụng (tùy chọn)
    static navigationOptions = ({ navigation }) => {
        return {
            title: "COMPONENT",
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
            message: "Message 2",
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
        this.clickButton = 0;
        this.clickTouchAbleOpecity = 0;
    }

    onPressButtonDemo() {
        this.clickButton++;
        this.setState({
            message: "Clicked Button: " + this.clickButton
        })
    }

    onPressTouchableOpacityDemo() {
        this.clickTouchAbleOpecity++;
        this.setState({
            message: "Clicked TouchableOpacity: " + this.clickTouchAbleOpecity
        })
    }

    render() {
        return (
            <View style={Styles.container}>
                {/* Hiển thị Một message lên màn hình */}
                <Text style={Styles.textMessage}>WELCOME TO TEXT OF REACT-NATIVE</Text>
                <View style={Styles.containImage}>
                    {/* Hiển thị ảnh từ local resource */}
                    <Image
                        style={Styles.imgLogo}  /* Style của ảnh */
                        resizeMode={'contain'}  /* chế độ hiển thị (center, contain, cover, repeat, stretch )  của ảnh */
                        source={require('../../../assets/images/react-native.png')}
                    />

                    {/* Hiển thị ảnh từ web/server */}
                    <Image
                        style={Styles.imgLogo}
                        resizeMode={'contain'}
                        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                    />
                </View>
                {/* In một giá trị của state lên màn hình */}
                <Text style={Styles.textMessage}>{this.state.message}</Text>

                {/* Sử dụng Button với chức năng press vào nút */}
                <Button
                    onPress={() => this.onPressButtonDemo()}
                    title="Click Me!"
                    color="#841584"
                />

                {/* Sử dụng TouchableOpacity với chức năng press giống như button */}
                <TouchableOpacity
                    style={Styles.btnStyle}
                    onPress={() => this.onPressTouchableOpacityDemo()}>
                    <Text style={Styles.textAction}>Touchable Opacity</Text>
                </TouchableOpacity>


                {/* Sử dụng FlatList để hiển thị ra một danh sách */}
                <FlatList
                    data={this.state.listData}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }

    /* Hiển thị chi tiết 1 item như thế nào */
    renderItem(item) {
        return (
            <View style={Styles.containerItem}>
                <Image
                    style={Styles.imgLogo} 
                    resizeMode={'contain'}  
                    source={item.image}
                />
                <Text>{item.title}</Text>
            </View>
        )
    }
}