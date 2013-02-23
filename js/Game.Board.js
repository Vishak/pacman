(function(){

    GAME.Board = _board;

    function _board(){

        var _this = this;

        //Properties
        _this.width=600;
        _this.height=400;
        _this.board = new Kinetic.Layer();
        _this.obstacles = [];
        _this.players = [];
        _this.grid;
        _this.bots = [];

        //Methods
        _this.init = _init;
        _this.setWidth = setWidth;
        _this.setHeight = setHeight;
        _this.createNewBoard = createNewBoard;
        _this.getBoard = getBoard;
        _this.addPlayer = _addPlayer;
        _this.start = _start;
        _this.updatePlayerPosition = _updatePlayerPosition;
        _this.pause = _pause;
        _this.addBots = _addBots;
        _this.updateBotPositions = _updateBotPositions;

        function _init(){
            var verticalObstaclePositions = {1:[[160,0],[160,100]],
                2:[[360,400],[360,200]],3:[[100,400],[100,250]]}
            var horizontalObstaclePositions = {1:[[0,200],[200,200]],
                2:[[400,300],[600,300]],3:[[350,100],[600,100]]}
            var obs;
            $.each(verticalObstaclePositions,function(i,v){
                obs = new GAME.Obstacle.VerticalLine(v);
                _this.obstacles.push(obs);
            });
            $.each(horizontalObstaclePositions,function(i,v){
                obs = new GAME.Obstacle.HorizontalLine(v);
                _this.obstacles.push(obs);
            });
            var botPositions = [{x:10,y:10},{x:10,y:390}
//                ,{x:590,y:10},{x:590,y:390}
            ]
            $.each(botPositions,function(i,v){
                _this.bots.push(new GAME.Player.Bots(v));
            })
        }

        function setWidth(width){
            _this.width = width;
        }

        function setHeight(height){
            _this.height = height;
        }

        function getBoard(){
            return _this.board;
        }

        function createNewBoard(){
            _this.grid = new Kinetic.Rect({
                x: 0,
                y: 0,
                width: _this.width,
                height: _this.height,
                fill: "#CCC",
                stroke: 'black',
                strokeWidth: 2
            });
            _this.board.add(_this.grid);
            addObstacles();
        }

        function addObstacles(){
            $.each(_this.obstacles,function(i,v){
               _this.board.add(v.getObstacle());
            });
        }

        function _addBots(){
            $.each(_this.bots,function(i,v){
                _this.board.add(v.getPlayer());
                v.setAnimation(_this);
            });
        }

        function _addPlayer(player){
            _this.players.push(player);
            _this.board.add(player.getPlayer());
            player.setAnimation(_this);
        }

        function _start(){
            $.each(_this.players,function(i,v){
                v.start();
            });
            $.each(_this.bots,function(i,v){
                v.start();
            });
        }

        function _pause(){
            $.each(_this.players,function(i,v){
                v.pause();
            });
            $.each(_this.bots,function(i,v){
                v.pause();
            });
        }

        function _updatePlayerPosition(player){
            if(player.getPlayer().getX()>_this.grid.getWidth()-player.getPlayer().getRadius()){
                player.Vx = -1;
                player.Vy = 0;
            }
            else if(player.getPlayer().getX()<_this.grid.getX()+player.getPlayer().getRadius()){
                player.Vx = 1;
                player.Vy = 0;
            }
            else if(player.getPlayer().getY()<_this.grid.getY()+player.getPlayer().getRadius()){
                player.Vx = 0;
                player.Vy = 1;
            }
            else if(player.getPlayer().getY()>_this.grid.getHeight()-player.getPlayer().getRadius()){
                player.Vx = 0;
                player.Vy = -1;
            }
            checkForObstacles(player);
        }

        function checkForObstacles(player){
            $.each(_this.obstacles,function(i,v){
                v.checkIfBlocking(player);
            });
        }

        function _updateBotPositions(){
            $.each(_this.bots,function(i,v){
                v.updatePosition(_this.players[0]);
            });
        }
    }

})();
