let gameState = true;
let playerCounter = 0;
const winStates = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function move (id) {
    if (gameState) {
        if (document.getElementById(id).innerText == 'x' || document.getElementById(id).innerText == 'o') {
            alert('You can only place on empty spots')
        } else if (playerCounter%2 === 0) {
            document.getElementById(id).innerText = 'x';
            check();
        } else {
            document.getElementById(id).innerText = 'o';
            check();
        }
    }
}

function check () {
    playerCounter++;
    turnCheck();

    for (let loop = 0; loop < 8; loop++) {
        if (document.getElementById(winStates[loop][0]).innerText === 'x' && document.getElementById(winStates[loop][1]).innerText === 'x' && document.getElementById(winStates[loop][2]).innerText === 'x')  {
            gameState = false;
            document.getElementById('meta').innerText = 'Winner is player x';
            let x = parseInt(document.getElementById('X').innerText.slice(document.getElementById('X').innerText.length-1)) + 1;
            document.getElementById('X').innerText = 'Score of player X = ' + x;
            break;
        } 

        if (document.getElementById(winStates[loop][0]).innerText === 'o' && document.getElementById(winStates[loop][1]).innerText === 'o' && document.getElementById(winStates[loop][2]).innerText === 'o')  {
            gameState = false;
            document.getElementById('meta').innerText = 'Winner is player o';
            let o = parseInt(document.getElementById('O').innerText.slice(document.getElementById('O').innerText.length-1)) + 1;
            document.getElementById('O').innerText = 'Score of player O = ' + o;
            break;
        }
    }

    if (playerCounter === 9 && gameState) {
        gameState = false;
        document.getElementById('meta').innerText = 'The game is Tied';
    }
}

function refresh() {
    gameState = true;
    playerCounter = 0;
    turnCheck();
    for (let loop = 1; loop < 10; loop++) {
        document.getElementById(loop).innerText = '-';
    }
}

function turnCheck() {
    if (playerCounter%2 === 0) {
        document.getElementById('meta').innerText = 'Turn of player x';
    } else {
        document.getElementById('meta').innerText = 'Turn of player o';
    }
}