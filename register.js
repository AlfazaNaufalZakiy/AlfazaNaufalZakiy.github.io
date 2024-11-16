// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXIAMWLGxD7oMf05KCPArmfqaV5CnieAE",
    authDomain: "funenglishlab-4bf5c.firebaseapp.com",
    projectId: "funenglishlab-4bf5c",
    storageBucket: "funenglishlab-4bf5c.firebasestorage.app",
    messagingSenderId: "94441181912",
    appId: "1:94441181912:web:6e9f5e337175adb3263dad",
    measurementId: "G-2X2QTL0XE1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function registerUser(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Registration successful!");
        window.location.href = "login.html"; // Redirect to login page after registration
      })
      .catch((error) => {
        alert("Registration failed: " + error.message);
        console.error("Error during registration:", error);
      });
  }
  