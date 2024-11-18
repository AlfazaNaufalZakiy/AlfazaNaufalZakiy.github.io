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

  

  
  function registerUser(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Registration successful!");
        window.location.href = "main.html"; // Redirect to login page after registration
      })
      .catch((error) => {
        alert("Registration failed: " + error.message);
        console.error("Error during registration:", error);
      });
  }
  