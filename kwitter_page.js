//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC9iJlqMej8ieRhMqUcpN4Y-yShEwjhaSo",
      authDomain: "kwitter-b781f.firebaseapp.com",
      databaseURL: "https://kwitter-b781f-default-rtdb.firebaseio.com",
      projectId: "kwitter-b781f",
      storageBucket: "kwitter-b781f.appspot.com",
      messagingSenderId: "1009850887490",
      appId: "1:1009850887490:web:47dbd983a67ccee792acdb",
      measurementId: "G-0NCNWF99MW"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("username");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
function send(){
     msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,message:msg,like:0
      });
      document.getElementById("msg").value="";
}