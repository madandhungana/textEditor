function Span(){
    var elem=document.getElementById('textarea');
    var listenKey=new ListenKey();
//    var mouse = new Mouse();
    this.createSpan=function(charString){
        var className=listenKey.getClassName(charString);
        var span=document.createElement('span');
		var mainInstance = Singleton.getInstance();
        span.innerHTML =charString;
        span.setAttribute('class',className);
        span.setAttribute('contenteditable','true');
        span.setAttribute('display','inline-block');
		span.style.border = '1px solid transparent';
		span.addEventListener('selectstart',function(){
			var spans=document.getElementsByTagName('span');
			
			for(var i=0;i<spans.length;i++){
				spans[i].setAttribute('contenteditable','false');
			}
			
		});
		span.addEventListener('mouseup',function(){
			var spans=document.getElementsByTagName('span');
			if(!event.target.innerHTML==' '){
				console.log(event.target);
				for(var i=0; i<spans.length; i++){
					spans[i].setAttribute('contenteditable','true');
				}
				mainInstance.currentSpan=event.target;
				mainInstance.currentSpan.focus();
			}
			
        });
		
		elem.appendChild(span); 
        span.focus();
        return span;
                     
    }
 /*this function is used to create new span when whitespace is pressed */
    this.createNewSpan=function(previousSpan,inputString){
        var className=listenKey.getClassName(inputString);
        var span=document.createElement('span');
        span.innerHTML =inputString;
        span.setAttribute('class',className);
        span.setAttribute('contenteditable','true');
        span.setAttribute('display','inline-block');
        span.style.border = '1px solid white';
        elem.insertBefore(span,previousSpan.nextSibling); 
        span.focus();
        return span;
    }
    this.changeSpan=function(currentSpan,inputString){
        console.log('current span before change: ',currentSpan);
        console.log(' in',inputString);
        var className=listenKey.getClassName(inputString);
        currentSpan.setAttribute('class',className);
		console.log('current span after change: ',currentSpan);
        currentSpan.focus();
        return currentSpan;
    }
    
	this.changeLine=function(){
      var lineBreak=document.createElement('br');
      elem.appendChild(lineBreak);
      return this.createSpan('');
      
    }
   
    
}