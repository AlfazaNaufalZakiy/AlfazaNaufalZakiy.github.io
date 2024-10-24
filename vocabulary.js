const vocabularies = [
    {
        word: "Apple",
        meaning: "Apel",
        image: "assets/images/apple.png",
        audio: "assets/audio/apple.ogg"
    },
    {
        word: "Chair",
        meaning: "Kursi",
        image: "assets/images/chair.png",
        audio: "assets/audio/chair.ogg"
    },
    {
        word: "Meja",
        meaning: "Table",
        image: "assets/images/table.png",
        audio: "assets/audio/table.ogg"
    },
    {
        word: "Laptop",
        meaning: "Laptop",
        image: "assets/images/laptop.png",
        audio: "assets/audio/laptop.ogg"
    },
    {
        word: "Dog",
        meaning: "Anjing",
        image: "assets/images/dog.png",
        audio: "assets/audio/dog.ogg"
    },
];

let currentVocabularyIndex = 0;

function loadVocabulary(index) {
    const container = document.getElementById('vocabularyContainer');
    const vocabulary = vocabularies[index];

    container.innerHTML = `
        <img src="${vocabulary.image}" alt="${vocabulary.word}">
        <p>Kata: ${vocabulary.word}</p>
        <p>Arti: ${vocabulary.meaning}</p>
        <button onclick="playPronunciation('${vocabulary.audio}')">Dengar Pengucapan</button>
    `;

    // Perbarui penanda soal
    const questionIndicator = document.getElementById('questionIndicator');
    questionIndicator.innerText = `Kosakata ke-${index + 1} dari ${vocabularies.length}`;
}

function nextVocabulary() {
    if (currentVocabularyIndex < vocabularies.length - 1) {
        currentVocabularyIndex++;
        loadVocabulary(currentVocabularyIndex);
    }
}

function previousVocabulary() {
    if (currentVocabularyIndex > 0) {
        currentVocabularyIndex--;
        loadVocabulary(currentVocabularyIndex);
    }
}

function playPronunciation(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
}

// Tampilkan soal pertama saat halaman dimuat
window.onload = function() {
    loadVocabulary(currentVocabularyIndex);
};
