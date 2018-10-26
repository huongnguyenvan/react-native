import { StyleSheet } from 'react-native';
import { Colors } from '../../../configs/style';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    btnStyle: {
        height: 50,
        width: 250,
        borderColor: Colors.primary,
        borderRadius: 5,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: 'center',
        margin: 8
    },
    textAction: {
        color: Colors.primary,
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Styles;
