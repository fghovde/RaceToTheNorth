var player1 = { id: 1,
                name: localStorage.player1name,
                total: 0,
                token: localStorage.player1token};
var player2 = { id: 2,
                name: localStorage.player2name,
                total: 0,
                token: localStorage.player2token};

var players = [player1, player2];
var currentPlayer = players[0];
var gameFields = 30;
var playBtn = document.getElementById('playBtn');
    playBtn.addEventListener('click', rollDice);
    playBtn.disabled = false;

function rollDice() {
    var dice = document.getElementById('diceDisplay');
    var bonus = document.getElementById('bonusDisplay');
    var diceRes = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = '+' + diceRes;
    dice.classList.toggle('fade');
    playBtn.disabled = true;
    if (playBtn.disabled = true) {
        var playBtnDelay = 1500;
            setTimeout(function () {
                playBtn.disabled = false;
            }, playBtnDelay);
    }
    if (dice.classList.contains('fade')) {
        var fadeDelay = 1500;
            setTimeout(function () {
                dice.classList.remove('fade');
            }, fadeDelay);
    }
    currentPlayer.total += diceRes;
    currentStats();
    traps();
    if (diceRes === 6) {
        playBtn.disabled = false;
        if (currentPlayer.total <= gameFields) {
            moveToken();
            bonus.classList.toggle('fade');
            if (bonus.classList.contains('fade')) {
                var fadeDelay = 1500;
                setTimeout(function () {
                bonus.classList.remove('fade');
                }, fadeDelay);
            }
        if (currentPlayer.total === gameFields) {
            moveToken();
        }
            bonus.innerHTML = ('<img id="modalIcon" src="gfx/icons/dice_gold.png" width="100%" height="100%" class="bonusDice">' + currentPlayer.name + '<br> got a bonus turn!');
        }
    } else {
        turnEnd();
    }
}

// Change current player
function changePlayer() {
    var playersTurn = document.getElementById('playersTurn');
    console.log(player1.name + ' is on field ' + player1.total + '. ' + player2.name + ' is on field ' + player2.total);
    if (currentPlayer === players[0]) {
        currentPlayer = players[1];
        playersTurn.innerHTML = '<strong>' + currentPlayer.name + '</strong>, <br>it\'s your turn! ';
        return;
    }
    if (currentPlayer === players[1]) {
        currentPlayer = players[0];
        playersTurn.innerHTML = '<strong>' + currentPlayer.name + '</strong>, <br>it\'s your turn! ';
        return;
    }
}

// Current token positions - for SR (screen readers), accessability option
function currentStats() {
    console.log(currentPlayer.name + ' moves to ' + currentPlayer.total);
}

// Modals
var modal = document.getElementById('modal');

var modalClose = document.getElementsByClassName('modalClose')[0];
    modalClose.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


// Traps
function traps() {
    var modalIcon = document.getElementById('modalIcon');
    var modalHeading = document.getElementById('modalHeading');
    var modalText = document.getElementById('modalText');
    if (currentPlayer.total === 4) {
        currentPlayer.total = 2;
        modalIcon.setAttribute('src', 'gfx/icons/shield.png');
        modalHeading.innerHTML = 'Blocked';
        modalText.innerHTML = '<strong>' + currentPlayer.name + '</strong> got blocked at Honeyholt and is moved back to <strong>' + currentPlayer.total + '</strong>';
        modal.style.display = 'block';
    }
    if (currentPlayer.total === 7) {
        currentPlayer.total = 3;
        modalIcon.setAttribute('src', 'gfx/icons/tower.png');
        modalHeading.innerHTML = 'Tower';
        modalText.innerHTML = '<strong>' + currentPlayer.name + '</strong> got spotted by a watchpost at Summerhall and is moved to <strong>' + currentPlayer.total + '</strong>';
        modal.style.display = 'block';
        console.log(currentPlayer.name + ' got trapped and is moved back to ' + currentPlayer.total);
    }
    if (currentPlayer.total === 14) {
        currentPlayer.total = 11;
        modalIcon.setAttribute('src', 'gfx/icons/swords.png');
        modalHeading.innerHTML = 'Battle';
        modalText.innerHTML = '<strong>' + currentPlayer.name + '</strong> lost a battle at Riverrun and is moved to <strong>' + currentPlayer.total + '</strong>';
        modal.style.display = 'block';
        console.log(currentPlayer.name + ' got trapped and is moved back to ' + currentPlayer.total);
    }
    if (currentPlayer.total === 24) {
        currentPlayer.total = 18;
        modalIcon.setAttribute('src', 'gfx/icons/club.png');
        modalHeading.innerHTML = 'Clubbed';
        modalText.innerHTML = '<strong>' + currentPlayer.name + '</strong> got knocked down at Torrhens Square and is moved to <strong>' + currentPlayer.total + '</strong>';
        modal.style.display = 'block';
        console.log(currentPlayer.name + ' got trapped and is moved back to ' + currentPlayer.total);
    }
    if (currentPlayer.total === 27) {
        currentPlayer.total = 23;
        modalIcon.setAttribute('src', 'gfx/icons/arrows.png');
        modalHeading.innerHTML = 'Ambush';
        modalText.innerHTML = '<strong>' + currentPlayer.name + '</strong> got ambushed at Kingsroad and is moved to <strong>' + currentPlayer.total + '</strong>';        
        modal.style.display = 'block';
        console.log(currentPlayer.name + ' got trapped and is moved back to ' + currentPlayer.total);
    }
}

