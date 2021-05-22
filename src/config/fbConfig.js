import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAqFKzmjv54PZxdW70nb2vdAmnnblVBL34",
  authDomain: "my-project-manager-4420d.firebaseapp.com",
  projectId: "my-project-manager-4420d",
  storageBucket: "my-project-manager-4420d.appspot.com",
  messagingSenderId: "847900961932",
  appId: "1:847900961932:web:3e3f8d7f15c8db5a529fa9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampInSnapshots: true});

  export default firebase;