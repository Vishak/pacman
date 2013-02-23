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
            var obstacleX,obstacleY1,obstacleY2,temp,posX,posY,rightBoundary,leftBoundary,obstacleX1,obstacleX2;
            obstacleX = _this.position[0][0];
            obstacleY1 = _this.position[0][1];
            obstacleY2 = _this.position[1][1];
            if(obstacleY1>obstacleY2){
                temp = obstacleY1;
                obstacleY1 = obstacleY2;
                obstacleY2 = temp;
            }
            if(player.Vy == 0){
                posY = player.getPlayer().getY();
                if(player.Vx == -1){
                    posX = player.getLeftPosition();
                }
                else{
                    posX = player.getRightPosition();
                }
                obstacleY1 -= player.getPlayer().getRadius();
                obstacleY2 += player.getPlayer().getRadius();
                rightBoundary = obstacleX + player.getSpeed();
                leftBoundary = obstacleX - player.getSpeed();
                if((posX < rightBoundary && posX >leftBoundary) && (posY > obstacleY1 && posY < obstacleY2)){
                    player.Vy = 0;
                    player.Vx *= -1;
                }
            }
            else{
                if (player.Vy == 1) {
                    rightBoundary = obstacleY1 - player.getPlayer().getRadius() + player.getSpeed();
                    leftBoundary = obstacleY1 - player.getPlayer().getRadius() - player.getSpeed();
                } else {
                    rightBoundary = obstacleY2 + player.getPlayer().getRadius() + player.getSpeed();
                    leftBoundary = obstacleY2 + player.getPlayer().getRadius() - player.getSpeed();
                }
                obstacleX1 = obstacleX - player.getPlayer().getRadius();
                obstacleX2 = obstacleX + player.getPlayer().getRadius();
                posY = player.getPlayer().getY();
                posX = player.getPlayer().getX();
                if((posY > leftBoundary && posY < rightBoundary)  && (posX > obstacleX1 && posX < obstacleX2)){
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
