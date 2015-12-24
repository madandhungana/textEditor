function Parser(){
	var span = new Span();
	this.parseData = function(clipboardData){
		var splittedData=clipboardData.split(' ');
		for(i=0;i<splittedData.length;i++){
			span.createSpan(splittedData[i]);
		}
	}
	
	
	
	
	
}