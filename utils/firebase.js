import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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

export default firebase;
