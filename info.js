const auth = firebase.auth();
const database = firebase.database();

// Ambil elemen HTML
const userEmailElement = document.getElementById('user-email');
const progressQuizElement = document.getElementById('progress-quiz');
const progressSentenceElement = document.getElementById('progress-sentence');
const progressListeningElement = document.getElementById('progress-listening');

// Autentikasi pengguna dan ambil data progress
auth.onAuthStateChanged(user => {
    if (user) {
        const userId = user.uid;
        userEmailElement.textContent = user.email;

        // Ambil data progress dari Firebase
        const userProgressRef = database.ref(`users/${userId}/progress`);
        userProgressRef.on('value', snapshot => {
            const progressData = snapshot.val() || {};

            // Progress Quiz
            const quizProgress = progressData.quiz || 0;
            progressQuizElement.style.width = `${quizProgress}%`;
            progressQuizElement.textContent = `${quizProgress}%`;

            // Progress Sentence
            const sentenceProgress = progressData.sentence || 0;
            progressSentenceElement.style.width = `${sentenceProgress}%`;
            progressSentenceElement.textContent = `${sentenceProgress}%`;

            // Progress Listening
            const listeningProgress = progressData.listening || 0;
            progressListeningElement.style.width = `${listeningProgress}%`;
            progressListeningElement.textContent = `${listeningProgress}%`;
        });
    } else {
        // Jika pengguna tidak login, arahkan ke halaman login
        window.location.href = "register.html";
    }
});
