
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("welcome").innerHTML="Welcome:  "+user_name+"!!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name: "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location=kwitter_page.html;
}