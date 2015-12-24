function Parser(){
	var span = new Span(true);
	this.parseData = function(clipboardData){
		var mainInstance = Singleton.getInstance();
		var splittedData=clipboardData.split(' ');
		for(i=0;i<splittedData.length;i++){
			mainInstance.currentSpan=span.createSpan(splittedData[i]);
			mainInstance.currentSpan.focus();
			mainInstance.currentSpan=span.createSpan(' ');
			mainInstance.currentSpan.focus();
		}
	}
	
	
	
	
	
}