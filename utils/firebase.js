import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import { Alert } from 'react-native';

var firebaseConfig = {
  apiKey: 'AIzaSyAOVLgR-odhTjm7LVM2CEjISWYgIPZ2Ofs',
  authDomain: 'shilau-70f08.firebaseapp.com',
  projectId: 'shilau-70f08',
  storageBucket: 'shilau-70f08.appspot.com',
  messagingSenderId: '793973851290',
  appId: '1:793973851290:web:9f6fc247c448f2ba46cb23',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)  
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const users = firestore.collection('users');

/**
 * 
 * @param {Number} uid Id User
 */
export const getDataBaseId= (/*Number*/uid) => {
  if(typeof uid !== 'number'){
    return;
  }

  const dataRef = users.doc(uid);

  const getRef = await dataRef.get(); // Snapshot
}
/**
 * 
 * @param {Number} uid Id User
 * @param {Object} other Object Data Yang Ingin Disimpan
 * 
 * Set Data Perusahaan Dengan Id
 */
export const setDataPerusahaanWithId = (/*Number*/uid, /*Object*/other) => {
  const setData = users.doc(uid);

  setData.collection('perusahaan').set({
    
  }).then().catch(err => {
    console.log(err);
  })
}

/**
 * 
 * @param {Number} uid Id User
 * @param {Object} other Data Yang Ingin disimpan
 */
export const setDataPribadiWithId = (/*Number*/uid, /*Object*/other) => {

}

export default firebase;
