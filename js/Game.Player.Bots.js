(function(){


    GAME.Player.Bots = _bots;
    YAHOO.lang.extend(_bots, GAME.Player);

    function _bots(position){
        _bots.superclass.constructor.call(this);
        _bots.uber = new _bots.superclass.constructor();

        var _this = this;
        _this.setAnimation = _setAnimation;
        _this.updatePosition = _updatePosition;
        _this.speed = 4;

        _this.player = new Kinetic.Circle({
            x: position.x,
            y: position.y,
            radius: 10,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 2
        });

        function _setAnimation(board){
            _this.animation = new Kinetic.Animation(function(frame) {
                board.updateBotPositions();
                board.updatePlayerPosition(_this);
                _this.player.setX(_this.player.getX()+(_this.speed*_this.Vx));
                _this.player.setY(_this.player.getY()+(_this.speed*_this.Vy));
            }, board.getBoard());
        }

        function _updatePosition(player){
            var x,y;
            x = player.getPlayer().getX();
            y = player.getPlayer().getY();

        }

    }

})();
