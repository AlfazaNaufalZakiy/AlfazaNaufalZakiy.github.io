function requireAuth() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = "index.html"; // Redirect ke halaman login
      }
    });
  }
  
  requireAuth();
  