var GAME = GAME || {};

(function(){

    GAME.CreateGame = _game;

    function _game(location,height,width){

        var _this = this;

        _this.location = location;
        _this.width = width ;
        _this.height = height;
        _this.board;
        _this.base = new Kinetic.Stage({
            container: _this.location,
            width: _this.width,
            height: _this.height
        });

        _this.setBoard = setBoard;
        _this.start = start;
        _this.pause = pause;
        _this.continue = _continue;
        _this.stop = stop;
        _this.addPlayer = _addPlayer;
        _this.addBots = _addBots;

        function setBoard(gameBoard){
            _this.board = gameBoard;
        }

        function start(){
            _this.base.add(_this.board.getBoard());
            _this.board.start();
        }

        function pause(){
            _this.board.pause();
        }

        function _continue(){
            _this.board.start();
        }

        function stop(){

        }

        function _addPlayer(player){
            _this.board.addPlayer(player);
        }

        function _addBots(){
            _this.board.addBots();
        }
    }


})();
