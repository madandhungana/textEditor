function TextEditor(){
    
    var element = document.getElementById('textarea');
    var that = this;
    var char='';
    var inputString='';
    var currentSpan;
    var listenKey=new ListenKey();
    var span=new Span();
    var caret=new Caret();
	
    this.init = function(){
        var eventKeys=[];
        currentSpan=span.createSpan('');
        currentSpan.focus;
        element.onkeydown = function(event) {
        eventKeys[event.keyCode]=true;
        that.checkCharacter(eventKeys,event.keyCode);
        };
        element.onkeyup=function(event){
            eventKeys[event.keyCode]=false;
            
        }
        element.onclick=function(e){
            var eventId=e.target.id;
            
            if(!eventId.localeCompare("textarea")){
               
            }
            else{
                currentSpan=e.target;
                var caretPosition=caret.getCaretPosition(currentSpan);
                currentSpan.focus();
                inputString=e.target.innerHTML;
                inputString=inputString.trim();
            }
            
        }
        
    }
    
    this.checkCharacter = function (eventKey,eventValue){
		
		var tab=new Tab();
		
        if(eventKey[32] == true){
            event.preventDefault();
            inputString=' ';
            currentSpan=span.createSpan(inputString);
            inputString='';
            currentSpan=span.createSpan(inputString);
            currentSpan.focus();
            
//            var innerText=currentSpan.innerHTML;//innerhtml of current 
//            var firstText=innerText.substr(0,innerText.indexOf(' '));
//            var secondText=innerText.substr(innerText.indexOf(' ')+1);
//            console.log('firstText: '+firstText+' secondText: '+secondText);
//            currentSpan=span.changeSpan(currentSpan,firstText);
//            var previousSpan=currentSpan;
//            inputString='';
////            console.log('innerhtml',previousSpan.innerHTML);
//            currentSpan=span.createNewSpan(previousSpan,secondText);
//            currentSpan.focus();
        } 
        else if(eventKey[8]){
            inputString=currentSpan.innerHTML;
            inputString=inputString.substring(0,inputString.length-1);
            currentSpan=span.changeSpan(currentSpan,inputString);
            console.log(currentSpan.innerHTML);
           
            if(currentSpan.innerHTML ==' ' || currentSpan.innerHTML=='' || currentSpan.innerHTML == tab.getTab()){
                var previousSpan=currentSpan;
                console.log('madan');
                if(currentSpan.previousSibling.tagName == 'BR'){
					currentSpan=currentSpan.previousSibling.previousSibling;
					var br=document.getElementsByTagName('BR');
					var length=br.length;
					br[length-1].parentNode.removeChild(br[length-1]);
                  
                }
                else{
                  currentSpan=currentSpan.previousSibling;
                }
                console.log(currentSpan);
                console.log(currentSpan.tagName);
                previousSpan.remove();
                currentSpan.focus();
                caret.setEndOfContenteditable(currentSpan);
                inputString=currentSpan.innerHTML;
                }
                      
        }
        else if(eventKey[13]){
            event.preventDefault();
            inputString='';
            currentSpan=span.changeLine(inputString);
            currentSpan.focus();
            
        }
		else if(eventKey[9]){
			event.preventDefault();
			currentSpan = span.createSpan(tab.getTab());
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
		}
		else if(eventKey[37]){
			console.log(caret.getCaretPosition());
			if(caret.getCaretPosition() == 0){
				currentSpan=currentSpan.previousSibling;
				currentSpan.focus();
				caret.setEndOfContenteditable(currentSpan);
				console.log(currentSpan);
			}
			
		}
		else if(eventKey[39]){
			console.log(caret.getCaretPosition());
			if(caret.getCaretPosition() == currentSpan.innerHTML.length){
				currentSpan=currentSpan.nextSibling;
				currentSpan.focus();
				console.log(currentSpan);
			}
		}
        else if(eventKey[187]){
            event.preventDefault();
			currentSpan = span.createSpan('=');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[186]){
           	event.preventDefault();
			currentSpan = span.createSpan(';');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
		 else if(eventKey[189]){
           	event.preventDefault();
			currentSpan = span.createSpan('-');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
		 else if(eventKey[219]){
           	event.preventDefault();
			currentSpan = span.createSpan('[');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
		 else if(eventKey[221]){
           	event.preventDefault();
			currentSpan = span.createSpan(']');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
		else if(eventKey[220] || eventKey[226]){
           	event.preventDefault();
			currentSpan = span.createSpan('\\');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
		else if(eventKey[191]){
           	event.preventDefault();
			currentSpan = span.createSpan('/');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
		else if(eventKey[190]){
           	event.preventDefault();
			currentSpan = span.createSpan('.');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
		else if(eventKey[188]){
           	event.preventDefault();
			currentSpan = span.createSpan(',');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
		else if(eventKey[192]){
           	event.preventDefault();
			currentSpan = span.createSpan('`');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
		     
        else if(eventKey[16] && eventKey[57] ){
			event.preventDefault();
			currentSpan = span.createSpan('(');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[48]){
			event.preventDefault();
			currentSpan = span.createSpan(')');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[186]){
            event.preventDefault();
			currentSpan = span.createSpan(':');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[219]){
            event.preventDefault();
			currentSpan = span.createSpan('{');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[221]){
            event.preventDefault();
			currentSpan = span.createSpan('}');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[188]){
           	event.preventDefault();
			currentSpan = span.createSpan('<');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[190]){
           event.preventDefault();
			currentSpan = span.createSpan('>');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[191]){
            event.preventDefault();
			currentSpan = span.createSpan('?');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
         else if((eventKey[16] && eventKey[220]) || (eventKey[16] && eventKey[226]) ){
            event.preventDefault();
			currentSpan = span.createSpan('|');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[187]){
            event.preventDefault();
			currentSpan = span.createSpan('+');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[189]){
            event.preventDefault();
			currentSpan = span.createSpan('_');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[56]){
            event.preventDefault();
			currentSpan = span.createSpan('*');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[55]){
            event.preventDefault();
			currentSpan = span.createSpan('&');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[54]){
            event.preventDefault();
			currentSpan = span.createSpan('^');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[53]){
            event.preventDefault();
			currentSpan = span.createSpan('%');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[52]){
            event.preventDefault();
			currentSpan = span.createSpan('$');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[51]){
            event.preventDefault();
			currentSpan = span.createSpan('#');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[50]){
            event.preventDefault();
			currentSpan = span.createSpan('@');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
        else if(eventKey[16] && eventKey[49]){
            event.preventDefault();
			currentSpan = span.createSpan('!');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
		else if(eventKey[16] && eventKey[192] ){
			event.preventDefault();
			currentSpan = span.createSpan('~');
            currentSpan.focus();
            inputString='';
            currentSpan = span.createSpan(inputString);
            currentSpan.focus();
        }
         else if(eventKey[222]){
             
             currentSpan = span.createSpan('');
             currentSpan.focus();
             inputString='\'';
             currentSpan=span.changeSpan(currentSpan,inputString);
             currentSpan.focus();
         }
        else if(eventValue >=48 && eventValue <=57 ){
            var numChar = listenKey.getChar(event);
            inputString = inputString.concat(numChar);
            currentSpan = span.changeSpan(currentSpan,inputString);
            currentSpan.focus();
            eventKey[i]=false;    
        }
        else{
            for(var i =62; i <= 90; i++ ){
            if(eventKey[i]){
                
                var charUpper = listenKey.getChar(event);
                char = charUpper.toLowerCase();
                inputString = inputString.concat(char);
                currentSpan = span.changeSpan(currentSpan,inputString);
                eventKey[i]=false;
                }
            }
        }
        
        
    }
    
    
}
var tEditor = new TextEditor();
tEditor.init();

