import firebase, { users } from './firebase';
import 'firebase/storage';

export const deleteUsulan = async (uid, docid, data, collection) => {
    const Ref = users.doc(uid).collection(collection);
    const {File, NameFile, ...other} = data;
    try {
        
        await Ref.doc(docid).delete({});


        return true;
    } catch (error) {
        throw error;
    }
}