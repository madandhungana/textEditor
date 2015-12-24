		function TextEditor(){
			
			var element = document.getElementById('textarea');
			var that = this;
			var char='';
			var inputString='';
			this.currentSpan;
			var listenKey= new ListenKey();
			var span=new Span();
			var caret=new Caret();

			this.init = function(){
				var eventKeys=[];
				that.currentSpan=span.createSpan('');
				that.currentSpan.focus;
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
						that.currentSpan=e.target;
						var caretPosition=caret.getCaretPosition(that.currentSpan);
						that.currentSpan.focus();
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
					that.currentSpan=span.createSpan(inputString);
					inputString='';
					that.currentSpan=span.createSpan(inputString);
					that.currentSpan.focus();

		//            var innerText=that.currentSpan.innerHTML;//innerhtml of current 
		//            var firstText=innerText.substr(0,innerText.indexOf(' '));
		//            var secondText=innerText.substr(innerText.indexOf(' ')+1);
		//            console.log('firstText: '+firstText+' secondText: '+secondText);
		//            that.currentSpan=span.changeSpan(that.currentSpan,firstText);
		//            var previousSpan=that.currentSpan;
		//            inputString='';
		////            console.log('innerhtml',previousSpan.innerHTML);
		//            that.currentSpan=span.createNewSpan(previousSpan,secondText);
		//            that.currentSpan.focus();
				} 
				else if(eventKey[8]){
					inputString=that.currentSpan.innerHTML;
					inputString=inputString.substring(0,inputString.length-1);
					that.currentSpan=span.changeSpan(that.currentSpan,inputString);
					console.log(that.currentSpan.innerHTML);

					if(that.currentSpan.innerHTML ==' ' || that.currentSpan.innerHTML=='' || that.currentSpan.innerHTML == tab.getTab()){
						var previousSpan=that.currentSpan;
						console.log('madan');
						if(that.currentSpan.previousSibling.tagName == 'BR'){
							that.currentSpan=that.currentSpan.previousSibling.previousSibling;
							var br=document.getElementsByTagName('BR');
							var length=br.length;
							br[length-1].parentNode.removeChild(br[length-1]);

						}
						else{
						  that.currentSpan=that.currentSpan.previousSibling;
						}
						console.log(that.currentSpan);
						console.log(that.currentSpan.tagName);
						previousSpan.remove();
						that.currentSpan.focus();
						caret.setEndOfContenteditable(that.currentSpan);
						inputString=that.currentSpan.innerHTML;
						}

				}
				else if(eventKey[13]){
					event.preventDefault();
					inputString='';
					that.currentSpan=span.changeLine(inputString);
					that.currentSpan.focus();

				}
				else if(eventKey[9]){
					event.preventDefault();
					that.currentSpan = span.createSpan(tab.getTab());
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[37]){
					console.log(caret.getCaretPosition());
					if(caret.getCaretPosition() == 0){
						that.currentSpan=that.currentSpan.previousSibling;
						that.currentSpan.focus();
						caret.setEndOfContenteditable(that.currentSpan);
						console.log(that.currentSpan);
					}

				}
				else if(eventKey[39]){
					console.log(caret.getCaretPosition());
					if(caret.getCaretPosition() == that.currentSpan.innerHTML.length){
						that.currentSpan=that.currentSpan.nextSibling;
						that.currentSpan.focus();
						console.log(that.currentSpan);
					}
				}
				else if(eventKey[187]){
					event.preventDefault();
					that.currentSpan = span.createSpan('=');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[186]){
					event.preventDefault();
					that.currentSpan = span.createSpan(';');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				 else if(eventKey[189]){
					event.preventDefault();
					that.currentSpan = span.createSpan('-');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				 else if(eventKey[219]){
					event.preventDefault();
					that.currentSpan = span.createSpan('[');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				 else if(eventKey[221]){
					event.preventDefault();
					that.currentSpan = span.createSpan(']');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[220] || eventKey[226]){
					event.preventDefault();
					that.currentSpan = span.createSpan('\\');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[191]){
					event.preventDefault();
					that.currentSpan = span.createSpan('/');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[190]){
					event.preventDefault();
					that.currentSpan = span.createSpan('.');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[188]){
					event.preventDefault();
					that.currentSpan = span.createSpan(',');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[192]){
					event.preventDefault();
					that.currentSpan = span.createSpan('`');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}

				else if(eventKey[16] && eventKey[57] ){
					event.preventDefault();
					that.currentSpan = span.createSpan('(');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[48]){
					event.preventDefault();
					that.currentSpan = span.createSpan(')');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[186]){
					event.preventDefault();
					that.currentSpan = span.createSpan(':');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[219]){
					event.preventDefault();
					that.currentSpan = span.createSpan('{');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[221]){
					event.preventDefault();
					that.currentSpan = span.createSpan('}');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[188]){
					event.preventDefault();
					that.currentSpan = span.createSpan('<');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[190]){
				   event.preventDefault();
					that.currentSpan = span.createSpan('>');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[191]){
					event.preventDefault();
					that.currentSpan = span.createSpan('?');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				 else if((eventKey[16] && eventKey[220]) || (eventKey[16] && eventKey[226]) ){
					event.preventDefault();
					that.currentSpan = span.createSpan('|');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[187]){
					event.preventDefault();
					that.currentSpan = span.createSpan('+');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[189]){
					event.preventDefault();
					that.currentSpan = span.createSpan('_');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[56]){
					event.preventDefault();
					that.currentSpan = span.createSpan('*');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[55]){
					event.preventDefault();
					that.currentSpan = span.createSpan('&');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[54]){
					event.preventDefault();
					that.currentSpan = span.createSpan('^');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[53]){
					event.preventDefault();
					that.currentSpan = span.createSpan('%');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[52]){
					event.preventDefault();
					that.currentSpan = span.createSpan('$');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[51]){
					event.preventDefault();
					that.currentSpan = span.createSpan('#');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[50]){
					event.preventDefault();
					that.currentSpan = span.createSpan('@');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[49]){
					event.preventDefault();
					that.currentSpan = span.createSpan('!');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				else if(eventKey[16] && eventKey[192] ){
					event.preventDefault();
					that.currentSpan = span.createSpan('~');
					that.currentSpan.focus();
					inputString='';
					that.currentSpan = span.createSpan(inputString);
					that.currentSpan.focus();
				}
				 else if(eventKey[222]){

					 that.currentSpan = span.createSpan('');
					 that.currentSpan.focus();
					 inputString='\'';
					 that.currentSpan=span.changeSpan(that.currentSpan,inputString);
					 that.currentSpan.focus();
				 }
				else if(eventValue >=48 && eventValue <=57 ){
					var numChar = listenKey.getChar(event);
					inputString = inputString.concat(1);
					that.currentSpan = span.changeSpan(that.currentSpan,inputString);
					that.currentSpan.focus();
					eventKey[i]=false;    
				}
				else{
					for(var i =62; i <= 90; i++ ){
					if(eventKey[i]){

						var charUpper = listenKey.getChar(event);
						char = charUpper.toLowerCase();
						inputString = inputString.concat(char);
						that.currentSpan = span.changeSpan(that.currentSpan,inputString);
						eventKey[i]=false;
						}
					}
				}
			}


		}

	


var Singleton = (function(){
		
		function createInstance() {
			var textEditor=new TextEditor();
			return textEditor;
		}
		var instance;
		return {
			getInstance : function(){
				if(!instance){
					instance =createInstance();
					
				}

				return instance;
			}
		}
	})();


