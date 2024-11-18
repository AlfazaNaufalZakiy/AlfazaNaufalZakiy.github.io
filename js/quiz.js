const questions = [
    {
        question: "Apa bahasa Inggris dari 'meja'?",
        options: ["Chair", "Table", "Bed", "Door"],
        answer: 1
    },
    {
        question: "Apa bahasa Inggris dari 'buku'?",
        options: ["Paper", "Pen", "Book", "Notebook"],
        answer: 2
    },
    {
        question: "Apa bahasa Inggris dari 'sekolah'?",
        options: ["School", "Student", "Teacher", "Class"],
        answer: 0
    },
    {
        question: "Apa bahasa Inggris dari 'mobil'?",
        options: ["Bicycle", "Car", "Bus", "Train"],
        answer: 1
    },
    {
        question: "Apa bahasa Inggris dari 'rumah'?",
        options: ["Apartment", "Building", "Home", "Office"],
        answer: 2
    },
    {
        question: "Apa bahasa Inggris dari 'pintu'?",
        options: ["Window", "Door", "Roof", "Floor"],
        answer: 1
    },
    {
        question: "Apa bahasa Inggris dari 'apel'?",
        options: ["Banana", "Orange", "Grape", "Apple"],
        answer: 3
    },
    {
        question: "Apa bahasa Inggris dari 'guru'?",
        options: ["Doctor", "Teacher", "Student", "Lawyer"],
        answer: 1
    },
    {
        question: "Apa bahasa Inggris dari 'teman'?",
        options: ["Enemy", "Friend", "Family", "Neighbor"],
        answer: 1
    },
    {
        question: "Apa bahasa Inggris dari 'air'?",
        options: ["Fire", "Water", "Earth", "Wind"],
        answer: 1
    },
    {
        question: "Apa bahasa Inggris dari 'anjing'?",
        options: ["Cat", "Bird", "Dog", "Fish"],
        answer: 2
    },
    {
        question: "Apa bahasa Inggris dari 'kursi'?",
        options: ["Chair", "Table", "Couch", "Desk"],
        answer: 0
    },
    {
        question: "Apa bahasa Inggris dari 'langit'?",
        options: ["Cloud", "Sky", "Sun", "Moon"],
        answer: 1
    },
    {
        question: "Apa bahasa Inggris dari 'kucing'?",
        options: ["Dog", "Lion", "Cat", "Tiger"],
        answer: 2
    },
    {
        question: "Apa bahasa Inggris dari 'toko'?",
        options: ["Office", "Store", "Market", "Restaurant"],
        answer: 1
    },
    {
        question: "Apa bahasa Inggris dari 'kamar'?",
        options: ["Room", "Hall", "Garden", "Kitchen"],
        answer: 0
    },
    {
        question: "Apa bahasa Inggris dari 'roti'?",
        options: ["Rice", "Cake", "Bread", "Cookie"],
        answer: 2
    },
    {
        question: "Apa bahasa Inggris dari 'dapur'?",
        options: ["Bathroom", "Kitchen", "Bedroom", "Living room"],
        answer: 1
    },
    {
        question: "Apa bahasa Inggris dari 'laptop'?",
        options: ["Computer", "Tablet", "Laptop", "Monitor"],
        answer: 2
    },
    {
        question: "Apa bahasa Inggris dari 'matahari'?",
        options: ["Moon", "Sun", "Star", "Planet"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let selectedOption = null; // Menyimpan jawaban yang dipilih
let score = 0; // Skor pengguna
let answeredCorrectly = Array(questions.length).fill(false); // Menyimpan status apakah soal dijawab dengan benar

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const calculatedScore = (score / questions.length) * 100; // Hitung progress berdasarkan skor
    progressBar.style.width = `${calculatedScore}%`;
    progressBar.textContent = `${Math.round(calculatedScore)}%`; // Tampilkan angka progress
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionElements = document.getElementsByClassName('option');
    
    // Menampilkan pertanyaan
    questionElement.innerText = questions[currentQuestionIndex].question;
    
    // Menampilkan pilihan jawaban
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].innerText = questions[currentQuestionIndex].options[i];
        optionElements[i].style.backgroundColor = ""; // Reset warna tombol
    }

    // Perbarui penanda soal
    const questionIndicator = document.getElementById('questionIndicator');
    questionIndicator.innerText = `Soal ke-${currentQuestionIndex + 1} dari ${questions.length}`;

    selectedOption = null; // Reset pilihan yang dipilih

    // Update progress bar
    updateProgressBar();
}

function selectOption(optionIndex) {
    selectedOption = optionIndex; // Simpan jawaban yang dipilih
    const optionElements = document.getElementsByClassName('option');

    // Menyoroti opsi yang dipilih
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].style.backgroundColor = i === optionIndex ? "lightblue" : "";
    }
}

function submitAnswer() {
    if (selectedOption === null) {
        Swal.fire({
            icon: 'warning',
            title: 'Pilih jawaban!',
            text: 'Anda harus memilih jawaban terlebih dahulu.'
        });
        return;
    }

    const correctAnswer = questions[currentQuestionIndex].answer;

    // Periksa apakah jawaban benar atau salah menggunakan SweetAlert
    if (selectedOption === correctAnswer) {
        if (!answeredCorrectly[currentQuestionIndex]) {
            score++; // Tambah skor hanya jika belum dihitung
            answeredCorrectly[currentQuestionIndex] = true; // Tandai sebagai sudah dijawab dengan benar
        }
        Swal.fire({
            icon: 'success',
            title: 'Benar!',
            text: 'Jawaban Anda benar.'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Salah!',
            text: 'Jawaban Anda salah.'
        });
    }

    // Perbarui skor real-time
    updateScore();
    updateProgressBar(); // Perbarui progress bar
}

function updateScore() {
    const resultMessage = document.getElementById('resultMessage');
    const calculatedScore = (score / questions.length) * 100; // Hitung skor dalam rentang 0-100
    resultMessage.innerText = `Skor Anda: ${calculatedScore.toFixed(2)} dari 100`;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
    updateProgressBar();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
    updateProgressBar();
}

// Tampilkan pertanyaan pertama saat halaman dimuat
window.onload = function() {
    showQuestion();
    updateScore(); // Tampilkan skor awal
    updateProgressBar()
};
