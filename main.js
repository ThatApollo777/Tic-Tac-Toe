let gameState = true;
let playerCounter = 0;
let winStates = [
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

    if (playerCounter%2 === 0) {
        document.getElementById('meta').innerText = 'Turn of player x';
    } else {
        document.getElementById('meta').innerText = 'Turn of player o';
    }

    for (let loop = 0; loop < 8; loop++) {
        if (document.getElementById(winStates[loop][0]).innerText === 'x' && document.getElementById(winStates[loop][1]).innerText === 'x' && document.getElementById(winStates[loop][2]).innerText === 'x')  {
            gameState = false;
            document.getElementById('meta').innerText = 'Winner is player x';
            break;
        } 

        if (document.getElementById(winStates[loop][0]).innerText === 'o' && document.getElementById(winStates[loop][1]).innerText === 'o' && document.getElementById(winStates[loop][2]).innerText === 'o')  {
            gameState = false;
            document.getElementById('meta').innerText = 'Winner is player o';
            break;
        }
    }

    if (playerCounter === 9) {
        gameState = false;
        document.getElementById('meta').innerText = 'The game is Tied';
    }
}