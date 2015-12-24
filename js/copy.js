var dataToCopy = function(){
	var userSelection;
	if (window.getSelection) {
		userSelection = window.getSelection();
		
	}
	else if(document.selection){
		userSelection = document.selection.createRange();
	}
	

	return userSelection;
}




document.addEventListener('beforecopy',function(e){
	var copiedData=dataToCopy();
	
	if(copiedData == null){
		e.preventDefault();
	}
	
});
document.addEventListener('copy',function(event){
	var copiedData=dataToCopy();
	event.clipboardData.setData('text/plain',copiedData);
	event.preventDefault();
	
});

document.addEventListener('paste',function(event){
	var parser=new Parser();
	if(event.clipboardData.types.indexOf('text/plain') > -1){
		alert('clipboard data'+event.clipboardData.getData('text/plain'));
		parser.parseData(event.clipboardData.getData('text/plain'))
		event.preventDefault();
	}
});

