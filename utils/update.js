import firebase, { users } from './firebase';
import 'firebase/storage';
/**
   * 
   * @param {Number} uid 
   * @param {String} docId - Random String Provide By Firebase
   * @param {{
 *    any:String
 *    NameFile: String
 *    File: Buffer
 * }} data -Object Data
 *  @param {String} collection type "Pribadi | Perusahaan"
 * 
 * Function Digunakan Untuk Update Data 
 * Dan Upload File Ke Firebase
*/
export const updateUsulan = async (uid, docId, data, collection) => {
    const Ref = users.doc(uid.toString()).collection(collection).doc(docId.toString());
    const dataRef = await Ref.get();
    const {File, NameFile, ...other} = data;
    // let success = false;

    try {
        let res = await users.firestore.runTransaction(async tr => {
            try {
                try {
                    if(File != null || typeof File != 'undefined'){
                        await tr.update(Ref, {
                            ...other,
                            NameFile,
                            status: 0
                        })

                        return true
                    }else{
                        await tr.update(Ref, {
                            ...other,
                            status: 0
                        })
                        return true
                    }
                    
                } catch (error) {
                    throw error
                }
            } catch (error) {
                throw error
            }
        })

        if(File == null || typeof File === 'undefined'){
            return true
        }
        

        const getData = dataRef.data();
        
        const Storage = firebase.storage().ref(`pdf/${collection}/${getData.NameFile}`);

        
        let success = await Storage.getDownloadURL().then(async (res) => {
            
            const pdfFile = Storage.ref().child(`pdf/${collection}/${getData.NameFile}`);

            try {
                await pdfFile.delete();
            } catch (error) {
                throw error;
            }

            const str = firebase.storage().ref(`pdf/${collection}/${NameFile}`);
            const put = str.put();

            if(put.length == 0){
                return false
            }
            return true
            // success = true
        }).catch(async () => {
        
            const str = firebase.storage().ref(`pdf/${collection}/${NameFile}`);
            const put = str.put();

            if(put.length == 0){
                return false
            }
            return true
        });

        // console.log(res);
        return res && success;
    } catch (error) {
        throw error
    }
    
}

export const updateStatus = async (uid, docid, data, collection) => {
    const Ref = users.doc(uid).collection(collection).doc(docid);
    const {File, NameFile, ...other} = data;
    try {
        await Ref.update({
            // ...other,
            Status: 1
        })

        return true;
    } catch (error) {
        throw error;
    }
    console.log(Ref);
}

export const updateStatusSelesai = async (uid, docid, collection) => {
    const Ref = users.doc(uid).collection(collection).doc(docid);

    try {
        let res = await Ref.update({
            status: 2
        })

        return res;
    } catch (error) {
        throw error;
    }
}
