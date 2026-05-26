let number = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

let maxAttempts = 6;

function checkGuess(){

    let guess = Number(
        document.getElementById("guessInput").value
    );

    if(!guess){

        document.getElementById("message").innerText =
        "❗ Enter a valid number";

        return;
    }

    attempts++;

    document.getElementById("attempts").innerText =
    attempts;

    // 🏆 WIN
    if(guess === number){

        document.getElementById("winScreen")
        .style.display = "flex";
    }

    // 📉 TOO HIGH
    else if(guess > number){

        document.getElementById("message").innerText =
        "📉 Too High!";
    }

    // 📈 TOO LOW
    else{

        document.getElementById("message").innerText =
        "📈 Too Low!";
    }

    // 💀 LOSE
    if(attempts >= maxAttempts &&
       guess !== number){

        document.getElementById("correctNumber")
        .innerText = number;

        document.getElementById("loseScreen")
        .style.display = "flex";
    }
}

function resetGame(){

    number =
    Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    document.getElementById("attempts")
    .innerText = 0;

    document.getElementById("guessInput")
    .value = "";

    document.getElementById("message")
    .innerText = "💡 Start Guessing...";

    // hide screens
    document.getElementById("winScreen")
    .style.display = "none";

    document.getElementById("loseScreen")
    .style.display = "none";
}