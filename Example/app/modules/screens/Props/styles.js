import { StyleSheet } from 'react-native';
import { Colors } from '../../../configs/style';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    textMessage: {
        marginTop: 16,
        color: 'green',
        fontSize: 16,
    },
    imgLogo: {
        width: 50,
        height: 50,
        margin: 4
    },
    containList:{
        width: '100%',
    }, 
    containerItem: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default Styles;
