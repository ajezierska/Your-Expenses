import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDZJgcW_1TCqhr7Sq6ZrtkIOeMAI-CRSLU",
  authDomain: "your-expenses.firebaseapp.com",
  databaseURL: "https://your-expenses.firebaseio.com",
  projectId: "your-expenses",
  storageBucket: "your-expenses.appspot.com",
  messagingSenderId: "298701314146"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
