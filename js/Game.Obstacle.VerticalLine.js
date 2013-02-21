(function(){

    GAME.Obstacle = GAME.Obstacle || {};

    GAME.Obstacle.VerticalLine = _verticalLine;

    function _verticalLine(position){

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
            var i,j,x,y1,y2,temp,pos,x1,x2,y,x3,x4;
            x = _this.position[0][0];
            y1 = _this.position[0][1];
            y2 = _this.position[1][1];
            if(y1>y2){
                temp = y1;
                y1 = y2;
                y2 = temp;
            }
            if(player.Vy == 0){
                if(player.Vx == -1){
                    pos = player.getPlayer().getX()-player.getPlayer().getRadius();
                    y1 -= player.getPlayer().getRadius();
                    x1 = x + player.getSpeed();
                    x2 = x - player.getSpeed();
                }
                else{
                    pos = player.getPlayer().getX()+player.getPlayer().getRadius();
                    y1 -= player.getPlayer().getRadius();
                    x1 = x + player.getSpeed();
                    x2 = x - player.getSpeed();
                }
                if((pos < x1 && pos >x2) && (player.getPlayer().getY() > y1 && player.getPlayer().getY() < y2)){
                    player.Vy = 0;
                    player.Vx *= -1;
                }
            }
            else{
                if(player.Vy == 1){
                    x1  = y1 - player.getPlayer().getRadius() + player.getSpeed();
                    x2 = y1 - player.getPlayer().getRadius() - player.getSpeed();
                    y1 = x - player.getPlayer().getRadius();
                    y2 = x + player.getPlayer().getRadius();
                }
                else{
                    x1  = y2 + player.getPlayer().getRadius() + player.getSpeed();
                    x2 = y2 + player.getPlayer().getRadius() - player.getSpeed();
                    y1 = x - player.getPlayer().getRadius();
                    y2 = x + player.getPlayer().getRadius();
                }
                pos = player.getPlayer().getY();
                if((pos > x2 && pos < x1)  && (player.getPlayer().getX() > y1 && player.getPlayer().getX() < y2)){
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
