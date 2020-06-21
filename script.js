function computerPlay() {
    // Tested, works as intended
    let randNum = Math.random();
    let returnNum = 0;

    if (randNum <= 0.33) {
        returnNum = 1;
    }
    else if ((randNum > 0.33) && (randNum <= 0.66)) {
        returnNum = 2;
    } else {
        returnNum = 3;
    }

    return returnNum;

    // 1 - Rock
    // 2 - Paper
    // 3 - Scissors
}

function playRound(user) {

    let AI = computerPlay();
    let AIWord = '';

    switch (AI) {
        case 1:
            AIWord = 'Rock';
            break;
        case 2:
            AIWord = 'Paper';
            break;
        case 3:
            AIWord = 'Scissors';
            break;
        default:
            AIWord = 'BIG ERROR FUCK';
            break;
    }

    // console.log(user + " " + AI);

    if ((user == 1) && (AI == 1)) {
        console.log('Computer\'s move: ' + AIWord);
        console.log('It\'s a tie!');
        compMove = AIWord;
        gameWinner = 'Tie!';
    }
    else if ((user == 1) && (AI == 2)) {
        console.log('Computer\'s move: ' + AIWord);
        console.log('Paper beats rock, you lose!');
        compMove = AIWord;
        gameWinner = 'Computer';
        compScore++;
    }
    else if ((user == 1) && (AI == 3)) {
        console.log('Computer\'s move: ' + AIWord);
        console.log('Rock beats scissors, you win!');
        compMove = AIWord;
        gameWinner = 'You win!';
        userScore++;
    }
    else if ((user == 2) && (AI == 1)) {
        console.log('Computer\'s move: ' + AIWord);
        console.log('Paper beats rock, you win!');
        compMove = AIWord;
        gameWinner = 'You win!';
        userScore++;
    }
    else if ((user == 2) && (AI == 2)) {
        console.log('Computer\'s move: ' + AIWord);
        console.log('It\'s a tie!');
        compMove = AIWord;
        gameWinner = 'Tie!';
    }
    else if ((user == 2) && (AI == 3)) {
        console.log('Computer\'s move: ' + AIWord);
        console.log('Scissors beats paper, you lose!');
        compMove = AIWord;
        gameWinner = 'Computer';
        compScore++;
    }
    else if ((user == 3) && (AI == 1)) {
        console.log('Computer\'s move: ' + AIWord);
        console.log('Rock beats paper, you lose!');
        compMove = AIWord;
        gameWinner = 'Computer';
        compScore++;
    }
    else if ((user == 3) && (AI == 2)) {
        console.log('Computer\'s move: ' + AIWord);
        console.log('Scissors beats paper, you win!');
        compMove = AIWord;
        gameWinner = 'You win!';
        userScore++;
    }
    else if ((user == 3) && (AI == 3)) {
        console.log('Computer\'s move: ' + AIWord);
        console.log('It\'s a tie!');
        compMove = AIWord;
        gameWinner = 'Tie!';
    }
    else {
        console.log('Computer\'s move: ' + AIWord);
        console.log('Fatal Error -- Self Destruct Imminent');
        compMove = AIWord;
        gameWinner = 'Error';
    }

    return;

}

function winnerDisplay() {
    let winboi = '';
    if (userScore > compScore) {
        winboi = 'You are the winner!';
    } else {
        winboi = 'Computer wins! The AI overlords shall prevail!';
    }
    alert(winboi);
    gameReset();
}

function gameReset() {
    playCount = 0;
    userScore = 0;
    compScore = 0;
    gameWinner = '';
    compMove = '';
    document.getElementById("user-score").innerHTML = `User: ${userScore}`;
    document.getElementById("comp-score").innerHTML = `Computer: ${compScore}`;
    document.getElementById("score").innerHTML = `Play count: ${playCount}`;
    document.getElementById("computer-play").innerHTML = `Computer played: ${compMove}`;
    document.getElementById("winner").innerHTML = `Winner: ${gameWinner}`;
}




let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let playCount = 0;
let userScore = 0;
let compScore = 0;
let compMove = '';
let gameWinner = '';

// User selects rock button

rock.addEventListener('click', function (e) {
    if ((userScore >= 5) || (compScore >= 5)) {
        winnerDisplay();
    } else {
        playRound(1);
        playCount++;
        document.getElementById("score").innerHTML = `Play count: ${playCount}`;
        document.getElementById("computer-play").innerHTML = `Computer played: ${compMove}`;
        document.getElementById("winner").innerHTML = `Winner: ${gameWinner}`;
        document.getElementById("user-score").innerHTML = `User: ${userScore}`;
        document.getElementById("comp-score").innerHTML = `Computer: ${compScore}`;
    }
});

// User selects paper
paper.addEventListener('click', function (e) {
    if ((userScore >= 5) || (compScore >= 5)) {
        winnerDisplay();
    } else {
        playRound(2);
        playCount++;
        document.getElementById("score").innerHTML = `Play count: ${playCount}`;
        document.getElementById("computer-play").innerHTML = `Computer played: ${compMove}`;
        document.getElementById("winner").innerHTML = `Winner: ${gameWinner}`;
        document.getElementById("user-score").innerHTML = `User: ${userScore}`;
        document.getElementById("comp-score").innerHTML = `Computer: ${compScore}`;
    }
});

// User selects scissors
scissors.addEventListener('click', function (e) {
    if ((userScore >= 5) || (compScore >= 5)) {
        winnerDisplay();
    } else {
        playRound(3);
        playCount++;
        document.getElementById("score").innerHTML = `Play count: ${playCount}`;
        document.getElementById("computer-play").innerHTML = `Computer played: ${compMove}`;
        document.getElementById("winner").innerHTML = `Winner: ${gameWinner}`;
        document.getElementById("user-score").innerHTML = `User: ${userScore}`;
        document.getElementById("comp-score").innerHTML = `Computer: ${compScore}`;
    }
});


