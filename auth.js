function requireAuth() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = "index.html"; // Redirect ke halaman login
      }
    });
  }
  
  requireAuth();


function logoutUser() {
    firebase.auth().signOut()
        .then(() => {
            alert("You have successfully logged out!");
            window.location.href = "index.html"; // Redirect ke halaman login
        })
        .catch((error) => {
            console.error("Error during logout:", error);
            alert("Failed to log out. Please try again.");
        });
}