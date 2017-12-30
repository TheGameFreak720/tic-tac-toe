$(document).ready(function(){
    //Default's player's turn to X
    var turn = 'X';

    //Array stores values that we will check later for winner
    var turns = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];

    //Default computer turn
    var computerTurn = 'O';

    //Keeps track if it's the computer's turn
    var gameOn = false;

    //Change computer's turn from X to O
    $('#turnX').click(function() {
        turn = 'O';
        computerTurn = 'X';
        $('#turnX').removeClass('btn-primary');
        $('#turnO').addClass('btn-primary');
    });

    $('#turnO').click(function() {
        turn = 'X';
        computerTurn = 'O';
        $('#turnO').removeClass('btn-primary');
        $('#turnX').addClass('btn-primary');
    });

    function playerTurn(turn, id) {
        var spotTaken = $('#' + id).text();

        if (spotTaken === '#') {
            turns[id] = turn;
            $('#' + id).text(turn);
        }
    }

    $('.tic').click(function() {
       var slot = $(this).attr('id');
       playerTurn(turn, slot);
    });
});