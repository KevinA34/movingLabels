# movingLabels
循环移动,xxx进入了游戏，假的玩家登录信息

        /**
         *假的 玩家登录信息显示
         */ 
        private wanJiaDengLu():void {
            try {
                //
                if (this.loadPlayerTimer == null) return;
                let count: number = this.loadPlayerTimer.currentCount;
                //
                if (count >= 1) {
                    if (this.createBtn.touchEnabled == false) {
                        //
                        LoadManager.instance.addWait("guide");
                        LoadManager.instance.addWait("fight");//mark stepcare
                        //
                    }
                    this.createBtn.touchEnabled = true;
                    //
                    if (count == 1) {
                        Message.instance.send(MsgCMD.MODULE_SHOW,WindowName.ADIMGCONTROLER);
                    }
                    //
                }
                //
                if (count >= 5) {
                    //not go
                    if (RES.isGroupLoaded("create") && RES.isGroupLoaded("guide")) {
                        if (this.bToLoadEffRes == false) {
                            this.bToLoadEffRes = true;
                            this.loadEffTimerTimerHandler(null);
                        }
                    }
                }
                //
                if (!this.roleNames || this.roleNames.length <= 0)
                    return;
                /**随机 时间5-10秒进入游戏*/
                var _time = Math.floor(Math.random() * 11 + 5);
                if(_time > 10){
                    return;
                }
                /**百分之六十的概率是男名，*/
                if(Math.random() > 0.5){
                    var keyTitle = "Mtitle";
                    var keyName = "Mname";
                    this["nameLabel" + this.nameIndex].textColor = 0x03F8F8;
                }else{
                    keyTitle = "Ftitle";
                    keyName = "Fname";
                    this["nameLabel" + this.nameIndex].textColor = 0x2AF477;
                }
                var length = 447;
                /*1-448随机数*/
                var randomTitleNum = Math.floor(Math.random() * length) + 1;
                var randomNameNum = Math.floor(Math.random() * length) + 1;
                var firstName = this.roleNames[randomTitleNum][keyTitle];
                var lastName = this.roleNames[randomNameNum][keyName];
                var allName = firstName + lastName;
                
                if(this.nameIndex > 5) {
                    this.nameIndex = 0;
                }
                
                this["nameLabel" + this.nameIndex].text = allName;
                this["nameLabel" + this.nameIndex].visible = true;
                this["nameLabel" + this.nameIndex].size = 20;
                
                this["loadIn" + this.nameIndex].text = LangManager.instance.getText("@lodingForPlayers",_time);
                this["loadIn" + this.nameIndex].visible = true;
                /*一秒钟有70%的概率产生新的玩家，然后显示玩家登录名字就是allName*/
                if(Math.random() >= 0){
                    egret.Tween.get(this["loadIn" + this.nameIndex]).to({ visible: true,y: 30 },5900).call(function() {
                        this.visible = false;
                        this.y = 180;
                        egret.Tween.removeTweens(this);
                    });
                    egret.Tween.get(this["nameLabel" + this.nameIndex]).to({ visible: true,y: 30 },5900).call(function(){
                        this.visible = false;
                        this.y = 180;
                        this.size = 20;
                        egret.Tween.removeTweens(this);
                    });
                }
                
                this.nameIndex = this.nameIndex + 1;
                //var str1 = 
        
            } catch(e) {
                console.log("exception: " + e.toString());
                console.error(e);
            }
        }
    }