// Move tokens
function moveToken() {
    var token = document.getElementById('token_' + currentPlayer.id);
    var x = currentPlayer.total;
    var tokenPos;
    switch (x) {
        case 0:
            tokenPos = 'translate(0, 0)';
            break;
        case 1:
            tokenPos = 'translate(-102, 0)';
            break;
        case 2:
            tokenPos = 'translate(-164, -5)';
            break;
        case 3:
            tokenPos = 'translate(-224, -30)';
            break;
        case 4:
            tokenPos = 'translate(-164, -5)'; // TRAP - Back to 2
            break;
        case 5:
            tokenPos = 'translate(-239, -108)';
            break;
        case 6:
            tokenPos = 'translate(-173, -117)';
            break;
        case 7:
            tokenPos = 'translate(-224, -30)'; // TRAP - Back to 3
            break;
        case 8:
            tokenPos = 'translate(-48, -159)';
            break;
        case 9:
            tokenPos = 'translate(-79, -210)';
            break;
        case 10:
            tokenPos = 'translate(-148, -203)';
            break;
        case 11:
            tokenPos = 'translate(-214, -218)';
            break;
        case 12:
            tokenPos = 'translate(-291, -224)';
            break;
        case 13:
            tokenPos = 'translate(-276, -281)';
            break;
        case 14:
            tokenPos = 'translate(-214, -218)'; // TRAP - Back to 11
            break;
        case 15:
            tokenPos = 'translate(-111, -294)';
            break;
        case 16:
            tokenPos = 'translate(-68, -324)';
            break;
        case 17:
            tokenPos = 'translate(-113, -356)';
            break;
        case 18:
            tokenPos = 'translate(-179, -367)';
            break;
        case 19:
            tokenPos = 'translate(-163, -426)';
            break;
        case 20:
            tokenPos = 'translate(-120, -467)';
            break;
        case 21:
            tokenPos = 'translate(-52, -491)';
            break;
        case 22:
            tokenPos = 'translate(-89, -522)';
            break;
        case 23:
            tokenPos = 'translate(-149, -532)';
            break;
        case 24:
            tokenPos = 'translate(-179, -367)'; // TRAP - Back to 18
            break;
        case 25:
            tokenPos = 'translate(-227, -562)';
            break;
        case 26:
            tokenPos = 'translate(-179, -586)';
            break;
        case 27:
            tokenPos = 'translate(-149, -532)'; // TRAP - Back to 23
            break;
        case 28:
            tokenPos = 'translate(-101, -672)';
            break;
        case 29:
            tokenPos = 'translate(-172, -694)';
            break;
        case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45:
            tokenPos = 'translate(-250, -682)';
            break;
        default:
            tokenPos = 'translate(0, 0)'; // ERROR
    }
    token.removeAttribute('transform');
    token.setAttribute('transform', tokenPos);
}

// Turn end
function turnEnd() {
    if (currentPlayer.total >= gameFields) {
        moveToken();
        window.localStorage.removeItem('player1');
        window.localStorage.removeItem('player2');
        window.localStorage.setItem('winnerName', currentPlayer.name);
        window.localStorage.setItem('winnerToken', currentPlayer.token);
        console.log(currentPlayer.name + ' won the game!');
        currentPlayer.total = gameFields;
        window.location.replace('win.html');
    } else {
        moveToken();
        changePlayer();
    }
}

// Get the players on the map
function gameStart() {
    playersTurn.innerHTML = '<strong>' + currentPlayer.name + ',</strong><br>roll the dice! ';
    document.getElementById('token_1').setAttribute('href', player1.token);
    document.getElementById('token_2').setAttribute('href', player2.token);
}

gameStart();
