const sentences = [
    { words: ["I", "eat", "apple"], correctSentence: "I eat apple" },
    { words: ["She", "plays", "guitar"], correctSentence: "She plays guitar" },
    { words: ["They", "are", "students"], correctSentence: "They are students" },
    { words: ["We", "watch", "movies"], correctSentence: "We watch movies" },
    { words: ["The", "sun", "shines"], correctSentence: "The sun shines" },
    { words: ["He", "drinks", "water"], correctSentence: "He drinks water" },
    { words: ["She", "reads", "a", "book"], correctSentence: "She reads a book" },
    { words: ["They", "play", "football"], correctSentence: "They play football" },
    { words: ["I", "write", "a", "letter"], correctSentence: "I write a letter" },
    { words: ["We", "go", "to", "school"], correctSentence: "We go to school" },
    { words: ["He", "likes", "to", "swim"], correctSentence: "He likes to swim" },
    { words: ["The", "dog", "runs", "fast"], correctSentence: "The dog runs fast" },
    { words: ["Birds", "fly", "in", "the", "sky"], correctSentence: "Birds fly in the sky" },
    { words: ["She", "cooks", "dinner"], correctSentence: "She cooks dinner" },
    { words: ["I", "am", "happy"], correctSentence: "I am happy" },
    { words: ["He", "is", "a", "teacher"], correctSentence: "He is a teacher" },
    { words: ["The", "cat", "sleeps"], correctSentence: "The cat sleeps" },
    { words: ["They", "live", "in", "Paris"], correctSentence: "They live in Paris" },
    { words: ["She", "paints", "a", "picture"], correctSentence: "She paints a picture" },
    { words: ["The", "children", "play", "outside"], correctSentence: "The children play outside" }
];

let currentSentenceIndex = 0;

// Fungsi untuk mengacak urutan array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Fungsi untuk memuat soal dan mengacak kata-kata
function loadSentence(index) {
    const sentence = sentences[index];
    const sentenceContainer = document.getElementById('sentenceContainer');
    const dropZone = document.getElementById('dropZone');

    sentenceContainer.innerHTML = ''; // Kosongkan kontainer kata
    dropZone.innerHTML = ''; // Kosongkan drop zone

    const shuffledWords = [...sentence.words]; // Salin array kata
    shuffle(shuffledWords); // Acak urutan kata

    // Tampilkan kata-kata yang sudah diacak
    shuffledWords.forEach((word, idx) => {
        const wordElement = document.createElement('span');
        wordElement.innerText = word;
        wordElement.id = `word${idx}`;
        wordElement.draggable = true;
        wordElement.style.marginRight = "10px"; // Menambahkan jarak antar kata
        wordElement.ondragstart = drag;
        sentenceContainer.appendChild(wordElement);
    });

    // Perbarui penanda soal
    const questionIndicator = document.getElementById('questionIndicator');
    questionIndicator.innerText = `Soal ke-${index + 1} dari ${sentences.length}`;
}

// Fungsi untuk memeriksa apakah susunan kalimat sudah benar
function checkSentence() {
    const dropZone = document.getElementById('dropZone');
    const userSentence = Array.from(dropZone.children)
        .map(word => word.innerText)
        .join(' ')
        .trim();

    // Cek apakah susunan benar atau salah menggunakan SweetAlert
    if (userSentence === sentences[currentSentenceIndex].correctSentence) {
        Swal.fire({
            title: 'Benar!',
            text: 'Susunan Anda benar.',
            icon: 'success',
            confirmButtonText: 'Lanjut'
        });
    } else {
        Swal.fire({
            title: 'Salah!',
            text: 'Susunan Anda salah, coba lagi.',
            icon: 'error',
            confirmButtonText: 'Coba lagi'
        });
    }
}

// Fungsi untuk navigasi ke soal berikutnya
function nextSentence() {
    if (currentSentenceIndex < sentences.length - 1) {
        currentSentenceIndex++;
        loadSentence(currentSentenceIndex);
    }
}

// Fungsi untuk navigasi ke soal sebelumnya
function previousSentence() {
    if (currentSentenceIndex > 0) {
        currentSentenceIndex--;
        loadSentence(currentSentenceIndex);
    }
}

// Fungsi drag and drop
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const wordElement = document.getElementById(data);
    event.target.appendChild(wordElement);
}

// Tampilkan soal pertama saat halaman dimuat
window.onload = function() {
    loadSentence(currentSentenceIndex);
};