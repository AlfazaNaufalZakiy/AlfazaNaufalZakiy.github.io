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
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Tampilkan pertanyaan pertama saat halaman dimuat
window.onload = function() {
    showQuestion();
};