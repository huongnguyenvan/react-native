import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Styles from './styles';
import { Colors } from '../../../configs/style';
import { LanguageItem } from '../../views/LanguageItem'
import RESTClient from '../../../libs/RESTClient';

export class RestFul extends React.Component {
    //Header ứng dụng (tùy chọn)
    static navigationOptions = ({ navigation }) => {
        return {
            title: "RESTFUL API",
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
            listData: []    //Khai báo listData để chứa dữ liệu
        }
    }

    componentDidMount() {
        this.getLanguagesFromServer();
    }

    getLanguagesFromServer() {
        //todo Có thể làm cái xoay xoay ở đây
        //Gọi hàm lấy language từ lớp RestClient để lấy dữ liệu
        RESTClient.getLanguage().then(
            (result) => {
                //Đây là quá trình bất đồng bộ, và trả về result sau khi kết thúc
                if (result.error_code == 0) {
                    //Kiểm tra trạng thái lỗi và set lại dữ liệu để render data
                    this.setState({
                        listData: result.data
                    })
                }
                //todo Gọi xong thì tắt cái xoay xoay đi
            }
        )
    }

    // onPress Item Language
    onPressItem(item) {
        console.log("Click Item language: ", item.language)
    }

    render() {
        return (
            <View style={Styles.container}>
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
            <LanguageItem
                data={item} //Truyền item này qua ViewItem như một prop
                onPressItem={(itemPress) => { this.onPressItem(itemPress) }}    // truyền một hàm qua để bắt sự kiện click item
            />
        )
    }
}