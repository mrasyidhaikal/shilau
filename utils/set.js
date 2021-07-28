import firebase, { users } from './firebase';
import 'firebase/storage';
import { Alert } from 'react-native';

/**
   * 
   * @param {Number} uid 
   * @param {{
   *    any:String
   *    NameFile: String
   *    File: Buffer
   * }} data -Object Data
   *  @param {String} collection type "Pribadi | Perusahaan"
   * 
   * Function Digunakan Untuk Simpan Data 
   * Dan Upload File Ke Firebase
 */
export const setDataWithId = async (uid, data, collection) => {

    const setDataPribadi = users.doc(uid).collection(collection);
    const {File, NameFile, ...other} = data;
    const status = {status: 0};
    try {
        await setDataPribadi.add({...other, NameFile, status})
    } catch (error) {
        throw new Error('Gagal Meyimpan Data');
    }
    if(File === null || typeof File === 'undefined'){
        return true;
    }

    const Storage = firebase.storage().ref(`pdf/${collection}/${NameFile}}`);
    const res = Storage.put(File);
    if(res.length == 0){
        throw new Error('Penyimpanan File Gagal');
    }

    return true;
}