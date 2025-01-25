function announce(gender) {
    let message = document.getElementById('message');
    let congratsText = document.getElementById('congrats-text');

    if (gender === 'boy') {
        congratsText.innerHTML = "🎉 Congratulations! You have a baby boy, Arjun! 🎉";
    } else {
        congratsText.innerHTML = "🎉 Congratulations! You have a baby girl, Aashriya! 🎉";
    }

    message.classList.remove('hidden');
}
