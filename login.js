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
  