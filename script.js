document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        "What is your favorite color?",
        "What is your dream job?",
        "If you could travel anywhere, where would you go?",
        "What is your favorite book?",
        "What is your favorite movie?",
        "If you could have dinner with anyone, living or dead, who would it be?",
        "What is your biggest fear?",
        "What is one thing you can't live without?",
        "What is your favorite hobby?",
        "If you won the lottery, what would you do?",
        "שאלה בעברית 1",
        "שאלה בעברית 1",
        "שאלה בעברית 1",
        "שאלה בעברית 1",
        "שאלה בעברית 1"
    ];

    const questionButton = document.getElementById('question-button');
    const questionCard = document.getElementById('question-card');
    const questionText = document.getElementById('question');

    questionButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        questionText.textContent = questions[randomIndex];
    });
});
