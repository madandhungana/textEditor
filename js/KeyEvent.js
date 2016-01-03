function KeyEvent(element) {
	var elem = element;
	var newSpan;
	var operatorPattern=/\W/;
	var regexQuote=/^'/i;
	var count = 0; 		//counter for quote
	
	var span = new Span();
	var listenKey = new ListenKey();
	var backspace=new Backspace(elem);
	var caret = new Caret();
	
	/**
	*
	*This method checks all the keycode and operates accordingly
	*@param []eventKey
	*@param {Number}eventValue
	*
	*/
	this.checkCharacter = function (eventKey, eventValue) {
		var tab = new Tab();
		var textEditorInstance = Singleton.getInstance();
		var quoteFlag = textEditorInstance.singleQuoteFlag;

		if (eventKey[32]) { 	//whitespace
			
			if(!quoteFlag){
				event.preventDefault();
				span.createSpace();
			}
		} else if (eventKey[8]) {	//Backspace
			if(!quoteFlag){
				backspace.deleteOnBackspace();
				eventKey[8] = false;
			}
		} else if (eventKey[13]) {	//Enter
			if(!quoteFlag){
				event.preventDefault();
				span.changeLine();
				eventKey[13] = false;
			}
		} else if (eventKey[9]) {	//Tab
			if(!quoteFlag){
				event.preventDefault();
				span.createTab();
				eventKey[9] = false;
			}
		} else if (eventKey[37]) {	//left arrow
			
			if(caret.getCaretPosition() == 0 
			   && operatorPattern.test(textEditorInstance.currentSpan.previousSibling.innerHTML)
			   && textEditorInstance.currentSpan.previousSibling.innerHTML != ' '){
				textEditorInstance.currentSpan = textEditorInstance.currentSpan.previousSibling.previousSibling;
				textEditorInstance.currentSpan.focus();
			}else if (caret.getCaretPosition() == 0 && textEditorInstance.currentSpan.previousSibling != null) {
				
				if (textEditorInstance.currentSpan.previousSibling.innerHTML == ' '){
					textEditorInstance.currentSpan = textEditorInstance.currentSpan.previousSibling.previousSibling;
				}else if (textEditorInstance.currentSpan.previousSibling
						!= document.getElementsByTagName('span')[0].previousSibling
						&& textEditorInstance.currentSpan.previousSibling.tagName != 'BR') {

					textEditorInstance.currentSpan = textEditorInstance.currentSpan.previousSibling;
					
				} else if (textEditorInstance.currentSpan.previousSibling
						   != document.getElementsByTagName('span')[0].previousSibling
						   && textEditorInstance.currentSpan.previousSibling.tagName == 'BR') {
					textEditorInstance.currentSpan = textEditorInstance.currentSpan.previousSibling.previousSibling;
				}
				caret.setEndOfContenteditable(textEditorInstance.currentSpan);
				event.preventDefault();
				textEditorInstance.currentSpan.focus();
			}
			eventKey[37] = false;
			
		} else if (eventKey[39]) {		//Right arrow
			if ((caret.getCaretPosition() == textEditorInstance.currentSpan.innerHTML.length || textEditorInstance.currentSpan.innerHTML == ' ')
				&& textEditorInstance.currentSpan.nextSibling != null) {
				if(operatorPattern.test(textEditorInstance.currentSpan.previousSibling.innerHTML)
				   && textEditorInstance.currentSpan.nextSibling.innerHTML != ' '){
					textEditorInstance.currentSpan = textEditorInstance.currentSpan.nextSibling.nextSibling;
					textEditorInstance.currentSpan.focus();
				}else if (textEditorInstance.currentSpan.nextSibling.innerHTML == ' '){
						textEditorInstance.currentSpan = textEditorInstance.currentSpan.nextSibling.nextSibling;
				}else if (textEditorInstance.currentSpan.nextSibling
					!= elem.lastChild && textEditorInstance.currentSpan.nextSibling.tagName != 'BR') {
					textEditorInstance.currentSpan = textEditorInstance.currentSpan.nextSibling;
				} else if (textEditorInstance.currentSpan.nextSibling != elem.lastChild
						   && textEditorInstance.currentSpan.nextSibling.tagName == 'BR') {
					textEditorInstance.currentSpan = textEditorInstance.currentSpan.nextSibling.nextSibling;
				}
				event.preventDefault();
				textEditorInstance.currentSpan.focus();
				
			}
			eventKey[39] = false;
		}else if(eventKey[38]){		//keycode for up arrow
			event.preventDefault();
		}else if(eventKey[40]){		//keycode for down arrow
			event.preventDefault();
		} else if (eventKey[16] && eventKey[57]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('(');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
				textEditorInstance.inputString = '';

				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
				
				eventKey[57] = false;
			}
		} else if (eventKey[16] && eventKey[48]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan(')');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
				
				eventKey[48] = false;
			}
		} else if (eventKey[16] && eventKey[186]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan(':');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
				
				eventKey[186] = false;
			}
		} else if (eventKey[16] && eventKey[219]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('\{');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[16] && eventKey[221]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('\}');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[16] && eventKey[188]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('<');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[16] && eventKey[190]) {
			if(!quoteFlag){
				event.preventDefault();
			
				newSpan = span.createSpan('>');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();				
			}
		} else if (eventKey[16] && eventKey[191]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('?');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				eventKey[191] = false;
			}
		} else if ((eventKey[16] && eventKey[220]) || (eventKey[16] && eventKey[226])) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('|');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
				
				eventKey[220] = false;
				eventKey[226] = false;
			}
		} else if (eventKey[16] && eventKey[187]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('+');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				eventKey[187] = false;
			}
		} else if (eventKey[16] && eventKey[189]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('_');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
				
				eventKey[189] = false;
			}
		} else if (eventKey[16] && eventKey[56]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('*');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
				
				eventKey[189] = false;
			}
		} else if (eventKey[16] && eventKey[55]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('&');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
				
				eventKey[55] = false;
			}
		} else if (eventKey[16] && eventKey[54]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('^');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
				
				eventKey[54] = false;
			}
		} else if (eventKey[16] && eventKey[53]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('%');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[16] && eventKey[52]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('$');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[16] && eventKey[51]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('#');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[16] && eventKey[50]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('@');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[16] && eventKey[49]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('!');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[16] && eventKey[192]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('~');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[187]) {
			if(!quoteFlag){	
				event.preventDefault();

				newSpan = span.createSpan('=');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[186]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan(';');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[189]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('-');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[219]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('[');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[221]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan(']');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[220] || eventKey[226]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('\\');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[191]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('/');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[190]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('.');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[188]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan(',');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[192]) {
			if(!quoteFlag){
				event.preventDefault();

				newSpan = span.createSpan('`');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();

				textEditorInstance.inputString = '';
				newSpan = span.createSpan(textEditorInstance.inputString);
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			}
		} else if (eventKey[222]) {
			event.preventDefault();
			if(count == 1){
				newSpan = span.createSpan('\'');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
				
				newSpan = span.createSpan('');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
				textEditorInstance.inputString = '';
				textEditorInstance.singleQuoteFlag = false;
				count = 0;
			}else{
				newSpan = span.createSpan('\'');
				textEditorInstance.currentSpan = span.appendSpan(newSpan);
				textEditorInstance.currentSpan.focus();
			
				textEditorInstance.inputString = '\'';
				caret.setEndOfContenteditable(textEditorInstance.currentSpan);
				textEditorInstance.singleQuoteFlag = true;
				count = 1;
			}
			
			eventKey[222] = false;
		} else if (eventValue >= 48 && eventValue <= 57) {
			var numChar = listenKey.getChar(eventValue);
			
			if(operatorPattern.test(textEditorInstance.currentSpan.innerHTML)
				 && !regexQuote.test(textEditorInstance.currentSpan.innerHTML)&& caret.getCaretPosition()==1){
				newSpan=span.createSpan('');
				elem.insertBefore(newSpan,textEditorInstance.currentSpan);
				textEditorInstance.currentSpan = newSpan;
				textEditorInstance.currentSpan.focus();
			}else if(operatorPattern.test(textEditorInstance.currentSpan.innerHTML)
					 && !regexQuote.test(textEditorInstance.currentSpan.innerHTML) && caret.getCaretPosition()==1){
				newSpan=span.createSpan('');
				elem.insertBefore(newSpan,textEditorInstance.currentSpan.nextSibling);
				textEditorInstance.currentSpan = newSpan;
				textEditorInstance.currentSpan.focus();
			}
			textEditorInstance.inputString = textEditorInstance.inputString.concat(1);
			textEditorInstance.currentSpan = span.changeSpan(textEditorInstance.currentSpan, textEditorInstance.inputString);
			textEditorInstance.currentSpan.focus();
			eventKey[eventValue] = false;
		} else {
			for (var i = 62; i <= 90; i++) {
				if (eventKey[i]) {
					var charUpper = listenKey.getChar(eventValue);
					if(operatorPattern.test(textEditorInstance.currentSpan.innerHTML)
					   && !regexQuote.test(textEditorInstance.currentSpan.innerHTML)&& caret.getCaretPosition()==0){
						newSpan=span.createSpan('');
						elem.insertBefore(newSpan,textEditorInstance.currentSpan);
						textEditorInstance.currentSpan = newSpan;
						textEditorInstance.currentSpan.focus();
					}else if(operatorPattern.test(textEditorInstance.currentSpan.innerHTML)
							 && !regexQuote.test(textEditorInstance.currentSpan.innerHTML)&& caret.getCaretPosition()==1){
						newSpan=span.createSpan('');
						elem.insertBefore(newSpan,textEditorInstance.currentSpan.nextSibling);
						textEditorInstance.currentSpan = newSpan;
						textEditorInstance.currentSpan.focus();
					}
					char = charUpper.toLowerCase();
					textEditorInstance.inputString = textEditorInstance.inputString.concat(char);
					textEditorInstance.currentSpan = span.changeSpan(textEditorInstance.currentSpan, textEditorInstance.inputString);
					textEditorInstance.currentSpan.focus();
					eventKey[i] = false;
				}
			}
		}
	}
}
