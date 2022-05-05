
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCWeewmRy3RhPTDQFvPTWORA-3nhH6Vb2I",
    authDomain: "kwitter-1b979.firebaseapp.com",
    databaseURL: "https://kwitter-1b979-default-rtdb.firebaseio.com",
    projectId: "kwitter-1b979",
    storageBucket: "kwitter-1b979.appspot.com",
    messagingSenderId: "990721403317",
    appId: "1:990721403317:web:ee74e8c5927076f8c511fc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_user(){
      username= document.getElementById("user_name").value;
      firebase.database().ref("/").child(username).update({
          purpose:"adding username"
      });
  }