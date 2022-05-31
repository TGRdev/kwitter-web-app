
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBiv1wY09-HZXwHrZrBmJQ9RalokGBv3Cs",
      authDomain: "kwitter-web-app-bd728.firebaseapp.com",
      databaseURL: "https://kwitter-web-app-bd728-default-rtdb.firebaseio.com",
      projectId: "kwitter-web-app-bd728",
      storageBucket: "kwitter-web-app-bd728.appspot.com",
      messagingSenderId: "763923581937",
      appId: "1:763923581937:web:99ff078fe6d14eb0eb1250"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
window.location = "index.html";





}