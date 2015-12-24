function KeyEvent(){
		var span=new Span();
		var listenKey= new ListenKey();
		var caret=new Caret();

		this.checkCharacter = function (eventKey,eventValue){
				var tab=new Tab();
				var textEditorInstance = Singleton.getInstance();
				if(eventKey[32] == true){
					event.preventDefault();
					textEditorInstance.inputString=' ';
					textEditorInstance.currentSpan=span.createSpan(textEditorInstance.inputString);
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan=span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();

		//            var innerText=textEditorInstance.currentSpan.innerHTML;//innerhtml of current 
		//            var firstText=innerText.substr(0,innerText.indexOf(' '));
		//            var secondText=innerText.substr(innerText.indexOf(' ')+1);
		//            console.log('firstText: '+firstText+' secondText: '+secondText);
		//            textEditorInstance.currentSpan=span.changeSpan(textEditorInstance.currentSpan,firstText);
		//            var previousSpan=textEditorInstance.currentSpan;
		//            textEditorInstance.inputString='';
		////            console.log('innerhtml',previousSpan.innerHTML);
		//            textEditorInstance.currentSpan=span.createNewSpan(previousSpan,secondText);
		//            textEditorInstance.currentSpan.focus();
				} 
				else if(eventKey[8]){
					textEditorInstance.inputString=textEditorInstance.currentSpan.innerHTML;
					textEditorInstance.inputString=textEditorInstance.inputString.substring(0,textEditorInstance.inputString.length-1);
					textEditorInstance.currentSpan=span.changeSpan(textEditorInstance.currentSpan,textEditorInstance.inputString);
					console.log(textEditorInstance.currentSpan.innerHTML);

					if(textEditorInstance.currentSpan.innerHTML ==' ' 
					   || textEditorInstance.currentSpan.innerHTML=='' 
					   || textEditorInstance.currentSpan.innerHTML == tab.getTab()){
						var previousSpan=textEditorInstance.currentSpan;
						console.log('madan');
						if(textEditorInstance.currentSpan.previousSibling.tagName == 'BR'){
							textEditorInstance.currentSpan=textEditorInstance.currentSpan.previousSibling.previousSibling;
							var br=document.getElementsByTagName('BR');
							var length=br.length;
							br[length-1].parentNode.removeChild(br[length-1]);

						}
						else{
						  textEditorInstance.currentSpan=textEditorInstance.currentSpan.previousSibling;
						}
						console.log(textEditorInstance.currentSpan);
						console.log(textEditorInstance.currentSpan.tagName);
						previousSpan.remove();
						textEditorInstance.currentSpan.focus();
						caret.setEndOfContenteditable(textEditorInstance.currentSpan);
						textEditorInstance.inputString=textEditorInstance.currentSpan.innerHTML;
						}

				}
				else if(eventKey[13]){
					event.preventDefault();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan=span.changeLine(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();

				}
				else if(eventKey[9]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan(tab.getTab());
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[37]){
					console.log(caret.getCaretPosition());
					console.log(document.getElementsByTagName('span')[0]);
					if(caret.getCaretPosition() == 0 && textEditorInstance.currentSpan.previousSibling != null){
						if(textEditorInstance.currentSpan.previousSibling != document.getElementsByTagName('span')[0].previousSibling){
							textEditorInstance.currentSpan=textEditorInstance.currentSpan.previousSibling;
						}
						caret.setEndOfContenteditable(textEditorInstance.currentSpan);
						textEditorInstance.currentSpan.focus();

					}

				}
				else if(eventKey[39]){
					console.log(caret.getCaretPosition());
					if(caret.getCaretPosition() == textEditorInstance.currentSpan.innerHTML.length 
					   && textEditorInstance.currentSpan.nextSibling != null){
						textEditorInstance.currentSpan=textEditorInstance.currentSpan.nextSibling;
						textEditorInstance.currentSpan.focus();
						console.log(textEditorInstance.currentSpan);
					}
				}
				else if(eventKey[187]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('=');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[186]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan(';');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				 else if(eventKey[189]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('-');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				 else if(eventKey[219]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('[');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				 else if(eventKey[221]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan(']');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[220] || eventKey[226]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('\\');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[191]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('/');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[190]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('.');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[188]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan(',');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[192]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('`');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}

				else if(eventKey[16] && eventKey[57] ){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('(');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[48]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan(')');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[186]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan(':');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[219]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('{');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[221]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('\}');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[188]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('<');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[190]){
				   event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('>');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[191]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('?');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				 else if((eventKey[16] && eventKey[220]) || (eventKey[16] && eventKey[226]) ){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('|');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[187]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('+');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[189]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('_');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[56]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('*');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[55]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('&');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[54]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('^');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[53]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('%');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[52]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('$');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[51]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('#');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[50]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('@');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[49]){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('!');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[192] ){
					event.preventDefault();
					textEditorInstance.currentSpan = span.createSpan('~');
					textEditorInstance.currentSpan.focus();
					textEditorInstance.inputString='';
					textEditorInstance.currentSpan = span.createSpan(textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
				}
				 else if(eventKey[222]){

					 textEditorInstance.currentSpan = span.createSpan('');
					 textEditorInstance.currentSpan.focus();
					 textEditorInstance.inputString='\'';
					 textEditorInstance.currentSpan=span.changeSpan(textEditorInstance.currentSpan,textEditorInstance.inputString);
					 textEditorInstance.currentSpan.focus();
				 }
				else if(eventValue >=48 && eventValue <=57 ){
					var numChar = listenKey.getChar(eventValue);
					textEditorInstance.inputString = textEditorInstance.inputString.concat(1);
					textEditorInstance.currentSpan = span.changeSpan(textEditorInstance.currentSpan,textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
					eventKey[i]=false;    
				}
				else{
					for(var i =62; i <= 90; i++ ){
					if(eventKey[i]){
						var charUpper = listenKey.getChar(eventValue);
						char = charUpper.toLowerCase();
						textEditorInstance.inputString = textEditorInstance.inputString.concat(char);
						textEditorInstance.currentSpan = span.changeSpan(textEditorInstance.currentSpan,textEditorInstance.inputString);
						eventKey[i]=false;
						}
					}
				}
			}
	
	
	
}