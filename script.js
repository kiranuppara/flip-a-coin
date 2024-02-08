function flipCoin() {
    const coin = document.getElementById('coin');
    const outcome = Math.random() < 0.5 ? 'heads' : 'tails';

    coin.style.transform = 'rotateY(1800deg)'; // Rotate the coin

    setTimeout(() => {
        coin.innerHTML = ''; // Clear the content
        coin.classList.remove('heads', 'tails');
        coin.style.transform = 'rotateY(0deg)'; // Reset rotation
        void coin.offsetWidth; // Trigger reflow to restart the animation

        // Add the new image after the flip
        const newImage = document.createElement('img');
        newImage.src = outcome === 'heads' ? 'images/head.png' : 'images/tail.png';
        newImage.alt = outcome.charAt(0).toUpperCase() + outcome.slice(1); // Capitalize first letter
        newImage.classList.add('side', `side-${outcome}`);

        coin.appendChild(newImage);
    }, 1000); // Adjust the duration to match the CSS animation duration
}

function checkGuess() {
    const coin = document.getElementById('coin');
    const guess = document.getElementById('guess').value;

    // Check if a guess has been made
    if (!guess) {
        alert('Please make a guess before checking.');
        return;
    }

    // Remove the previous visibility classes from both sides
    coin.querySelector('.side-heads').classList.remove('side-visible');
    coin.querySelector('.side-tails').classList.remove('side-visible');

    coin.querySelector('.side-heads').classList.add('side-hidden');
    coin.querySelector('.side-tails').classList.add('side-hidden');

    if (coin.classList.contains(`side-${guess}`)) {
        // If the guess is correct, update the visible side
        coin.querySelector(`.side-${guess}`).classList.remove('side-hidden');
        coin.querySelector(`.side-${guess}`).classList.add('side-visible');

        alert('Your guess is correct!');
    } else {
        alert('Sorry, your guess is incorrect. Try again!');
    }
}