(function(){

    GAME.Obstacle = GAME.Obstacle || {};

    GAME.Obstacle.HorizontalLine = _horizontalLine;

    function _horizontalLine(position){

        var _this = this;

        _this.position = position;
        _this.setPosition = _setPosition;
        _this.getPosition = _getPosition;
        _this.getObstacle = _getObstacle;
        _this.checkIfBlocking = _checkIfBlocking;

        _this.obstacle = new Kinetic.Line({
            points: position,
            stroke: 'blue',
            strokeWidth: 4,
            lineJoin: 'round'
        });

        function _checkIfBlocking(player){
            var i, j, x,y1,y2,temp,pos,x1,x2, y,x3,x4;
            y = _this.position[0][1];
            x1 = _this.position[0][0];
            x2 = _this.position[1][0];
            if(x1>x2){
                temp = x1;
                x1 = x2;
                x2 = temp;
            }
            if(player.Vy == 0){
                if(player.Vx == 1){
//                        pos = x1 - player.getPlayer().getRadius();
                    x3  = x1 - player.getPlayer().getRadius() - player.getSpeed();
                    x4 = x1 - player.getPlayer().getRadius() + player.getSpeed();
                    y1 = y - player.getPlayer().getRadius();
                    y2 = y + player.getPlayer().getRadius();
                }
                else{
                    x3  = x2 + player.getPlayer().getRadius() - player.getSpeed();
                    x4 = x2 + player.getPlayer().getRadius() + player.getSpeed();
//                        pos = x2 + player.getPlayer().getRadius();
                    y1 = y - player.getPlayer().getRadius();
                    y2 = y + player.getPlayer().getRadius();
                }
                pos = player.getPlayer().getX();
                if((pos > x3 && pos <x4) && (player.getPlayer().getY() > y1 && player.getPlayer().getY() < y2)){
                    player.Vy = 0;
                    player.Vx *= -1;
                }
            }
            else{
                if(player.Vy == 1){
                    pos = player.getPlayer().getY() + player.getPlayer().getRadius();
                    x1 -=  player.getPlayer().getRadius();
                    x2 -=  player.getPlayer().getRadius();
                    y1 = y + player.getSpeed();
                    y2 = y - player.getSpeed();
                }
                else{
                    pos = player.getPlayer().getY() - player.getPlayer().getRadius();
                    x1 -= player.getPlayer().getRadius();
                    x2 += player.getPlayer().getRadius();
                    y1 = y + player.getSpeed();
                    y2 = y - player.getSpeed();
                }
                if((pos <y1 && pos >y2) && (player.getPlayer().getX() > x1 && player.getPlayer().getX() < x2)){
                    player.Vx = 0;
                    player.Vy *= -1;
                }
            }

        }
        function _setPosition(position){
            _this.position = position;
        }

        function _getPosition(){
            return _this.position;
        }

        function _getObstacle(){
            return _this.obstacle;
        }


    }
})();

