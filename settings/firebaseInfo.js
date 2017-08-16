// Initialize Firebase
var config = {
  apiKey: "AIzaSyBCgYnANFu1rkAmyjdwWBZ_dJ8LqTKIJ-8",
  authDomain: "demosego.firebaseapp.com",
  databaseURL: "https://demosego.firebaseio.com",
  projectId: "demosego",
  storageBucket: "demosego.appspot.com",
  messagingSenderId: "262339299676"


};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();
