//  import firebase from 'firebase';
import firebase from "firebase/compat/app";
import  "firebase/compat/auth"
import "firebase/compat/firestore"

 var firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyD9Y3vazcfVTY7uOA-a-Du9IN2X47qiBSI",
        authDomain: "web-contact-form-d43bd.firebaseapp.com",
        projectId: "web-contact-form-d43bd",
        storageBucket: "web-contact-form-d43bd.appspot.com",
        messagingSenderId: "207188224436",
        appId: "1:207188224436:web:dd0be91591f5b1e28deae1"
    
      // Initialize Firebase
     
 }) 
 var db =  firebaseApp.firestore();

 export {db}