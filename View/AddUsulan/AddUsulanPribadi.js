import React from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView
} from 'react-native';
import Styles from '../Style/Style';
import MainUsulanStyle from '../Style/MainUsulan.style';
import AddUsulan from '../Style/AddUsulan.style';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AddUsulanPribadi extends React.Component {
    state = {
        display: 1,
    }
    handlePress = () => {
        this.setState({ display: this.state.display + 1 })
    }
    handleTitle = (display) => {
        if (display === 1) return 'A. Informasi Diri';
        if (display === 2) return 'B. Informasi Proyek';
    }
    render() {
        const layer = 2;
        const { navigation } = this.props;
        const { display } = this.state;
        return (
            <SafeAreaView style={Styles.container}>
                <View style={Styles.NavBackContainer}>
                    <TouchableOpacity
                        style={MainUsulanStyle.BackButton}
                        onPress={
                            () => {
                                (display === 1) ? navigation.goBack() : this.setState({ display: display - 1 })
                            }}
                    >
                        <Icon name="arrow-back" size={32} color='#fff' />
                    </TouchableOpacity>
                </View>
                <Text style={[Styles.headerText, MainUsulanStyle.AdditionalheaderText]}>
                    Usulan Pribadi
                </Text>
                {
                    // Form A Info Diri
                }
                <ScrollView>
                    <View style={[
                        Styles.ContainerViewBiasa,
                    ]}>
                        <Text style={[Styles.textNormalWhite]}>
                            {
                                this.handleTitle(display)
                            }
                        </Text>
                        <View style={[
                            AddUsulan.FormTextInputView,
                            { display: (display === 1) ? 'flex' : 'none' }
                        ]}>
                            <TextInput
                                placeholder="Nama Pengusul"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
                            />
                            <TextInput
                                placeholder="No Handphone"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
                            />
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
                            />
                            <TextInput
                                placeholder="Alamat"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
                            />
                        </View>
                        <View style={[
                            AddUsulan.FormTextInputView,
                            { display: (display === 2) ? 'flex' : 'none' }
                        ]} >
                            <TextInput
                                placeholderTextColor="#666872"
                                placeholder="Judul Proyek"
                                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
                            />
                            <TextInput // Blm Terbuat Dropdown
                                placeholder="Tipe Proyek"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
                            />
                            <TextInput
                                placeholder="Jelaskan Secara Singkat Deskripsi Proyek yang dilkakukan"
                                multiline
                                numberOfLines={4}
                                placeholderTextColor="#666872"
                                maxLength={40}
                                style={[Styles.input, AddUsulan.AdditionalInputStyle, AddUsulan.AdditionalInputOfTextArea]}
                            />
                            <View>
                                <Text style={Styles.textNormalWhite}>
                                    Pernah komunikasi Dengan Pihak Polibatam ?
                                </Text>
                                {
                                    //CheckBox Row // Checkbox Belum ada di React
                                }
                            </View>
                            <TextInput editable={false} style={[Styles.input, AddUsulan.AdditionalInputStyle]} />
                            <TextInput
                                placeholder="Luaran"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
                            />
                            <TextInput // File Input Tidak ada Di React
                                placeholder="File Lampiran"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulan.AdditionalInputStyle, { marginBottom: 5 }]}
                            />
                            <Text style={[Styles.textNormalWhite, { alignSelf: 'flex-start' }]}>
                                NB: Maks 5 MB, FIleType: ZIP|RAR
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={[
                    Styles.buttonBiru,
                    MainUsulanStyle.AdditionalButton,
                    AddUsulan.AdditionalButton
                ]} onPress={this.handlePress}>
                    <Text style={Styles.textNormalWhite}>
                        {
                            (layer === display ? 'Save' : 'Next')
                        }
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}