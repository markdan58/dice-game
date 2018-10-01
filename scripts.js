// backend...

roll = function () {
    return parseInt(Math.random() * (6 - 1) + 1);
}

let player1_score = 0
let player2_score = 0

let turn = 1;
let score = 0;

// front end...

function myTurn(player) {
    score = roll();

    if (score === 1) {
        alert('Hand over the controls to the next player');
        $(`#player${player}-roll`).prop('disabled', true);
        $(`#player${player === 2 ? 1 : 2}-roll`).prop('disabled', false);
    } else {
        if (player === 1) {
            player1_score += score;
            $('#total-score-1').html(player1_score);
        } else if (player === 2) {
            player2_score += score;
            $('#total-score-2').html(player2_score);
        }
    }
    turn = player;
    checkWinner();
}

function checkWinner() {
    if (player1_score >= 100) {
        alert('Player 1 wins!')
    } else if (player2_score >= 100) {
        alert('Player 2 wins!')
    }
}