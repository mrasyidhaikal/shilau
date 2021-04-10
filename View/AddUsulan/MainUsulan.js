import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import Style from '../Style/Style';
import MainStyle from '../Style/MainUsulan.style';
import Icon from 'react-native-vector-icons/Ionicons'

export default class MainUsulan extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={Style.container}>
                <View style={Style.NavBackContainer}>
                    <TouchableOpacity style={MainStyle.BackButton} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={32} color='#fff' />
                    </TouchableOpacity>
                </View>
                <Text style={[Style.headerText, MainStyle.AdditionalheaderText]}>
                    Pilihan Form Pengisian Pengajuan
                </Text>
                <View style={[Style.ContainerViewBiasa, MainStyle.ViewFormPengajuan]}>
                    <TouchableOpacity
                        style={[Style.buttonUngu, MainStyle.AdditionalButton]}
                        onPress={() => { navigation.navigate('AddUsulanPribadi') }}
                    >
                        <Text style={[Style.textNormalWhite]}>
                            Usulan Pribadi
                        </Text>
                    </TouchableOpacity>
                    <View style={MainStyle.ViewLine}>
                        <View style={MainStyle.Line} />
                        <Text style={Style.textNormalWhite}>
                            atau
                        </Text>
                        <View style={MainStyle.Line} />
                    </View>
                    <TouchableOpacity style={[Style.buttonIjo, MainStyle.AdditionalButton]}>
                        <Text style={[Style.textNormalWhite]}>
                            Usulan Perusahaan
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}