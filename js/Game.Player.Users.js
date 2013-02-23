var GAME = GAME || {};

(function(){

    GAME.Player.User = _user;
    YAHOO.lang.extend(_user, GAME.Player);

    function _user(position){

        _user.superclass.constructor.call(this);
        _user.uber = new _user.superclass.constructor();

        var _this = this;
        _this.setAnimation = _setAnimation;

        _this.player = new Kinetic.Circle({
            x: position.x,
            y: position.y,
            radius: 10,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 2
        });


        function _setAnimation(board){
            _this.animation = new Kinetic.Animation(function(frame) {
                board.updatePlayerPosition(_this);
                _this.player.setX(_this.player.getX()+(_this.speed*_this.Vx));
                _this.player.setY(_this.player.getY()+(_this.speed*_this.Vy));
            }, board.getBoard());
            window.addEventListener('keydown',doKeyDown,true);
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
