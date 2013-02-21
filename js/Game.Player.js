(function(){

    GAME.Player = _players;

    function _players(position){

        var _this = this;

        _this.player = new Kinetic.Circle({
            x: position.x,
            y: position.y,
            radius: 10,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 2
        });

        _this.animation;
        _this.speed =2;
        _this.board;

        _this.Vx=1;
        _this.Vy=0;
        _this.setSpeed = _setSpeed;
        _this.getSpeed = _getSpeed;
        _this.getPlayer = _getPlayer;
        _this.start = _start;
//        _this.setBoard = _setBoard;
        _this.setAnimation = _setAnimation;
        _this.pause = _pause;
        _this.getLeftPosition = _getLeftPosition;
        _this.getRightPosition = _getRightPosition;
        _this.getTopPosition = _getTopPosition;
        _this.getBottomPosition = _getBottomPosition;

        function _setAnimation(board){
            _this.animation = new Kinetic.Animation(function(frame) {
                board.updatePlayerPosition(_this);
                _this.player.setX(_this.player.getX()+(_this.speed*_this.Vx));
                _this.player.setY(_this.player.getY()+(_this.speed*_this.Vy));
            }, board.getBoard());
            window.addEventListener('keydown',doKeyDown,true);
        }

//        function _setBoard(board){
//            _this.board = board;
//        }

        function _getPlayer(){
            return _this.player;
        }

        function _setSpeed(speed){
            _this.speed = speed;
        }

        function _getSpeed(speed){
            if(_this.speed){
                return _this.speed;
            }
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

        function doKeyDown(evt){
            switch (evt.keyCode) {
                case 38:  /* Up arrow was pressed */
                    _this.Vx = 0;
                    _this.Vy = -1;
                    break;
                case 40:  /* Down arrow was pressed */
                    _this.Vx = 0;
                    _this.Vy = 1;
                    break;
                case 37:  /* Left arrow was pressed */
                    _this.Vx = -1;
                    _this.Vy = 0;
                    break;
                case 39:  /* Right arrow was pressed */
                    _this.Vx = 1;
                    _this.Vy = 0;
                    break;
            }
            evt.preventDefault();
        }

    }

})();
