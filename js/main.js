function loadSection(sectionId) {

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

document.getElementById('vocabularyBtn').addEventListener('click', function() {
    loadSection('vocabularySection');
});

document.getElementById('quizBtn').addEventListener('click', function() {
    loadSection('quizSection');
});

document.getElementById('sentenceBtn').addEventListener('click', function() {
    loadSection('sentenceSection');
});

document.getElementById('listeningBtn').addEventListener('click', function() {
    loadSection('listeningSection');
});

window.onload = function() {
    loadSection('vocabularySection');
};
