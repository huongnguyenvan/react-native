import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import Styles from './styles';
import { Colors } from '../../../configs/style';

export class ViewItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: Colors.white
        }
    }


    onPressItem() {
        //Bạn có thể xử lý sự kiện ở đây nếu cần, ví dụ như như đổi màu item
        let newColor = Colors.white;
        if (this.state.color == Colors.white) {
            newColor = Colors.primary
        }
        this.setState({
            color: newColor
        })

        //Hoặc chuyển việc xử lý đó ra phía ngoài thông qua hàm được truyền vào.
        //Có thể truyền dữ liệu ra ngoài để hàm phía ngoài xử lý
        this.props.onPressItem(this.props.data)
    }

    render() {
        //in props được truyền qua để kiểm tra
        console.log(this.props.data)
        //render ra màn hình item được truyền vào thông qua props
        return (
            <TouchableOpacity style={[Styles.containerItem, { backgroundColor: this.state.color }]} onPress={() => this.onPressItem()}>
                <Image
                    style={Styles.imgLogo}
                    resizeMode={'contain'}
                    source={this.props.data.image}  //sử dụng prop được truyền qua
                />
                <Text>{this.props.data.title}</Text>
            </TouchableOpacity>
        )
    }
}