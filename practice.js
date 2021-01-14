 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyDk4tXPcJzn-7qHCmnX4vv2dvpTYi7z-34",
    authDomain: "kwitter-5a3f1.firebaseapp.com",
    databaseURL: "https://kwitter-5a3f1-default-rtdb.firebaseio.com",
    projectId: "kwitter-5a3f1",
    storageBucket: "kwitter-5a3f1.appspot.com",
    messagingSenderId: "403493139741",
    appId: "1:403493139741:web:dc8cdbb987b47c5bf85df4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }