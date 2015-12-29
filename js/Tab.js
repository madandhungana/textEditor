function Tab(){
	var noOfSpaces=4;
	var tab='';
	
	this.getTab = function(){
		tab='';
		for(i=0;i<noOfSpaces;i++){
			tab += ' ';
		}
		return tab;
	}
}