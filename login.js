// Firebase configuration
var firebaseConfig = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId,
  measurementId: firebaseConfig.measurementId
};

firebase.initializeApp(firebaseConfig);

  

  
  function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Login successful!");
        // You can redirect to a different page or dashboard here
        window.location.href = "main.html"; // Example redirection to a welcome page
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
        console.error("Error during login:", error);
      });
  }
  