    // let roll = document.getElementById("rolldice");
    // let hold = document.getElementById("hold");
    // let newgame = document.getElementById("newgame")
    // let currentScore = 0
    // let turn = 1
    // let gamesNumber = 0;
    // let current = document.getElementById(`current_score${turn}`)
    // let gamesWon = document.getElementById(`gamesWons${turn}`)
    // let score = document.getElementById(`score${turn}`)
    // let total = parseInt(score.textContent) || 0;

    // roll.addEventListener('click', function() {
    //     let randomDice = Math.trunc(Math.random() * 6)
    //     let diceScore = document.getElementById("dice")
    //     let diceArray = ["./1.png", "./2.png", "./3.png", "./4.jpeg", "./5.png", "./6.jpeg"]
    //     diceScore.src = diceArray[randomDice]
    //     currentScore += randomDice + 1;

    //     if (randomDice === 0) {
    //         currentScore = 0;
    //         if (turn === 1) {
    //             turn = 2
    //             document.getElementById("player1").classList.toggle("active-player");
    //             document.getElementById("player2").classList.toggle("active-player");
    //             // currentScore += randomDice + 1;
    //             current = document.getElementById(`current_score${turn}`);
    //             gamesWon = document.getElementById(`gamesWons${turn}`);
    //             score = document.getElementById(`score${turn}`);


    //         } else if (turn === 2) {
    //             turn = 1
    //             document.getElementById("player1").classList.toggle("active-player");
    //             document.getElementById("player2").classList.toggle("active-player");
    //             // currentScore += randomDice + 1;
    //             current = document.getElementById(`current_score${turn}`);
    //             gamesWon = document.getElementById(`gamesWons${turn}`);
    //             score = document.getElementById(`score${turn}`);

    //         }
    //     }

    //     current.textContent = `Current Score : ${currentScore}`;

    //     if (currentScore >= 20 || currentScore + parseInt(score.textContent) >= 20) {
    //         score.textContent = `WINNER With Score : ${parseInt(score.textContent) + currentScore} !`;
    //         score.style.fontSize = "18px";
    //         score.style.color = "black";
    //         gamesNumber += 1;
    //         gamesWon.textContent = `Games You Won : ${gamesNumber}`;
    //         total = 0
    //         currentScore = 0;
    //     }
    //     score.textContent = total + currentScore;
    // });

    // hold.addEventListener("click", function() {

    //     score.textContent = total + currentScore;

    //     if (parseInt(score.textContent) >= 20) {
    //         score.textContent = `WINNER With Score : ${score.textContent} !`;
    //         score.style.fontSize = "18px";
    //         score.style.color = "black";
    //         gamesNumber += 1;
    //         gamesWon.textContent = `Games You Won : ${gamesNumber}`;
    //         currentScore = 0;
    //     }

    //     score.style.fontSize = "24px";
    //     score.style.color = "white";
    //     currentScore = 0;
    //     current.textContent = `Current Score : ${currentScore}`;
    //     if (turn === 1) {
    //         turn = 2
    //     } else if (turn === 2) {
    //         turn = 1
    //     }
    //     current = document.getElementById(`current_score${turn}`);
    //     gamesWon = document.getElementById(`gamesWons${turn}`);
    //     score = document.getElementById(`score${turn}`);

    //     document.getElementById("player1").classList.toggle("active-player");
    //     document.getElementById("player2").classList.toggle("active-player");
    // });

    // newgame.addEventListener("click", function() {
    //     gamesNumber = 0;

    //     // Reset scores and games won for both players
    //     document.getElementById("gamesWons1").textContent = `Games You Won : ${gamesNumber}`;
    //     document.getElementById("gamesWons2").textContent = `Games You Won : ${gamesNumber}`;
    //     document.getElementById("score1").textContent = 0
    //     document.getElementById("score2").textContent = 0
    //     currentScore = 0
    //     document.getElementById("current_score1").textContent = `Current Score : ${currentScore}`
    //     document.getElementById("current_score2").textContent = `Current Score : ${currentScore}`
    //     document.getElementById("score1").style.color = "white";
    //     document.getElementById("score2").style.color = "white";
    //     turn = 1;
    //     current = document.getElementById(`current_score${turn}`);
    //     gamesWon = document.getElementById(`gamesWons${turn}`);
    //     score = document.getElementById(`score${turn}`);
    //     document.getElementById("player1").classList.add("active-player");
    //     document.getElementById("player2").classList.remove("active-player");
    // });
    let roll = document.getElementById("rolldice")
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
    let diceScore = document.getElementById("dice")
    roll.addEventListener('click', function() {
        // Reset the winner 
        if (score.textContent.includes('WINNER')) {
            resetScores();
        }
        diceRotate();
        let randomDice = Math.trunc(Math.random() * 6) + 1
        let diceArray = ["./11.png", "./2.png", "./3.png", "./4.jpeg", "./5.png", "./6.jpeg"]
        diceScore.src = diceArray[randomDice - 1]
        currentScore += randomDice;

        if (randomDice === 1) {
            currentScore = 0
            switchTurn();
        }
        current.textContent = `Current Score : ${currentScore}`;
        if (currentScore >= 20 || currentScore + total >= 20) {
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
        score.textContent = total //update
        if (total >= 20) {
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

        } else {
            gamesNumber2 += 1
            let gamesWon = document.getElementById(`gamesWons2`)
            gamesWon.textContent = `Games You Won : ${gamesNumber2}`
        }

        // let gamesWon = document.getElementById(`gamesWons${turn}`)
        // gamesWon.textContent = `Games You Won : ${gamesNumber}`
        switchTurn()
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
        let rotateAngle = [-1440, 720, 1440, -720]
        let randomAngle = Math.trunc(Math.random() * 4)
        diceScore.style.transform = `rotate(${rotateAngle[randomAngle]}deg)`;
        diceScore.style.transition = `transform 1s ease`

    }