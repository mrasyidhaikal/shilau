import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAOVLgR-odhTjm7LVM2CEjISWYgIPZ2Ofs',
  authDomain: 'shilau-70f08.firebaseapp.com',
  projectId: 'shilau-70f08',
  storageBucket: 'shilau-70f08.appspot.com',
  messagingSenderId: '793973851290',
  appId: '1:793973851290:web:9f6fc247c448f2ba46cb23',
}

// Initialize Firebase
// console.log(firebase.app.length);
// if(!firebase.app.length){
  firebase.initializeApp(firebaseConfig)
// }else{
  // firebase.app();
// }
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const users = firestore.collection('users');

/**
 * 
 * @param {Number} uid Id User
 */
export const getDataBaseId= async (/*Number*/uid) => {
  if(typeof uid !== 'number'){
    return;
  }

  const perusahaan = users.doc(uid).collection('perusahaan');
  const pribadi = users.doc(uid).collection('pribadi');

  const CompanyRef = await perusahaan.get(); // Snapshot
  const PrivateRef = await pribadi.get();

  return [CompanyRef, PrivateRef];
}
/**
 * 
 * @param {Number} uid Id User
 * @param {Object} other Object Data Yang Ingin Disimpan
 * 
 * Set Data Perusahaan Dengan Id
 */
export const setDataPerusahaanWithId = (/*Number*/uid, /*Object*/data) => {
  const setDataPerusahaan = users.doc(uid).collection('perusahaan');
  const {image, ...other} = data;

  setDataPerusahaan.add({
    ...other
  }).then(res => {
    console.log(res);
  }).catch(er => {
    console.log(er);
  })
  
  return;
}

/**
 * 
 * @param {Number} uid Id User
 * @param {Object} other Data Yang Ingin disimpan
 */

export default firebase;
