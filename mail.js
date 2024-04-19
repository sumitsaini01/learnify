const firebaseConfig = {
    apiKey: "AIzaSyALOo13hAWR-jPnUsixs8lOdCxO3RmBBV8",
    authDomain: "e-learning-website-13c63.firebaseapp.com",
    databaseURL: "https://e-learning-website-13c63-default-rtdb.firebaseio.com",
    projectId: "e-learning-website-13c63",
    storageBucket: "e-learning-website-13c63.appspot.com",
    messagingSenderId: "185823452046",
    appId: "1:185823452046:web:ad5b9e834ce90631cc22df"
  };

  firebase.initializeApp(firebaseConfig);

  var ElearningwebsiteDB = firebase.database().ref('E-learning website');
  document.getElementById