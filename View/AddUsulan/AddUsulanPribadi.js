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
import AddUsulanPribadi from '../Style/AddUsulan.style';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AddUsulan extends React.Component {
    state = {
        display: 1,
    }
    handlePress = () => {
        this.setState({ display: this.state.display + 1 })
    }
    render() {
        const { navigation } = this.props;
        const { display } = this.state;
        console.log(display);
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
                        { display: (display === 1) ? 'flex' : 'none' }
                    ]}>
                        <Text style={[Styles.textNormalWhite]}>
                            A. Informasi Diri
                        </Text>
                        <View style={AddUsulanPribadi.FormTextInputView}>
                            <TextInput
                                placeholder="Nama Pengusul"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulanPribadi.AdditionalInputStyle]}
                            />
                            <TextInput
                                placeholder="No Handphone"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulanPribadi.AdditionalInputStyle]}
                            />
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulanPribadi.AdditionalInputStyle]}
                            />
                            <TextInput
                                placeholder="Alamat"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulanPribadi.AdditionalInputStyle]}
                            />
                            <TouchableOpacity style={[
                                Styles.buttonBiru,
                                MainUsulanStyle.AdditionalButton,
                            ]} onPress={this.handlePress}>
                                <Text style={Styles.textNormalWhite}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[
                        Styles.ContainerViewBiasa,
                        { display: (display === 2) ? 'flex' : 'none' }
                    ]}>
                        <Text style={Styles.textNormalWhite}>
                            B. Informasi Proyek
                        </Text>
                        <View style={AddUsulanPribadi.FormTextInputView} >
                            <TextInput
                                placeholderTextColor="#666872"
                                placeholder="Judul Proyek"
                                style={[Styles.input, AddUsulanPribadi.AdditionalInputStyle]}
                            />
                            <TextInput // Blm Terbuat Dropdown
                                placeholder="Tipe Proyek"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulanPribadi.AdditionalInputStyle]}
                            />
                            <TextInput
                                placeholder="Jelaskan Secara Singkat Deskripsi Proyek yang dilkakukan"
                                multiline
                                numberOfLines={4}
                                placeholderTextColor="#666872"
                                maxLength={40}
                                style={[Styles.input, AddUsulanPribadi.AdditionalInputStyle, AddUsulanPribadi.AdditionalInputOfTextArea]}
                            />
                            <View>
                                <Text style={Styles.textNormalWhite}>
                                    Pernah komunikasi Dengan Pihak Polibatam ?
                                </Text>
                                {
                                    //CheckBox Row // Checkbox Belum ada di React
                                }
                            </View>
                            <TextInput editable={false} style={[Styles.input, AddUsulanPribadi.AdditionalInputStyle]} />

                            <TextInput
                                placeholder="Luaran"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulanPribadi.AdditionalInputStyle]}
                            />
                            <TextInput // File Input Tidak ada Di React
                                placeholder="File Lampiran"
                                placeholderTextColor="#666872"
                                style={[Styles.input, AddUsulanPribadi.AdditionalInputStyle, { marginBottom: 5 }]}
                            />
                            <Text style={[Styles.textNormalWhite, { alignSelf: 'flex-start' }]}>
                                NB: Maks 5 MB, FIleType: ZIP|RAR
                            </Text>
                            <TouchableOpacity style={[Styles.buttonBiru, MainUsulanStyle.AdditionalButton]}>
                                <Text style={Styles.textNormalWhite}>
                                    Save
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}