// Set the date we're counting down to (you can change this date)
const countdownDate = new Date("September 22, 2023 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function () {
    const currentDate = new Date().getTime();
    const timeLeft = countdownDate - currentDate;

    // Calculate the days, hours, minutes, and seconds left
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown in the specified div
    const countdownElement = document.getElementById("clock");
    countdownElement.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "00:00:00";
    }
}, 1000);