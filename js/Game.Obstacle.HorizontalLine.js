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
            var temp,obstacleY,obstacleY1,obstacleY2,posX,posY,rightBoundary,leftBoundary,obstacleX1,obstacleX2;
            obstacleY = _this.position[0][1];
            obstacleX1 = _this.position[0][0];
            obstacleX2 = _this.position[1][0];
            if(obstacleX1>obstacleX2){
                temp = obstacleX1;
                obstacleX1 = obstacleX2;
                obstacleX2 = temp;
            }
            if(player.Vy == 0){
                if(player.Vx == 1){
                    leftBoundary = obstacleX1 - player.getPlayer().getRadius() - player.getSpeed();
                    rightBoundary = obstacleX1 - player.getPlayer().getRadius() + player.getSpeed();
                }
                else{
                    leftBoundary = obstacleX2 + player.getPlayer().getRadius() - player.getSpeed();
                    rightBoundary = obstacleX2 + player.getPlayer().getRadius() + player.getSpeed();
                }
                obstacleY1 = obstacleY - player.getPlayer().getRadius();
                obstacleY2 = obstacleY + player.getPlayer().getRadius();
                posX = player.getPlayer().getX();
                posY = player.getPlayer().getY();
                if((posX > leftBoundary && posX < rightBoundary) && (posY > obstacleY1 && posY < obstacleY2)){
                    player.Vy = 0;
                    player.Vx *= -1;
                }
            }
            else{
                if(player.Vy == 1){
                    posY = player.getBottomPosition();
                }
                else{
                    posY = player.getTopPosition();
                }
                obstacleX1 -=  player.getPlayer().getRadius();
                obstacleX2 +=  player.getPlayer().getRadius();
                obstacleY1 = obstacleY + player.getSpeed();
                obstacleY2 = obstacleY - player.getSpeed();
                posX = player.getPlayer().getX();
                if((posY <obstacleY1 && posY >obstacleY2) && (posX > obstacleX1 && posX < obstacleX2)){
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

