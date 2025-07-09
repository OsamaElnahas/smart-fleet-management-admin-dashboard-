    let roll = document.getElementById("rolldice")
    let randomDice = 0
    let diceArray = ["./11.png", "./2.png", "./3.png", "./4.jpeg", "./5.png", "./6.jpeg"]
    let diceScore = document.getElementById("dice")
    let hold = document.getElementById("hold")
    let newgame = document.getElementById("newgame")
    let currentScore = 0
    let turn = 1
    let gamesNumber1 = 0;
    let gamesNumber2 = 0;
    let current = document.getElementById(`current_score${turn}`);
    let gamesWon = document.getElementById(`gamesWons${turn}`);
    let score = document.getElementById(`score${turn}`);
    let total = parseInt(score.textContent) || 0;
    let player1 = document.getElementById("player1")
    let player2 = document.getElementById("player2")
    let player1Name = document.getElementById("player1Name")
    let player2Name = document.getElementById("player2Name")
    let cnt = 1;

    // Add event listener for Player 1 name input

    player1Name.addEventListener("input", function() {
            player1.textContent = player1Name.value || "Player One";
            player1Name.style.backgroundColor = "white";
            player1Name.style.color = "black"
        })
        // Add event listener for Player 2 name input
    player2Name.addEventListener("input", function() {
        player2.textContent = player2Name.value || "Player Two";
        player2Name.style.backgroundColor = "white";
        player2Name.style.color = "black"
    })

    roll.addEventListener('click', function() {
        // Reset the winner 
        if (score.textContent.includes('WINNER')) {
            resetScores();
        }
        randomDice = Math.trunc(Math.random() * 6) + 1
        diceScore.src = "./OIP.jpeg"
        diceRotate();
        diceScore.src = diceArray[randomDice - 1]
        currentScore += randomDice;

        if (randomDice === 1) {
            currentScore = 0
            switchTurn();
        }
        current.textContent = `Current Score : ${currentScore}`;
        if (currentScore >= 40 || currentScore + total >= 40) {
            Winner();
        }

    });
    ///hold button
    hold.addEventListener("click", function() {
        // Reset the winner text
        if (score.textContent.includes('WINNER')) {
            resetScores();
        }

        total += currentScore
        score.textContent = total //update to total score
        if (total >= 40) {
            Winner();
        } else {
            switchTurn();
        }
    })
    newgame.addEventListener("click", function() {
        resetGame()
    })

    function switchTurn() {
        currentScore = 0;
        current.textContent = `Current Score : ${currentScore}`
        if (turn === 1) {
            turn = 2
        } else {
            turn = 1
        }
        current = document.getElementById(`current_score${turn}`)
        gamesWon = document.getElementById(`gamesWons${turn}`)
        score = document.getElementById(`score${turn}`)
        total = parseInt(score.textContent) || 0
        document.getElementById("player1").classList.toggle("active-player")
        document.getElementById("player2").classList.toggle("active-player");
    }

    function Winner() {

        score.textContent = `WINNER With Score : ${parseInt(score.textContent) + currentScore} !`;
        score.style.fontSize = "18px";
        score.style.color = "black";
        if (turn === 1) {
            gamesNumber1 += 1
            let gamesWon = document.getElementById(`gamesWons1`)
            gamesWon.textContent = `Games You Won : ${gamesNumber1}`

        } else if (turn === 2) {
            gamesNumber2 += 1
            let gamesWon = document.getElementById(`gamesWons2`)
            gamesWon.textContent = `Games You Won : ${gamesNumber2}`
        }
        switchTurn()
        currentScore = 0
        total = 0

    }

    function resetScores() {
        currentScore = 0;
        document.getElementById("current_score1").textContent = `Current Score : ${currentScore}`;
        document.getElementById("current_score2").textContent = `Current Score : ${currentScore}`;
        document.getElementById("score1").textContent = 0
        document.getElementById("score2").textContent = 0
        document.getElementById("score1").style.color = "white"
        document.getElementById("score2").style.color = "white"
        total = 0;
    }

    function resetGame() {
        gamesNumber = 0;
        // Reset scores and games won for both players
        document.getElementById("gamesWons1").textContent = `Games You Won : ${gamesNumber}`;
        document.getElementById("gamesWons2").textContent = `Games You Won : ${gamesNumber}`;
        resetScores();
        turn = 1;
        current = document.getElementById(`current_score${turn}`);
        gamesWon = document.getElementById(`gamesWons${turn}`);
        score = document.getElementById(`score${turn}`);
        document.getElementById("player1").classList.add("active-player");
        document.getElementById("player2").classList.remove("active-player");
        diceScore.src = "./dice_PNG135.png"
    }

    function diceRotate() {
        for (let i = 1; i <= 2; i++) {
            diceScore.style.transform = `rotate(${cnt*360}deg)`;
            diceScore.style.transition = `transform 1s ease`
            cnt += 1

        }


    }