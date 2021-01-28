
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
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" +user_name+ "!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding roomname"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div> <hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room name");
      window.location="index.html";

}