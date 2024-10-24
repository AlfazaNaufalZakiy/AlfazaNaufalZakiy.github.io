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

let currentQuestionIndex = 0;

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
}

// Tampilkan soal pertama saat halaman dimuat
window.onload = function() {
    loadQuestion(currentQuestionIndex);
};
