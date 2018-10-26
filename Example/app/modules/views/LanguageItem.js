import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../configs/style';
import { getImageURL } from '../../configs/config'

export class LanguageItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        //render ra màn hình item được truyền vào thông qua props
        return (
            <TouchableOpacity style={Styles.containerItem} onPress={() => this.props.onPressItem(this.props.data)}>
                <Image
                    style={Styles.imgLogo}
                    resizeMode={'contain'}
                    source={{ url: getImageURL(this.props.data.image) }}  //sử dụng prop được truyền qua
                />
                <Text style={Styles.textLanguage}>{this.props.data.language}</Text>
            </TouchableOpacity>
        )
    }
}

const Styles = StyleSheet.create({
    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ED6161'
    },
    imgLogo: {
        width: 50,
        height: 50,
        margin: 8,
        marginLeft: 16,
        marginRight: 16
    },
    textLanguage: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white

    }
});

