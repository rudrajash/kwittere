
var firebaseConfig = {
      apiKey: "AIzaSyC_lDg7m1pQlXqdHyyN_OmqZvR7x2bqcqU",
      authDomain: "main-100f2.firebaseapp.com",
      projectId: "main-100f2",
      storageBucket: "main-100f2.appspot.com",
      messagingSenderId: "545137517299",
      appId: "1:545137517299:web:ca471eb866fb57bfac4d86",
      measurementId: "G-DC9JS8WKF8"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

