(function(){

    GAME.Obstacle = _obstacle;

    function _obstacle(position,type){

        var _this = this;

        _this.position = position;
        _this.type = type;
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
            if(_this.type == "vertical"){
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
            else if(_this.type == "horizontal"){
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
