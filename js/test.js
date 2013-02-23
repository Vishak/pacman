GAME.xpos = [];

function startGame(){
    GAME.newGame = new GAME.CreateGame("game",400,600);
    var board = new GAME.Board();
    board.init();
    board.createNewBoard();
    GAME.newGame.setBoard(board);
    var player = new GAME.Player.User({x:300,y:200});
    player.setSpeed(5);
//    player.setBoard(board);
    GAME.newGame.addPlayer(player);
    board.addBots();
    GAME.newGame.start();
}

function pauseGame(){
    GAME.newGame.pause();
}

function continueGame(){
    GAME.newGame.continue();
}