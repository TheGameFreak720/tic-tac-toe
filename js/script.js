$(document).ready(function(){
    //Default's player's turn to X
    var turn = 'X';

    //Array stores values that we will check later for winner
    var turns = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];

    //Default computer turn
    var computersTurn = 'O';

    //Keeps track if it's the computer's turn
    var gameOn = false;

    //Keep track of computer's turn so no loop
    var count = 0;

    //Change computer's turn from X to O
    $('#turnX').click(function() {
        turn = 'O';
        computersTurn = 'X';
        $(`#turnX`).css("backgroundColor", "#e74c3c");
        $(`#turnO`).css("backgroundColor", "#2980b9");
        reset();
    });

    $('#turnO').click(function() {
        turn = 'X';
        computersTurn = 'O';
        $(`#turnO`).css("backgroundColor", "#e74c3c");
        $(`#turnX`).css("backgroundColor", "#2980b9");
        reset();
    });

    function computerTurn() {

        //Used to break while loop
        var taken = false;

        while (taken === false && count !== 5) {
            //Generate computer's random turn
            var computersMove = (Math.random()*10).toFixed();
            var move = $('#' + computersMove).text();
            if (move === '#') {
                $('#' + computersMove).text(computersTurn);
                taken = true;
                $(`#${computersMove}`).css("backgroundColor", "#e74c3c");
                turns[computersMove] = computersTurn
            }
        }
    }

    function playerTurn(turn, id) {
        var spotTaken = $('#' + id).text();

        if (spotTaken === '#') {
            count++;
            turns[id] = turn;
            $(`#${id}`).css("backgroundColor", "#e74c3c");
            $('#' + id).text(turn);
            winCondition(turns, turn);
            if (gameOn === false) {
                computerTurn();
                winCondition(turns, computersTurn);
            }
        }
    }

    function winCondition(turnArray, currentTurn) {

        if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player ' + currentTurn + ' wins! (Top row across 0, 1 and 2 spots)');
        } else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player ' + currentTurn + ' wins! (Top row across 2, 4 and 6 spots)');
        } else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player ' + currentTurn + ' wins! (1st row down 0, 3 and 6 spots)');
        } else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player ' + currentTurn + ' wins! (1st row diagonally across 0, 4 and 8 spots)');
        } else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player ' + currentTurn + ' wins! (2d row down 1, 4 and 7 spots)');
        } else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player ' + currentTurn + ' wins! (3rd row down 2, 5 and 8 spots)');
        } else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player ' + currentTurn + ' wins! (Middle row across 3, 4 and 5 spots)');
        } else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player ' + currentTurn + ' wins! (Bottom row across 6, 7 and 8 spots)');
        } else {
            gameOn = false;
        }
    }

    $('.tic').click(function() {
       var slot = $(this).attr('id');
       playerTurn(turn, slot);
    });

    function reset() {
        turns = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];
        count = 0;
        $(`.tic`).css("backgroundColor", "#3498db");
        $('.tic').text('#');
        gameOn = false;
    }
});