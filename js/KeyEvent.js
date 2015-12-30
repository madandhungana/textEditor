function KeyEvent(element) {
	var elem = element;
	var span = new Span();
	var listenKey = new ListenKey();
	var backspace=new Backspace(elem);
	var caret = new Caret();
	var newSpan;

	this.checkCharacter = function (eventKey, eventValue) {
		var tab = new Tab();
		var textEditorInstance = Singleton.getInstance();
		if (eventKey[32] == true) {
			console.log(event);
			event.preventDefault();
			textEditorInstance.inputString = ' ';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.inputString = '';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
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
		} else if (eventKey[8]) {
			backspace.deleteOnBackspace();
		} else if (eventKey[13]) {
			event.preventDefault();
			span.changeLine();
		} else if (eventKey[9]) {
			event.preventDefault();
			span.createTab();
		} else if (eventKey[37]) {
			console.log(textEditorInstance.currentSpan);
			if (caret.getCaretPosition() == 0 && textEditorInstance.currentSpan.previousSibling != null) {
				if (textEditorInstance.currentSpan.previousSibling
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

		} else if (eventKey[39]) {
			if (caret.getCaretPosition() == textEditorInstance.currentSpan.innerHTML.length && textEditorInstance.currentSpan.nextSibling != null) {
				textEditorInstance.currentSpan = textEditorInstance.currentSpan.nextSibling;
				textEditorInstance.currentSpan.focus();
			}else if (caret.getCaretPosition() == textEditorInstance.currentSpan.innerHTML.length
				&& textEditorInstance.currentSpan.nextSibling.nextSibling!= null
				&& (textEditorInstance.currentSpan.nextSibling.tagName == 'BR')) {
				textEditorInstance.currentSpan = textEditorInstance.currentSpan.nextSibling.nextSibling;
				textEditorInstance.currentSpan.focus();
			}		

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
			textEditorInstance.inputString='';
			newSpan = span.createSpan(textEditorInstance.inputString);
			textEditorInstance.currentSpan = span.appendSpan(newSpan);
			textEditorInstance.currentSpan.focus();
		} else if (eventValue >= 48 && eventValue <= 57) {
			var numChar = listenKey.getChar(eventValue);
			textEditorInstance.inputString = textEditorInstance.inputString.concat(1);
			textEditorInstance.currentSpan = span.changeSpan(textEditorInstance.currentSpan, textEditorInstance.inputString);
			textEditorInstance.currentSpan.focus();
			eventKey[i] = false;
		} else {
			for (var i = 62; i <= 90; i++) {
				if (eventKey[i]) {
					var charUpper = listenKey.getChar(eventValue);
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
