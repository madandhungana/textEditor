function KeyEvent(element) {
	var elem = element;
	var newSpan;
	var operatorPattern=/\W/;
	
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
		
		if (eventKey[32]) {
			event.preventDefault();
			span.createSpace();
		} else if (eventKey[8]) {
			backspace.deleteOnBackspace();
			eventKey[8] = false;
		} else if (eventKey[13]) {
			event.preventDefault();
			span.changeLine();
			eventKey[13] = false;
		} else if (eventKey[9]) {
			event.preventDefault();
			span.createTab();
		} else if (eventKey[37]) {
			
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
		} else if (eventKey[39]) {
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
		} else if (eventKey[16] && eventKey[57]) {
			event.preventDefault();
			newSpan = span.createSpan('(');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[48]) {
			event.preventDefault();
			
			newSpan = span.createSpan(')');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[186]) {
			event.preventDefault();
			
			newSpan = span.createSpan(':');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[219]) {
			event.preventDefault();
			
			newSpan = span.createSpan('\{');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[221]) {
			event.preventDefault();
			
			newSpan = span.createSpan('\}');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[188]) {
			event.preventDefault();
			
			newSpan = span.createSpan('<');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[190]) {
			event.preventDefault();
			
			newSpan = span.createSpan('>');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[191]) {
			event.preventDefault();
			
			newSpan = span.createSpan('?');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if ((eventKey[16] && eventKey[220]) || (eventKey[16] && eventKey[226])) {
			event.preventDefault();
			
			newSpan = span.createSpan('|');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[187]) {
			event.preventDefault();
			
			newSpan = span.createSpan('+');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[189]) {
			event.preventDefault();
			
			newSpan = span.createSpan('_');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[56]) {
			event.preventDefault();
			
			newSpan = span.createSpan('*');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[55]) {
			event.preventDefault();
			newSpan = span.createSpan('&');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[54]) {
			event.preventDefault();
			newSpan = span.createSpan('^');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[53]) {
			event.preventDefault();
			newSpan = span.createSpan('%');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[52]) {
			event.preventDefault();
			newSpan = span.createSpan('$');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[51]) {
			event.preventDefault();
			newSpan = span.createSpan('#');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[50]) {
			event.preventDefault();
			newSpan = span.createSpan('@');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[49]) {
			event.preventDefault();
			newSpan = span.createSpan('!');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[16] && eventKey[192]) {
			event.preventDefault();
			newSpan = span.createSpan('~');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[187]) {
			event.preventDefault();
			newSpan = span.createSpan('=');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[186]) {
			event.preventDefault();
			newSpan = span.createSpan(';');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[189]) {
			event.preventDefault();
			newSpan = span.createSpan('-');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[219]) {
			event.preventDefault();
			newSpan = span.createSpan('[');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[221]) {
			event.preventDefault();
			newSpan = span.createSpan(']');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[220] || eventKey[226]) {
			event.preventDefault();
			newSpan = span.createSpan('\\');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[191]) {
			event.preventDefault();
			newSpan = span.createSpan('/');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[190]) {
			event.preventDefault();
			newSpan = span.createSpan('.');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[188]) {
			event.preventDefault();
			newSpan = span.createSpan(',');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventKey[192]) {
			event.preventDefault();
			newSpan = span.createSpan('`');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			
		} else if (eventKey[222]) {
			event.preventDefault();
			newSpan = span.createSpan('\'');
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
			textEditorInstance.inputString = '\'';
			caret.setEndOfContenteditable(textEditorInstance.currentSpan);
			
		} else if (eventValue >= 48 && eventValue <= 57) {
			var numChar = listenKey.getChar(eventValue);
			
			if(operatorPattern.test(textEditorInstance.currentSpan.innerHTML) && caret.getCaretPosition()==0){
				newSpan=span.createSpan('');
				elem.insertBefore(newSpan,textEditorInstance.currentSpan);
				textEditorInstance.currentSpan = newSpan;
				textEditorInstance.currentSpan.focus();
			}else if(operatorPattern.test(textEditorInstance.currentSpan.innerHTML) && caret.getCaretPosition()==1){
				newSpan=span.createSpan('');
				elem.insertBefore(newSpan,textEditorInstance.currentSpan.nextSibling);
				textEditorInstance.currentSpan = newSpan;
				textEditorInstance.currentSpan.focus();
			}
			textEditorInstance.inputString = textEditorInstance.inputString.concat(1);
			textEditorInstance.currentSpan = span.changeSpan(textEditorInstance.currentSpan, textEditorInstance.inputString);
			textEditorInstance.currentSpan.focus();
			eventKey[i] = false;
		} else {
			for (var i = 62; i <= 90; i++) {
				if (eventKey[i]) {
					var charUpper = listenKey.getChar(eventValue);
					if(operatorPattern.test(textEditorInstance.currentSpan.innerHTML) && caret.getCaretPosition()==0){
						newSpan=span.createSpan('');
						elem.insertBefore(newSpan,textEditorInstance.currentSpan);
						textEditorInstance.currentSpan = newSpan;
						textEditorInstance.currentSpan.focus();
					}else if(operatorPattern.test(textEditorInstance.currentSpan.innerHTML) && caret.getCaretPosition()==1){
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
