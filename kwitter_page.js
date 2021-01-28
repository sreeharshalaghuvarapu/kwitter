//YOUR FIREBASE LINKS


//ADD YOUR FIREBASE LINKS HERE
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
   user_name=localStorage("user_name");
   room_name=localStorage("room_name");
   function send(){
         msg=document.getElementById("msg").value;
         firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0,
         });
   } 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

