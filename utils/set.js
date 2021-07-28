import firebase, { users } from './firebase';
import 'firebase/storage';
import { timeConversion } from './utility';

function MON(monthid){
    let month = '';
    switch (monthid) {
        case 1:
            month = 'Jan';
            break;
        case 2:
            month = 'Feb';
            break;
        case 3:
            month = 'Mar';
            break;
        case 4:
            month = 'Apr';
            break;
        case 5:
            month = 'Mei';
            break;
        case 6:
            month = 'Jun';
            break;
        case 7:
            month = 'Jul';
            break;
        case 8:
            month = 'Aug';
            break;
        case 9:
            month = 'Sep';
            break;
        case 10:
            month = 'Oct';
            break;
        case 11:
            month = 'Nov';
            break
        case 12:
            month = 'Dec';
            break;
        default:
            throw `Bulan ${monthid} Tidak ada`
            break;
    }
    return month
}
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
    let date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
    
    const createdAt = `${date.getDate()} ${MON(date.getMonth() + 1)} ${date.getFullYear()} ${timeConversion(time).substr(0, 5)}` 
    try {
        await setDataPribadi.add({
            ...other,
            NameFile,
            Status: 0,
            Tanggal_Pengajuan: createdAt 
        })
    } catch (error) {
        throw 'Gagal Meyimpan Data'
    }
    if(File === null || typeof File === 'undefined'){
        return true;
    }

    const Storage = firebase.storage().ref(`pdf/${collection}/${NameFile}}`);
    const res = Storage.put(File);
    if(res.length == 0){
        throw 'Penyimpanan File Gagal';
    }

    return true;
}