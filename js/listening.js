const listeningQuestions = [
    { audio: "assets/audio/question1.ogg", correctAnswer: "I like apples" },
    { audio: "assets/audio/question2.ogg", correctAnswer: "She plays the guitar" },
    { audio: "assets/audio/question3.ogg", correctAnswer: "They are students" },
    { audio: "assets/audio/question4.ogg", correctAnswer: "We go to school" },
    { audio: "assets/audio/question5.ogg", correctAnswer: "He drinks water" },
    { audio: "assets/audio/question6.ogg", correctAnswer: "The dog runs fast" },
    { audio: "assets/audio/question7.ogg", correctAnswer: "Birds fly in the sky" },
    { audio: "assets/audio/question8.ogg", correctAnswer: "She cooks dinner" },
    { audio: "assets/audio/question9.ogg", correctAnswer: "I am happy" },
    { audio: "assets/audio/question10.ogg", correctAnswer: "He is a teacher" }
];

let score = 0;
let answeredCorrectly = Array(listeningQuestions.length).fill(false);
let currentQuestionIndex = 0;

function updateScore() {
    const scoreElement = document.getElementById('resultMessage');
    const calculatedScore = (score / listeningQuestions.length) * 100;
    scoreElement.innerText = `Skor Anda: ${calculatedScore.toFixed(2)} dari 100`;
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progress = (score / listeningQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${Math.round(progress)}%`;
}

function submitAnswer() {
    const userAnswer = document.getElementById('userInput').value.trim().toLowerCase();
    const correctAnswer = listeningQuestions[currentQuestionIndex].correctAnswer.toLowerCase();

    if (userAnswer === "") {
        Swal.fire({
            title: 'Warning',
            text: 'Jawaban tidak boleh kosong!',
            icon: 'warning',
            confirmButtonText: 'Oke'
        });
        return;
    }

    if (userAnswer === correctAnswer) {
        if (!answeredCorrectly[currentQuestionIndex]) {
            score++; // Tambah skor hanya jika belum dihitung sebelumnya
            answeredCorrectly[currentQuestionIndex] = true; // Tandai soal ini sebagai dijawab benar
        }
        Swal.fire({
            title: 'Success',
            text: 'Jawaban benar!',
            icon: 'success',
            confirmButtonText: 'Oke'
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Jawaban salah, coba lagi.',
            icon: 'error',
            confirmButtonText: 'Coba lagi'
        });
    }

    // Perbarui skor dan progress bar
    updateScore();
    updateProgressBar();
}

function loadQuestion(index) {
    const listeningContainer = document.getElementById('listeningContainer');
    const audioElement = document.createElement('audio');
    
    
    // Kosongkan kontainer dan input pengguna
    listeningContainer.innerHTML = ''; 
    audioElement.src = listeningQuestions[index].audio;
    audioElement.controls = true;
    audioElement.autoplay = true;
    listeningContainer.appendChild(audioElement);
    document.getElementById('userInput').value = '';

    // Perbarui penanda soal
    const questionIndicator = document.getElementById('questionIndicator');
    questionIndicator.innerText = `Soal ke-${index + 1} dari ${listeningQuestions.length}`;
}

function nextQuestion() {
    if (currentQuestionIndex < listeningQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('userInput').value.trim().toLowerCase();
    const correctAnswer = listeningQuestions[currentQuestionIndex].correctAnswer.toLowerCase();

    if (userAnswer === correctAnswer) {
        if (!answeredCorrectly[currentQuestionIndex]) {
            score++; // Tambah skor hanya jika belum dihitung sebelumnya
            answeredCorrectly[currentQuestionIndex] = true; // Tandai soal ini sebagai dijawab benar
        }
        Swal.fire({
            title: 'Success',
            text: 'Jawaban benar!',
            icon: 'success',
            confirmButtonText: 'Oke'
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Jawaban salah, coba lagi.',
            icon: 'error',
            confirmButtonText: 'Coba lagi'
        });
    }

    // Perbarui skor dan progress bar
    updateScore();
    updateProgressBar();
}


// Tampilkan soal pertama saat halaman dimuat
window.onload = function () {
    loadQuestion(currentQuestionIndex);
    updateScore();
    updateProgressBar();
};
