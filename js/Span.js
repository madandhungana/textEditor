function Span(){
    var elem=document.getElementById('textarea');
    var listenKey=new ListenKey(); 
//    var mouse = new Mouse();
    this.createSpan=function(charString){
        var className=listenKey.getClassName(charString);
        var span=document.createElement('span');
        span.innerHTML =charString;
        span.setAttribute('class',className);
        span.setAttribute('contenteditable','true');
        span.setAttribute('display','inline-block');
//        span.setAttribute('outline','transparent');
//		span.style.border = '1px solid transparent';
        span.onclick=function(){
            console.log('This is a span active attribute: ',document.activeElement);
        }
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