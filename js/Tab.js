function Tab(){
	var noOfSpaces=4;
	var tab='';
	
	
	this.getTab = function(){
		for(i=0;i<noOfSpaces;i++){
			tab += ' ';
		}
		return tab;
	}
}