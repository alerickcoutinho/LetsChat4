var firebaseConfig = {
    apiKey: "AIzaSyBNqet7k5zVYBy2_0PcHWnEYOMYENnM1KQ",
    authDomain: "kwitter-a38f1.firebaseapp.com",
    databaseURL: "https://kwitter-a38f1-default-rtdb.firebaseio.com",
    projectId: "kwitter-a38f1",
    storageBucket: "kwitter-a38f1.appspot.com",
    messagingSenderId: "605365925314",
    appId: "1:605365925314:web:6bc0c6bd3ee34dc5f0d25b",
    measurementId: "G-66MLHXFNC6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementsById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementsById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
