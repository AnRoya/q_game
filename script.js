document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        "את מי את יותר אוהבת מרוי?",
        "אם היית זוכה במיליון דולר, היית נותנת אותם לרוי?",
        "האם את מוכנה לעבור לרג בשביל רוי?",
        "האם יש משחק מוצלח יותר ממה שרוי עשה פה?"
    ];

    const questionButton = document.getElementById('question-button');
    const questionCard = document.getElementById('question-card');
    const questionText = document.getElementById('question');

    questionButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        questionText.textContent = questions[randomIndex];
    });
});
