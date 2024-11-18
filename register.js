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

  

  
  function registerUser(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Registration successful!");
        window.location.href = "index.html"; // Redirect to login page after registration
      })
      .catch((error) => {
        alert("Registration failed: " + error.message);
        console.error("Error during registration:", error);
      });
  }
  