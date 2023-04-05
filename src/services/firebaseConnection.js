
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyCWDss7-Us0gT7YxwrH69CZHXzQ5_6Fje0",
    authDomain: "sistema-3ce88.firebaseapp.com",
    projectId: "sistema-3ce88",
    storageBucket: "sistema-3ce88.appspot.com",
    messagingSenderId: "438695367564",
    appId: "1:438695367564:web:2ae8562999b2baa34dbca9",
    measurementId: "G-HG1FTRRWPB"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
  
export default firebase;