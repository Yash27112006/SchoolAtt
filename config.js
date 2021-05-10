import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZhulzWNyzvfC4D_04cYy-_kFds1_czjE",
  authDomain: "school-attendance-569fd.firebaseapp.com",
  databaseURL: "https://school-attendance-569fd.firebaseio.com",
  projectId: "school-attendance-569fd",
  storageBucket: "school-attendance-569fd.appspot.com",
  messagingSenderId: "43757203539",
  appId: "1:43757203539:web:a7b275b5680336c4d1d6a6"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();