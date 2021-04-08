import { StyleSheet, Dimensions } from 'react-native';
import { putih } from './Style';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    AdditionalheaderText: {
        margin: 20,
    },
    ViewLine: {
        flexDirection: 'row',
        flexBasis: 'auto'
    },
    Line: {
        margin: 10,
        borderLeftWidth: 100,
        borderColor: putih,
    },
    BackButton: {
        borderColor: 'black'
    },
    AdditionalButton: {
        alignItems: 'center',
        margin: 10
    },
    ViewFormPengajuan: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height / 5.5,
    }
})