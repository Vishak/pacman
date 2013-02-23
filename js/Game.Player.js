var GAME = GAME || {};

(function(){

    GAME.Player = _players;

    function _players(){

        var _this = this;

        _this.player = null;
        _this.animation =null;
        _this.speed = 5;
        _this.board = null;

        _this.Vx=1;
        _this.Vy=0;
        _this.setSpeed = _setSpeed;
        _this.getSpeed = _getSpeed;
        _this.getPlayer = _getPlayer;
        _this.start = _start;
        _this.pause = _pause;
        _this.getLeftPosition = _getLeftPosition;
        _this.getRightPosition = _getRightPosition;
        _this.getTopPosition = _getTopPosition;
        _this.getBottomPosition = _getBottomPosition;
        _this.setAnimation = null;


        function _getPlayer(){
            return _this.player;
        }

        function _setSpeed(speed){
            _this.speed = speed;
        }

        function _getSpeed(speed){
            return _this.speed;
        }

        function _start(){
            _this.animation.start();
        }

        function _pause(){
            _this.animation.stop();
        }

        function _getRightPosition(){
            return _this.player.getX() +  _this.player.getRadius();
        }

        function _getLeftPosition(){
             return _this.player.getX() -  _this.player.getRadius();
        }

        function _getTopPosition(){
            return _this.player.getY() -  _this.player.getRadius();
        }

        function _getBottomPosition(){
            return _this.player.getY() +  _this.player.getRadius();
        }

    }

})();
