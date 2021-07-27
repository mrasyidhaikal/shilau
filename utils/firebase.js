import firebase from 'firebase/app'
import 'firebase/auth';
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

export function sendEmailVerfication(){
  const user = auth.currentUser;

  user.sendEmailVerification().then(() => {
    Alert.alert('Email', 'Cek Email Anda Untuk Verifikasi');
  }).catch(err => {
    console.log(err);
  })
}

export default firebase;
