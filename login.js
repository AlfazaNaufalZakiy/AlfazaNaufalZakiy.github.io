// Firebase configuration
var firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId
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
  