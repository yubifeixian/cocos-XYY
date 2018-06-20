var selectPlayerDialogLayer=BaseDialogLayer.extend({
	player1shown:false,
	player2shown:false,
	player3shown:false,
	player4shown:false,
	playerButtons:null,
	message:null,
	cancelButton:null,
	isButtonCancleEnabled:false,
	result:null,
	canUseMengkuilei:false,
	playersList:null,
	callBack:null,
	isNPCJoin:null,
	choosePlayer1:null,
	choosePlayer2:null,
	choosePlayer3:null,
	choosePlayer4:null,
	ctor:function(player1shown,player2shown, player3shown, player4shown,
			message, isButtonCancleEnabled, canUseMengkuilei,callBack,isNPCJoin){
		this._super();
		this.player1shown=player1shown;
		this.player2shown=player2shown;
		this.player3shown=player3shown;
		this.player4shown=player4shown;
		this.choosePlayer1=player1;
		this.choosePlayer2=player2;
		this.choosePlayer3=player3;
		this.choosePlayer4=player4==null?boss:player4
		this.message=message;
		this.playerButtons=new Array();
		this.isButtonCancleEnabled=false;
		this.playersList=new Array();
		this.isButtonCancleEnabled=isButtonCancleEnabled;
		this.canUseMengkuilei=canUseMengkuilei;
		this.callBack=callBack;
		this.isNPCJoin=isNPCJoin;
		this.init();
	},
	init:function(){
		var temp=this;
		var dialog=ccs.load(res.SelectPlayerDialog_json);
		var messageLabel=ccui.helper.seekWidgetByName(dialog.node, "message");
		messageLabel.setString(this.message);
		this.cancelButton=ccui.helper.seekWidgetByName(dialog.node, "cancelButton");
		this.cancelButton.addTouchEventListener(function(sender,type){
			if(type==2){
				temp.result=null;
				temp.sendResult();
			}
		},this.cancelButton);
		buttonManager(this.cancelButton, this.isButtonCancleEnabled, this.isButtonCancleEnabled);
		if (this.canUseMengkuilei) {
			if (this.player1shown
					&& (this.choosePlayer1._name==nameLiumengliMengkuilei|| this.choosePlayer1.hp > 0)) {
				this.playersList.push(this.choosePlayer1);
			}
			if (this.player2shown
					&& (this.choosePlayer2._name==nameLiumengliMengkuilei || this.choosePlayer2.hp > 0)) {
				this.playersList.push(this.choosePlayer2);
			}
			if (this.player3shown
					&& (this.choosePlayer3._name==nameLiumengliMengkuilei || this.choosePlayer3.hp > 0)) {
				this.playersList.push(this.choosePlayer3);
			}
			if (this.player4shown
					&& (this.choosePlayer4._name==nameLiumengliMengkuilei || this.choosePlayer4.hp > 0)) {
				this.playersList.push(this.choosePlayer4);
			}
		}else if(this.isNPCJoin!=null){
			if (this.player1shown) {
				this.playersList.push(this.choosePlayer1);
			}
			if (this.player2shown) {
				this.playersList.push(this.choosePlayer2);
			}
			if (this.player3shown) {
				this.playersList.push(this.choosePlayer3);
			}
			if (this.player4shown) {
				this.playersList.push(this.choosePlayer4);
			}
		}else{
			if (this.player1shown && this.choosePlayer1.hp > 0) {
				this.playersList.push(this.choosePlayer1);
			}
			if (this.player2shown && this.choosePlayer2.hp > 0) {
				this.playersList.push(this.choosePlayer2);
			}
			if (this.player3shown && this.choosePlayer3.hp > 0) {
				this.playersList.push(this.choosePlayer3);
			}
			if (this.player4shown && this.choosePlayer4.hp > 0) {
				this.playersList.push(this.choosePlayer4);
			}
		}
		var listView=ccui.helper.seekWidgetByName(dialog.node, "ListView");
		listView.setBackGroundColor(cc.color(53, 127, 131, 81));
		var image=ccui.helper.seekWidgetByName(dialog.node, "image");
		listView.removeAllItems();
		for(var i=0;i<this.playersList.length;i++){
			var playerButton=image.clone();
			//playerButton.retain();
			playerButton.loadTexture(this.playersList[i].playerPicSrc);
			playerButton.setUserData(this.playersList[i]);
			this.playerButtons.push(playerButton);
			listView.pushBackCustomItem(playerButton);
		}
		for(var i=0;i<this.playerButtons.length;i++){
			this.playerButtons[i].addTouchEventListener(function(sender,type){
				if(type==2){
					temp.result=this.getUserData();
					temp.sendResult();
				}
			},this.playerButtons[i]);
		}
		this.addChild(dialog.node);
	},
	sendResult:function(){
		var temp=this;
		this.removeFromParent(true);
		cc.eventManager.resumeTarget(mainScene, true);
		/*for(var i=0;i<temp.playerButtons.length;i++){
			this.playerButtons[i].release();
		}*/
		//this.playerButtons=null;
		//cc.eventManager.dispatchCustomEvent("dialogEvent",temp.event.getUserData());
		this.callBack(this.result);
	}
})